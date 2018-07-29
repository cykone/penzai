using Microsoft.AspNetCore.Identity;

namespace Ft.Penzai.Api.Dataaccess.Entities
{
    public class UserAccount : IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

    }
}
