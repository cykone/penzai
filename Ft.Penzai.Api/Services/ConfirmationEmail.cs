using Ft.Penzai.Api.Services.Contracts;

namespace Ft.Penzai.Api.Services
{
    public class ConfirmationEmail : EmailModelBase
    {
        #region Ctor

        private ConfirmationEmail()
            : base("no-reply@penzai.io", "penzai.io", "Confirm your email address")
        { }

        #endregion Ctor

        #region Factory

        public static ConfirmationEmail Create(string to, string confirmationUrl, string firstName)
        {
            var ret = new ConfirmationEmail();
            ret.AddReceiverAddress(to);
            ret.SetBody(GenerateConfirmationBody(confirmationUrl, firstName));

            return ret;
        }

        #endregion Factory

        #region Utils

        private static string GenerateConfirmationBody(string confirmationUrl, string firstName)
        {
            return $"<h2>Welcome {firstName} to Penzai</h2><p>Please click <a href=\"{confirmationUrl}\">here</a> to confirm your email address.</p><br /><br />Thank you for registration.";
        }

        #endregion Utils
    }
}
