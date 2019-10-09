using System;

namespace Ft.Penzai.Api.Dtos.Logging
{
    public class LogEntry
    {   
        public DateTime CreatedOn { get; set; }

        public string  Message { get; set; }

        public string Context { get; set; }
    }
}
