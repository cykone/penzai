using System;

namespace Ft.Penzai.Api.Dataaccess.Entities
{
    public class LogEntryEntity : EntityBase<Guid>
    {
        public string Message { get; private set; }

        public string Context { get; private set; }

        #region Factory

        public static LogEntryEntity Create(string context, string Message)
        {
            var ret = new LogEntryEntity
            {
                CreatedOn = DateTimeOffset.UtcNow,
                Message = Message,
                Context = context
            };

            return ret;
        }

        #endregion Factory
    }
}
