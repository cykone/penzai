using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ft.Penzai.Api.Dtos.Inspiration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ft.Penzai.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/Inspiration")]
    public class InspirationController : Controller
    {
        [HttpGet("personas/{userId}")]
        public async Task<IActionResult> GetPersonasByUserId(string userId)
        {
            var ret = new List<Persona>();
            for(var i = 0; i < 10; i++)
            {
                var persona = new Persona
                {
                    Title = "Title",
                    Name = "Name",
                    JobDescription = "Description",
                    Intro = "Intro",
                    ImageSource = "ImageSource"
                };

                ret.Add(persona);
            }
            
            return new OkObjectResult(ret);
        }
    }
}