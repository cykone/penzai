using Ft.Penzai.Api.Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ft.Penzai.Api.Services
{
    public class RequestDemoEmail : EmailModelBase
    {
        private RequestDemoEmail() : base()
        {

        }

        public static RequestDemoEmail Create(string firstname, string lastname, string companyname, string fromEmail, string message)
        {
            var ret = new RequestDemoEmail();
            ret.AddReceiverAddress("florian.tiefenbach@network.rca.ac.uk");
            ret.SetFrom("no-reply@penzai.io");
            ret.SetSubject("A Company is requesting a demo");
            ret.SetDisplayName("Penzai Website");
            ret.SetBody(GenerateEmailBody(firstname, lastname, companyname, fromEmail, message));

            return ret;
        }

        private static string GenerateEmailBody(string firstname, string lastname, string companyname, string fromEmail, string message)
        {
            return $"firstname: {firstname}, lastname: {lastname}, companyname: {companyname} email: {fromEmail}, message: {message}";
        }
    }
}
