using Ft.Penzai.Api.Dtos.Learning;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ft.Penzai.Api.Services.LearningProviders
{
    public interface ILearningProvider
    {
        public Task<List<Course>> GetCoursesForCategory(Category category)
        {
        
        }
    }
}
