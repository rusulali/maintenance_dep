﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string Department { get; set; }

        public DateTime DateOfJoining { get; set; }

        public string PhotoFileName { get; set; }
        public string Losstype { get; set; }

        public string Devicetype { get; set; }

        public string Note { get; set; }

    }
}
