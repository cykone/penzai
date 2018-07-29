using Ft.Penzai.Api.Dataaccess.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Ft.Penzai.Api.Dataaccess
{
    public class ApplicationDbContext : IdentityDbContext<UserAccount>
    {
        #region Sets

        public DbSet<LogEntryEntity> LogEntries { get; set; }

        #endregion Sets

        #region Ctor

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        #endregion Ctor

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
