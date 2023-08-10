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



namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrisonerController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        public PrisonerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //317814

        public JsonResult Get()
        {
           
            string query = @"
                            select  Tx002, Tx004 from
                            dbo.TbPrisoner" ;

                 DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }

                return new JsonResult(table);

         }

     }
 }

/*  declare @i as int;
             //int j = 1;
             for (i = (j + i); i <= 100000; i++)
             {
                 if (i == j + 1000)
                 {
                     i = 0;
                     j = j + 1000;


                 set @i = 1;

                 while @i <= 250000
                  // set @i = @i + 1;
                // end;
                begin */


// string query = @"
//                  select  Tx002, Tx004, Tx005, Tx014, Tx023 from
//                dbo.TbPrisoner where Tx023 not like '%رد الطلب%'
//                ";