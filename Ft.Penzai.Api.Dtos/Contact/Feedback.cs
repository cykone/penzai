using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Ft.Penzai.Api.Dtos.Contact
{
    public class Feedback
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Message { get; set; }
    }
}
