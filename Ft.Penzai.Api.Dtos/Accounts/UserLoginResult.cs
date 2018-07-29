using System;
using System.Collections.Generic;
using System.Text;

namespace Ft.Penzai.Api.Dtos.Accounts
{
    public class UserLoginResult 
    {
        public string UserId { get; set; }

        public string UserName { get; set; }

        public string Token { get; set; }

        public bool Success { get; set; }

        public bool IsNotAllowed { get; set; }

        public bool InvalidUserPw { get; set; }

        public bool OnBoardingCompleted { get; set; }
    }
}
