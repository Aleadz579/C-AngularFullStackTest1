using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Api.Data;
using WebApplication1.Api.Entities;

namespace WebApplication1.Api.Controllers
{
    [ApiController]
    [Route("companies")]
    public class CompanyController : ControllerBase
    {
        [HttpGet]
        public IActionResult getCompanies(AppDbContext database)
        {
            return database.Companies.Any() ? Ok(database.Companies.ToList()) : NotFound();
        }
    }
}
