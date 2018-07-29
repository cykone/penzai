using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ft.Penzai.Api.Dataaccess;
using Ft.Penzai.Api.Dataaccess.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Ft.Penzai.Api.Dataaccess.Extensions;


namespace Ft.Penzai.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Profile")]
    public class ProfileController : Controller
    {
        #region Fields

        private readonly ApplicationDbContext dbContext;
        private readonly UserManager<UserAccount> userManager;

        #endregion Fields

        #region Ctor

        public ProfileController(ApplicationDbContext dbContext, UserManager<UserAccount> userManager)
        {
            this.dbContext = dbContext;
            this.userManager = userManager;
        }

        #endregion Ctor


        //Personality
        //Motivation

        // Culture
        // https://hbr.org/2018/01/the-culture-factor


        [HttpPost("picture")]
        public async Task<IActionResult> UploadProfileImage(IFormFile profilePic)
        {
            // TODO store image on server side.s
            return new OkResult();
        }

        #region UserProfile

        [HttpGet("short/{userId}")]
        [Authorize]
        public async Task<IActionResult> GetUserProfileShort(string userId)
        {
            var userAccount = await this.userManager.FindByIdAsync(userId);
            if (userAccount == null)
            {
                return BadRequest();
            }

            var ret = userAccount.ToShortProfile();

            return new OkObjectResult(ret);
        }

        #endregion UserProfile
    }
}