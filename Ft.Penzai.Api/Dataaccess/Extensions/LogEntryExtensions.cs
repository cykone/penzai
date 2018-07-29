using Ft.Penzai.Api.Dataaccess.Entities;
using Ft.Penzai.Api.Dtos.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ft.Penzai.Api.Dataaccess.Extensions
{
    public static class LogEntryExtensions
    {
        public static LogEntry ToDto(this LogEntryEntity entry)
        {
            var ret = new LogEntry
            {
                CreatedOn = entry.CreatedOn.UtcDateTime,
                Message = entry.Message
            };

            return ret;
        }

        public static LogEntryEntity ToEntity(this LogEntry entry)
        {
            var ret = LogEntryEntity.Create(entry.Message);
            return ret;
        }
    }
}
