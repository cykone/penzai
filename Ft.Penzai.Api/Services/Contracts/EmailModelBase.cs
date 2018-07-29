using System.Collections.Generic;

namespace Ft.Penzai.Api.Services.Contracts
{
    public abstract class EmailModelBase
    {

        #region Ctor

        public EmailModelBase()
        { }

        public EmailModelBase(string from, string displayname, string subject)
        {
            this.SetFrom(from);
            this.SetDisplayName(displayname);
            this.SetSubject(subject);
        }

        #endregion Ctor

        #region Properties

        public virtual string From { get; private set; }

        public virtual string DisplayName { get; private set; }

        public virtual List<string> To { get; private set; }

        public virtual string Body { get; private set; }

        public virtual string Subject { get; private set; }

        public virtual bool IsValid
        {
            get
            {
                return !string.IsNullOrWhiteSpace(this.From)
                    && this.To.Count > 0
                    && !string.IsNullOrWhiteSpace(this.Body)
                    && !string.IsNullOrWhiteSpace(this.Subject);

            }
        }

        #endregion Properties

        #region Methods

        public void AddReceiverAddress(string receiver)
        {
            if (this.To == null)
            {
                this.To = new List<string>();
            }
            this.To.Add(receiver);
        }

        public void SetBody(string body)
        {
            this.Body = body;
        }

        public void SetSubject(string subject)
        {
            this.Subject = subject;
        }

        public void SetFrom(string from)
        {
            this.From = from;
        }

        public void SetDisplayName(string displayName)
        {
            this.DisplayName = displayName;
        }

        #endregion Methods
    }
}