using EMedicineBE.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;


namespace EMedicineBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UsersController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("registration")]
        public IActionResult Register([FromBody] Users users)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Response response = new Response();
            DAL dal = new DAL();
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS")))
            {
                try
                {
                    response = dal.register(users, connection);
                }
                catch (Exception ex)
                {
                    response.StatusCode = 500;
                    response.StatusMessage = $"Exception: {ex.Message}";
                }
            }

            if (response.StatusCode == 200)
            {
                return Ok(response);
            }
            else
            {
                return StatusCode(response.StatusCode, response);
            }
        }
        [HttpPost]
        [Route("login")]
        public Response Login(Users users)
        {
            Response response = new Response();
            DAL dal = new DAL();
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS")))
            {
                response = dal.login(users, connection);
            }
            return response;
        }

        [HttpPost]
        [Route("ViewUser")]
        public Response ViewUser(Users users)
        {
            Response response = new Response();
            DAL dal = new DAL();
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS")))
            {
                response = dal.viewUser(users, connection);
            }
            return response;
        }

        [HttpPost]
        [Route("updateProfile")]
        public Response UpdateProfile(Users users)
        {
            Response response = new Response();
            DAL dal = new DAL();
            using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS")))
            {
                response = dal.updateProfile(users, connection);
            }
            return response;
        }
    }
}
