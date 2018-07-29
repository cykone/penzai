using System;
using System.Collections.Generic;
using System.Text;

namespace Ft.Penzai.Api.Dtos.Accounts
{
    public class RegisterResult
    {
        public bool Success { get; set; }

        public List<string> ErrorMessage { get; set; }

    }
}
