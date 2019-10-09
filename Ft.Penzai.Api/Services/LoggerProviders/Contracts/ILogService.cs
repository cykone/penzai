using Ft.Penzai.Api.Dtos.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ft.Penzai.Api.Services.LoggerProviders.Contracts
{
    public interface ILogService
    {
        Task LogAsync(string context, string message);

        Task<List<LogEntry>> GetLogsAsync();
    }
}
