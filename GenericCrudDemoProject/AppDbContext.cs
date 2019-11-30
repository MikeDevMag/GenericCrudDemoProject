using GenericCrudDemoProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenericCrudDemoProject
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<tbl_contacts> tbl_contacts { get; set; }
        public DbSet<tblBook> tblBook { get; set; }
        public DbSet<tbl_employees> tbl_employees { get; set; }
        public DbSet<tbl_products> tbl_products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<tbl_contacts>().HasData(
            //    new tbl_contacts() { id = 1, name = "abc", email = "email", phone = "123-456-1234", url = "xyz" },
            //    new tbl_contacts() { id = 2, name = "efg", email = "email", phone = "999-456-1234", url = "xyz" });
        }
    }
}
