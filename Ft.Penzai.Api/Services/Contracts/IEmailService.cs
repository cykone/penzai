using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ft.Penzai.Api.Services.Contracts
{
    public interface IEmailService
    {
        Task SendEmailAsync(EmailModelBase email);
    }
}
