using Ft.Utils.Strings;
using System.ComponentModel.DataAnnotations;

namespace Ft.Penzai.Api.Dtos.Accounts
{
    public class RegisterUser
    {
        [Required]
        public string Email { get; set; }

        [Required, MinLength(8)]
        public string Password { get; set; }

        [Required]
        public string Firstname { get; set; }

        [Required]
        public string  Lastname { get; set; }

        public string ToUserName()
        {
            return this.Email;
        }
    }
}
