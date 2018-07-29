using System;

namespace Ft.Penzai.Api.Dataaccess.Entities
{
    public class LogEntryEntity : EntityBase<Guid>
    {
        public string Message { get; private set; }

        #region Factory

        public static LogEntryEntity Create(string Message)
        {
            var ret = new LogEntryEntity
            {
                CreatedOn = DateTimeOffset.UtcNow,
                Message = Message
            };

            return ret;
        }

        #endregion Factory
    }
}
