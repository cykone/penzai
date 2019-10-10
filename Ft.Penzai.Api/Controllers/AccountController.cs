using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Ft.Penzai.Api.Dataaccess;
using Ft.Penzai.Api.Dataaccess.Entities;
using Ft.Penzai.Api.Dataaccess.Extensions;
using Ft.Penzai.Api.Dtos.Accounts;
using Ft.Penzai.Api.Services;
using Ft.Penzai.Api.Services.Contracts;
using Ft.Penzai.Api.Settings;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Ft.Penzai.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Accounts")]
    [Authorize]
    public class AccountsController : Controller
    {
        #region Fields

        private readonly ApplicationDbContext dbContext;
        private readonly UserManager<UserAccount> userManager;
        private readonly SignInManager<UserAccount> signInManager;
        private readonly JwtSettings jwtSettings;
        private readonly IEmailService emailService;

        #endregion Fields

        #region Ctor

        public AccountsController(ApplicationDbContext dbContext, UserManager<UserAccount> userManager, SignInManager<UserAccount> signInManager, JwtSettings jwtSettings, IEmailService emailService)
        {
            this.dbContext = dbContext;
            this.userManager = userManager;
            this.signInManager = signInManager;

            // TODO Figure out how IOptions works.
            this.jwtSettings = jwtSettings;
            this.emailService = emailService;
        }

        #endregion Ctor

        #region Register

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return await Task.FromResult(new OkObjectResult(this.dbContext.Users));
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> RegisterAsync([FromBody] RegisterUser registerUser, string confirmationRedirectUrl = null)
        {
            if (!ModelState.IsValid)
            {
                return new BadRequestObjectResult(ModelState);
            }

            var accountEntity = registerUser.ToAccountEntity();
            var result = await this.userManager.CreateAsync(accountEntity, registerUser.Password);
            if (result.Succeeded)
            {
                // Send out confirmation email
                try
                {
                    var emailConfirmationToken = await this.userManager.GenerateEmailConfirmationTokenAsync(accountEntity);
                    var confirmationUrl = string.Empty;
                    if (string.IsNullOrWhiteSpace(confirmationRedirectUrl))
                    {
                        confirmationUrl = this.Url.RouteUrl("ConfirmEmail", new { userId = accountEntity.Id, token = emailConfirmationToken }, "http", this.Request.Host.Value);
                    }
                    else
                    {
                        try
                        {
                            var uriBuilder = new UriBuilder(confirmationRedirectUrl);
                            var query = HttpUtility.ParseQueryString(uriBuilder.Query);
                            query["userId"] = HttpUtility.UrlEncode(accountEntity.Id);
                            query["token"] = HttpUtility.UrlEncode(emailConfirmationToken);

                            uriBuilder.Query = query.ToString();
                            confirmationUrl = uriBuilder.ToString();
                        }
                        catch (UriFormatException ex)
                        {
                            // TODO Logging
                            return new BadRequestObjectResult("Invalid RedirectUrl: Has to be an absolute path to the confirmation view.");
                        }
                    }

                    await this.emailService.SendEmailAsync(ConfirmationEmail.Create(accountEntity.Email, confirmationUrl, accountEntity.FirstName));
                    return new OkObjectResult(new RegisterResult { Success = true });
                }
                catch (Exception ex)
                {
                    // TODO Logging
                    return new StatusCodeResult(500);
                }
            }

            // TODO send errors
            return new OkObjectResult(new RegisterResult { Success = false });
        }

        [HttpGet("confirmEmail", Name = "ConfirmEmail")]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmailAsync(string userId, string token)
        {
            var accountEntity = await this.userManager.FindByIdAsync(userId);
            if (accountEntity == null)
            {
                return new NotFoundResult();
            }

            if (await this.userManager.IsEmailConfirmedAsync(accountEntity))
            {
                // TODO implement email already confirmed
                return new OkResult();
            }

            var result = await this.userManager.ConfirmEmailAsync(accountEntity, token);
            if (!result.Succeeded)
            {
                return new BadRequestObjectResult(result);
            }

            return new OkResult();
        }

        [HttpPost("sendConfEmail")]
        public async Task<IActionResult> SendNewConfirmationMail([FromBody] string email, string confirmationRedirectUrl = null)
        {
            // TODO implement
            return new OkResult();
        }

        #endregion Register

        #region Authenticate

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> LoginAsync([FromBody] LoginUser loginUser, string redirectUrl = null)
        {
            if (!ModelState.IsValid)
            {
                return new BadRequestObjectResult(ModelState);
            }


            var userEntity = await this.userManager.FindByEmailAsync(loginUser.Email);
            if (userEntity == null)
            {
                return new OkObjectResult(new UserLoginResult { Success = false, InvalidUserPw = true });
            }

            // TODO Persistent with JWT? Read documentation and handle it.
            var result = await this.signInManager.PasswordSignInAsync(userEntity.UserName, loginUser.Password, isPersistent: false, lockoutOnFailure: false);
            //var result = await this.signInManager.PasswordSignInAsync(userEntity.UserName, loginUser.Password, isPersistent: loginUser.RememberMe, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                var token = this.GenerateJwtToken(userEntity.Email, userEntity);
                return new OkObjectResult(new UserLoginResult {UserId = userEntity.Id, UserName = userEntity.UserName, Token = token, Success = true });
            }
            else if (result.IsNotAllowed)
            {
                return new OkObjectResult(new UserLoginResult { Success = false, IsNotAllowed = true });
            }
            else if(!result.Succeeded)
            {
                return new OkObjectResult(new UserLoginResult { Success = false, InvalidUserPw = true });
            }

            return new BadRequestObjectResult(result);
        }

        #endregion login

        #region manageAccount

        [HttpDelete("{userId}")]
        public async Task<IActionResult> DeleteAccount(string userId)
        {
            if (!ModelState.IsValid)
            {
                return new BadRequestResult();
            }

            var account = await this.userManager.FindByIdAsync(userId);
            if (account == null)
            {
                return new BadRequestResult();
            }

            var result = await this.userManager.DeleteAsync(account);
            if (!result.Succeeded)
            {
                return new BadRequestObjectResult(result);
            }

            // TODO think about dependencies like profile pic etc.

            return new OkResult();
        }

        #endregion manageAccount
        
        #region Utils

        private string GenerateJwtToken(string email, IdentityUser user)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.jwtSettings.SecretKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(this.jwtSettings.ExpireInDays));

            var token = new JwtSecurityToken(this.jwtSettings.Issuer, this.jwtSettings.Audience, claims, expires: expires, signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        #endregion Utils
    }
}
