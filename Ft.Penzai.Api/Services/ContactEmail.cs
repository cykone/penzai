using Ft.Penzai.Api.Services.Contracts;

namespace Ft.Penzai.Api.Services
{
    public class ContactEmail : EmailModelBase
    {
        private ContactEmail()
        {
        }

        public static ContactEmail Create(string senderName, string fromEmail, string subject, string message)
        {
            var ret = new ContactEmail();
            ret.AddReceiverAddress("florian.tiefenbach@outlook.com");
            ret.SetFrom("no-reply@penzai.io");
            ret.SetSubject(subject);
            ret.SetBody(GenerateEmailBody(senderName, fromEmail, message));

            return ret;
        }

        private static string GenerateEmailBody(string senderName, string fromEmail, string message)
        {
            return $"name: {senderName}, email: {fromEmail}, message: {message}";
        }
    }
}
