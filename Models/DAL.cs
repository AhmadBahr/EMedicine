using System.Data.SqlClient;
using System.Data;

namespace EMedicineBE.Models
{
    public class DAL
    {
        public Response register(Users users, SqlConnection connection)
        {
            Response response = new Response();
            try
            {
                using (SqlCommand cmd = new SqlCommand("sp_register", connection))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@FirstName", users.FirstName);
                    cmd.Parameters.AddWithValue("@LastName", users.LastName);
                    cmd.Parameters.AddWithValue("@Email", users.Email);
                    cmd.Parameters.AddWithValue("@Fund", 0);
                    cmd.Parameters.AddWithValue("@Password", users.Password);
                    cmd.Parameters.AddWithValue("@Type", "Users");
                    cmd.Parameters.AddWithValue("@Status", "Pending");

                    connection.Open();
                    var result = cmd.ExecuteScalar();
                    connection.Close();

                    if (Convert.ToInt32(result) == 1)
                    {
                        response.StatusCode = 200;
                        response.StatusMessage = "User registered successfully";
                    }
                    else
                    {
                        response.StatusCode = 100;
                        response.StatusMessage = "Failed to register user";
                    }
                }
            }
            catch (Exception ex)
            {
                // Log the exception message or use a logging framework
                response.StatusCode = 500;
                response.StatusMessage = $"Exception: {ex.Message}";
            }
            return response;
        }