namespace WebApplication1.Api.Entities;

public class Company
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public string? Website { get; set; }

    public bool Contacted { get; set; }
}