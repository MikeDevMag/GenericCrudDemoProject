using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace GenericCrudDemoProject.Models
{

    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new AppDbContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<AppDbContext>>()))
            {
                // Look for any movies.
                if (context.tbl_contacts.Any())
                {
                    return;   // DB has been seeded
                }

                context.tbl_contacts.AddRange(
                    new tbl_contacts
                    { id = 1, name = "abc", email = "email", phone = "123-456-1234", url = "xyz"
                    },
                    new tbl_contacts
                    { id = 2, name = "abc", email = "email", phone = "123-456-1234", url = "xyz" }

                );
                context.SaveChanges();
            }
        }
    }
}
