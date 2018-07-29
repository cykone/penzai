using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ft.Penzai.Api.Dataaccess.Entities
{
    public abstract class EntityBase<T>
    {
        public T Id { get; set; }

        public DateTimeOffset CreatedOn{ get; set; }

        public DateTimeOffset? ModifiedOn { get; set; }
    }
}
