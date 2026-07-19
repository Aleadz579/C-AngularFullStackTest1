using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
}