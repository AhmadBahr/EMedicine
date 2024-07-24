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
    }
    public Response login(Users users, SqlConnection connection)
    {
        Response response = new Response();
        try
        {
            using (SqlCommand cmd = new SqlCommand("sp_login", connection))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Email", users.Email);
                cmd.Parameters.AddWithValue("@Password", users.Password);

                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataTable dt = new DataTable();
                da.Fill(dt);

                if (dt.Rows.Count > 0)
                {
                    DataRow row = dt.Rows[0];
                    Users user = new Users
                    {
                        ID = Convert.ToInt32(row["ID"]),
                        FirstName = Convert.ToString(row["FirstName"]),
                        LastName = Convert.ToString(row["LastName"]),
                        Email = Convert.ToString(row["Email"]),
                        Type = Convert.ToString(row["Type"])  // Ensure this field is correctly set
                    };

                    response.StatusCode = 200;
                    response.StatusMessage = "User logged in successfully";
                    response.user = user;
                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "Invalid email or password";
                    response.user = null;
                }
            }
        }
        catch (Exception ex)
        {
            response.StatusCode = 500;
            response.StatusMessage = $"Exception: {ex.Message}";
        }
        return response;
    }
    public Response viewUser(Users users, SqlConnection connection)
    {
        SqlDataAdapter da = new SqlDataAdapter("p_viewUser", connection);
        da.SelectCommand.CommandType = CommandType.StoredProcedure;
        da.SelectCommand.Parameters.AddWithValue("@ID", users.ID);
        DataTable dt = new DataTable();
        da.Fill(dt);
        Response response = new Response();
        Users user = new Users();
        if (dt.Rows.Count > 0)
        {
            user.ID = Convert.ToInt32(dt.Rows[0]["ID"]);
            user.FirstName = Convert.ToString(dt.Rows[0]["FirstName"]);
            user.LastName = Convert.ToString(dt.Rows[0]["LastName"]);
            user.Email = Convert.ToString(dt.Rows[0]["Email"]);
            user.Password = Convert.ToString(dt.Rows[0]["Password"]);
            user.Type = Convert.ToString(dt.Rows[0]["Type"]);
            user.Fund = Convert.ToDecimal(dt.Rows[0]["Fund"]);
            user.CreatedOn = Convert.ToDateTime(dt.Rows[0]["CreatedOn"]);
            response.StatusCode = 200;
            response.StatusMessage = "User exists";
        }
        else
        {
            response.StatusCode = 100;
            response.StatusMessage = "User does not exist";
            response.user = user;
        }
        return response;
    }
    public Response updateProfile(Users users, SqlConnection connection)
    {
        Response response = new Response();
        SqlCommand cmd = new SqlCommand("sp_updateProfile", connection);
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.Parameters.AddWithValue("@FirstName", users.FirstName);
        cmd.Parameters.AddWithValue("@LastName", users.LastName);
        cmd.Parameters.AddWithValue("@Password", users.Password);
        cmd.Parameters.AddWithValue("@Email", users.Email);
        connection.Open();
        int i = cmd.ExecuteNonQuery();
        connection.Close();
        if (i > 0)
        {
            response.StatusCode = 200;
            response.StatusMessage = "Profile updated successfully";
        }
        else
        {
            response.StatusCode = 100;
            response.StatusMessage = "Failed to update profile";
        }
        return response;
    }
    public Response addToCart(Cart cart, SqlConnection connection)
    {
        Response response = new Response();
        SqlCommand cmd = new SqlCommand("sp_AddToCart", connection);
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.Parameters.AddWithValue("@UserId", cart.UserId);
        cmd.Parameters.AddWithValue("@UnitPrice", cart.UnitPrice);
        cmd.Parameters.AddWithValue("@Discount", cart.Discount);
        cmd.Parameters.AddWithValue("@Quantity", cart.Quantity);
        cmd.Parameters.AddWithValue("@TotalPrice", cart.TotalPrice);
        cmd.Parameters.AddWithValue("@MedicineId", cart.MedicineID);
        connection.Open();
        int i = cmd.ExecuteNonQuery();
        connection.Close();
        if (i > 0)
        {
            response.StatusCode = 200;
            response.StatusMessage = "Item added to cart successfully";
        }
        else
        {
            response.StatusCode = 100;
            response.StatusMessage = "Failed to add item to cart";
        }
        return response;
    }
    public Response placeOrder(Users users, SqlConnection connection)
    {
        Response response = new Response();
        SqlCommand cmd = new SqlCommand("sp_PlaceOrder", connection);
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.Parameters.AddWithValue("@ID", users.ID);
        connection.Open();
        int i = cmd.ExecuteNonQuery();
        connection.Close();
        if (i > 0)
        {
            response.StatusCode = 200;
            response.StatusMessage = "Order placed successfully";
        }
        else
        {
            response.StatusCode = 100;
            response.StatusMessage = "Failed to place order";
        }
        return response;
    }
    public Response OrderList(Users users, SqlConnection connection)
    {
        Response response = new Response();
        List<Orders> listOrder = new List<Orders>();
        SqlDataAdapter da = new SqlDataAdapter("sp_OrderList", connection);
        da.SelectCommand.CommandType = CommandType.StoredProcedure;
        da.SelectCommand.Parameters.AddWithValue("@ID", users.ID);
        da.SelectCommand.Parameters.AddWithValue("@Type", users.Type);
        DataTable dt = new DataTable();
        da.Fill(dt);
        if (dt.Rows.Count > 0)
        {
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                Orders order = new Orders();
                order.ID = Convert.ToInt32(dt.Rows[i]["ID"]);
                order.OrderNo = Convert.ToString(dt.Rows[i]["OrderNo"]);
                order.OrderTotal = Convert.ToDecimal(dt.Rows[i]["OrderTotal"]);
                order.OrderStatus = Convert.ToString(dt.Rows[i]["OrderStatus"]);
                listOrder.Add(order);
            }
            if (listOrder.Count > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "Order details fetched successfully";
                response.listOrders = listOrder;
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "Failed to fetch order details";
                response.listOrders = null;
            }
        }
        else
        {
            response.StatusCode = 100;
            response.StatusMessage = "Failed to fetch order details";
            response.listOrders = null;
        }
        return response;
    }
}
