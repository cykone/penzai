using System;

namespace Ft.Penzai.Api.Dataaccess.Entities
{
    public class LogEntryEntity : EntityBase<Guid>
    {
        public string Message { get; private set; }

        public string Context { get; private set; }

        public string UserAgent { get; private set; }

        #region Factory

        public static LogEntryEntity Create(string context, string Message, string userAgent)
        {
            var ret = new LogEntryEntity
            {
                CreatedOn = DateTimeOffset.UtcNow,
                Message = Message,
                Context = context,
                UserAgent = userAgent
            };

            return ret;
        }

        #endregion Factory
    }
}
