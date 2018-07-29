using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ft.Penzai.Api.Dataaccess.Contracts
{
    public interface IDatabaseInitializer
    {
        Task InitializeAsync();
    }
}
