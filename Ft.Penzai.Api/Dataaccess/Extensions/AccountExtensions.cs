using Ft.Penzai.Api.Dataaccess.Entities;
using Ft.Penzai.Api.Dtos.Accounts;
using Ft.Penzai.Api.Dtos.Profile;
using Microsoft.AspNetCore.Identity;

namespace Ft.Penzai.Api.Dataaccess.Extensions
{
    internal static class AccountExtensions
    {

        #region Register

        public static UserAccount ToAccountEntity(this RegisterUser registerUser)
        {
            return new UserAccount()
            {
                UserName = registerUser.ToUserName(),
                FirstName = registerUser.Firstname,
                LastName = registerUser.Lastname,
                Email = registerUser.Email
            };
        }

        #endregion Register

        public static UserProfileShort ToShortProfile(this UserAccount account)
        {
            var ret = new UserProfileShort
            {
                Id = account.Id,
                FirstName = account.FirstName
            };

            return ret;
        }
    }
}
