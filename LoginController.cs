using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using WebApplication1.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;
namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public LoginController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


          [HttpPost]


           public string Login(Login Log)
           {
               string query = @"
                          select * from dbo.Users
                          WHERE Username = '" + Log.Username + "' and Password = '" + Log.Password + "'"
                           ;

               string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");

               using (SqlConnection myCon = new SqlConnection(sqlDataSource))
               {
                   myCon.Open();
                   using (SqlCommand myCommand = new SqlCommand(query, myCon))
                   {
                       SqlDataAdapter da = new SqlDataAdapter(query, myCon);
                       DataTable dt = new DataTable();
                       da.Fill(dt);
                       if (dt.Rows.Count > 0)
                       {

                        //Response.Redirect("Employee") ;
                      
                        {
                            return "valid user";
                        }
                    }
                       else
                       {
                           return "invalid user";
                       }

                   }

               }
           }
     }
 }
   
  /*      [HttpPost]

        public JsonResult Post(Login Reg)
        {
            string query = @"
                       insert into dbo.Users
                       values (@Username,@Password)
                        ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Username", Reg.Username);
                    myCommand.Parameters.AddWithValue("@Password", Reg.Password);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                   // Response.Redirect("api/Department");
                }
            }

            return new JsonResult("Added Successfully");
        }
    }
}

    */









    /* [HttpPost]

     public JsonResult Post(Login Reg)
     {
         string query = @"
                        insert into dbo.Users
                        values (@Username,@Password)
                         ";

         DataTable table = new DataTable();
         string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
         SqlDataReader myReader;
         using (SqlConnection myCon = new SqlConnection(sqlDataSource))
         {
             myCon.Open();
             using (SqlCommand myCommand = new SqlCommand(query, myCon))
             {
                 myCommand.Parameters.AddWithValue("@Username", Reg.Username);
                 myCommand.Parameters.AddWithValue("@Password", Reg.Password);
                 myReader = myCommand.ExecuteReader();
                 table.Load(myReader);
                 myReader.Close();
                 myCon.Close();
             }
         }

         return new JsonResult("Added Successfully");
     }



     /*[HttpPost]
     [Route("Reg")]
     public string Reg(Login registration)
     {


         SqlConnection con = new SqlConnection(_configuration.GetConnectionString("EmployeeAppCon").ToString());
         SqlCommand cmd = new SqlCommand("insert into Users (Username, Password) values ( '" + registration.Username + "' and Password = '" + registration.Password + "',)", con);
         con.Open;
         int i = cmd.ExecuteNonQuery;
         con.Close;
         if (i > 0)
         {
             return "data inserted";
         }
         else
         {
             return "error";
         }


     }






[HttpPost]
        
        [Route ("Log")]
         public string Log(Login Log)
         {


             SqlConnection con = new SqlConnection(_configuration.GetConnectionString("EmployeeAppCon").ToString());
             SqlDataAdapter da = new SqlDataAdapter("select * from Users WHERE Username = '" + Log.Username + "' and Password = '" + Log.Password + "'", con);   
             DataTable dt = new DataTable();
             da.Fill(dt);
             if(dt.Rows.Count > 0)
             {
                 return "valid user";
             }
             else
             {
                 return "invalid user";
             }

         }

     }
     
 }
  */
