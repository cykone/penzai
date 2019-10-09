using Ft.Penzai.Api.Services.Contracts;

namespace Ft.Penzai.Api.Services
{
    public class FeedbackEmail : EmailModelBase
    {
        private FeedbackEmail()
        {
        }

        public static FeedbackEmail Create(string fromEmail, string message)
        {
            var ret = new FeedbackEmail();
            ret.AddReceiverAddress("florian.tiefenbach@outlook.com");
            ret.SetFrom("no-reply@penzai.io");
            ret.SetSubject("Somebody send a feedback from Penzai website");
            ret.SetDisplayName("Penzai Feedback");
            ret.SetBody(GenerateEmailBody(fromEmail, message));

            return ret;
        }

        private static string GenerateEmailBody(string fromEmail, string message)
        {
            return $"email: {fromEmail}, message: {message}";
        }

    }
}
