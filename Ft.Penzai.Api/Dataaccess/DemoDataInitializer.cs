using Ft.Penzai.Api.Dataaccess.Contracts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ft.Penzai.Api.Dataaccess
{
    public class DemoDataInitializer : IDatabaseInitializer
    {
        #region Fields

        private readonly ApplicationDbContext dbContext;

        #endregion Fields

        #region Ctor

        public DemoDataInitializer(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        #endregion Ctor

        #region Methods
        
        public async Task InitializeAsync()
        {
            this.dbContext.Database.Migrate();

            // TODO add data here.

            await this.dbContext.SaveChangesAsync();
        }

        #endregion Methods
    }
}
