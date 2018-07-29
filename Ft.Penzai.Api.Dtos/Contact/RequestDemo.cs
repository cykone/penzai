using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Ft.Penzai.Api.Dtos.Contact
{
    public class RequestDemo
    {
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string CompanyName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public string Message { get; set; }
    }
}
