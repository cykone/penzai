using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ft.Penzai.Api.Dataaccess;
using Ft.Penzai.Api.Dataaccess.Extensions;
using Ft.Penzai.Api.Dtos.Logging;
using Ft.Penzai.Api.Services.LoggerProviders.Contracts;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Ft.Penzai.Api.Controllers
{
    [Route("api/[controller]")]
    public class LogController : Controller
    {
        #region Fields 

        private readonly ApplicationDbContext dbContext;
        private readonly ILogService logService;

        #endregion Fields

        #region Ctor

        public LogController(ApplicationDbContext dbContext, ILogService logService)
        {
            this.dbContext = dbContext;
            this.logService = logService;
        }

        #endregion Ctor

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var entries = await this.logService.GetLogsAsync();
            return new OkObjectResult(entries);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] LogEntry logEntry)
        {
            var logEntryEntity = logEntry.ToEntity();
            this.dbContext.LogEntries.Add(logEntryEntity);
            await this.dbContext.SaveChangesAsync();

            return new OkResult();
        }
    }
}
