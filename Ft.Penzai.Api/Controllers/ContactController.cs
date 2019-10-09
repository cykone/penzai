using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ft.Penzai.Api.Dataaccess;
using Ft.Penzai.Api.Dtos.Contact;
using Ft.Penzai.Api.Services;
using Ft.Penzai.Api.Services.Contracts;
using Ft.Penzai.Api.Services.LoggerProviders.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Ft.Penzai.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/contact")]
    public class ContactController : Controller
    {
        #region Fields

        private readonly IEmailService emailService;
        private readonly ILogService logService;
        private readonly ApplicationDbContext dbContext;

        #endregion Fields

        #region Ctor

        public ContactController(IEmailService emailService, ILogService logService, ApplicationDbContext dbContext)
        {
            this.emailService = emailService;
            this.logService = logService;
            this.dbContext = dbContext;
        }

        #endregion Ctor

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            await this.logService.LogAsync("test", "testmessage");
            return new OkObjectResult("Works");
        }

        [HttpPost("demo")]
        [AllowAnonymous]
        public async Task<IActionResult> RequestDemo([FromBody] RequestDemo requestDemo)
        {
            if (!ModelState.IsValid)
            {
                return new BadRequestResult();
            }

            await this.emailService.SendEmailAsync(RequestDemoEmail.Create(requestDemo.FirstName, requestDemo.LastName, requestDemo.CompanyName, requestDemo.Email, requestDemo.Email));

            return new OkResult();
        }

        [HttpPost("feedback")]
        [AllowAnonymous]
        public async Task<IActionResult> SendFeedback([FromBody] Feedback feedback)
        {
            if (!ModelState.IsValid)
            {
                return new BadRequestResult();
            }

            await this.emailService.SendEmailAsync(FeedbackEmail.Create(feedback.Email, feedback.Message));

            return new OkResult();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> SendEmail([FromBody]EmailData emailData)
        {
            if (!ModelState.IsValid)
            {
                return new BadRequestResult();
            }

            await this.emailService.SendEmailAsync(ContactEmail.Create(emailData.senderName, emailData.senderEmail, emailData.subject, emailData.message));

            return new OkResult();
        }
    }
}
