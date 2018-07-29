using System;
using System.Text;
using Ft.Penzai.Api.Dataaccess;
using Ft.Penzai.Api.Dataaccess.Contracts;
using Ft.Penzai.Api.Dataaccess.Entities;
using Ft.Penzai.Api.Services;
using Ft.Penzai.Api.Services.Contracts;
using Ft.Penzai.Api.Services.LoggerProviders;
using Ft.Penzai.Api.Services.LoggerProviders.Contracts;
using Ft.Penzai.Api.Settings;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace Ft.Penzai.Api
{
    public class Startup
    {
        private ILogger logger;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Bind Settings
            var jwtSettings = new JwtSettings();
            Configuration.Bind("JwtSettings", jwtSettings);
            services.AddSingleton<JwtSettings>(jwtSettings);

            var emailSettings = new EmailSettings();
            Configuration.Bind("EmailSettings", emailSettings);
            services.AddSingleton<EmailSettings>(emailSettings);

            // Setup DataAccess
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));

            //Identity
            services.AddIdentity<UserAccount, IdentityRole>()
                    .AddEntityFrameworkStores<ApplicationDbContext>()
                    .AddDefaultTokenProviders();

            services.Configure<IdentityOptions>(options =>
            {
                // Password settings
                options.Password.RequireDigit = false; // should be true
                options.Password.RequiredLength = 5; // should be min 8
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false; // should be true
                options.Password.RequireLowercase = false; // should be true
                options.Password.RequiredUniqueChars = 0; // should be min 6

                // Lockout settings
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
                options.Lockout.MaxFailedAccessAttempts = 10;
                options.Lockout.AllowedForNewUsers = true;

                // SignIn
                options.SignIn.RequireConfirmedEmail = true;

                // User settings
                options.User.RequireUniqueEmail = true;
            });

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(cfg =>
            {
                cfg.RequireHttpsMetadata = false;
                cfg.SaveToken = true;
                cfg.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer = jwtSettings.Issuer,
                    ValidAudience = jwtSettings.Audience,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.SecretKey)),
                    ClockSkew = TimeSpan.Zero
                };
            });

            // Other services
            services.AddScoped<IDatabaseInitializer, DemoDataInitializer>();
            services.AddTransient<IEmailService, EmailServiceConfig>();
            services.AddTransient<ILogService, EfLogService>();

            services.AddCors();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IDatabaseInitializer dbInit, ApplicationDbContext dbContext)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader().AllowCredentials());

            app.UseAuthentication();
            app.UseMvc();

            dbInit.InitializeAsync().Wait();
        }
    }
}
