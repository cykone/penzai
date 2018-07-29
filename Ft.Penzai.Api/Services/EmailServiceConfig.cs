using Ft.Penzai.Api.Services.Contracts;
using Ft.Penzai.Api.Settings;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;


namespace Ft.Penzai.Api.Services
{
    public class EmailServiceConfig : IEmailService
    {
        #region fields

        private readonly EmailSettings emailSettings;

        #endregion fields

        #region Ctor

        public EmailServiceConfig(EmailSettings emailSettings)
        {
            this.emailSettings = emailSettings;
        }

        #endregion Ctor

        #region Methods

#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
        public async Task SendEmailAsync(EmailModelBase email)
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
        {
            using (var client = new SmtpClient(this.emailSettings.SmtpHost))
            {
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential(this.emailSettings.SmtpUserName, this.emailSettings.SmtpPassword);
                client.Port = this.emailSettings.SmtpPort;
                client.EnableSsl = this.emailSettings.SmtpEnableSsl;
                client.DeliveryFormat = SmtpDeliveryFormat.International;

                client.Send(ToMailMessage(email));
            }
        }

        #endregion Methods

        #region Helpers

        private MailMessage ToMailMessage(EmailModelBase model)
        {
            if (!model.IsValid)
            {
                throw new ValidationException();
            }


            var ret = new MailMessage();
            var displayName = string.IsNullOrEmpty(model.DisplayName) ? model.From : model.DisplayName;

            ret.From = new MailAddress(model.From, displayName);
            ret.IsBodyHtml = true;
            model.To.ForEach(to => ret.To.Add(to));
            ret.Body = model.Body;
            ret.Subject = model.Subject;

            return ret;
        }

        #endregion Helpers
    }
}