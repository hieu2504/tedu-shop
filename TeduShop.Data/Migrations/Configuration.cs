namespace TeduShop.Data.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using TeduShop.Model.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<TeduShop.Data.TeduShopDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(TeduShop.Data.TeduShopDbContext context)
        {
            CreateProductCategorySample(context);
            CreateProductSample(context);
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.

            /* var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new TeduShopDbContext()));

             var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(new TeduShopDbContext()));

             var user = new ApplicationUser()
             {
                 UserName = "abc",
                 Email = "abc@gmail.com",
                 EmailConfirmed = true,
                 BirthDay = DateTime.Now,
                 FullName = "abc xyz"
             };
             manager.Create(user, "123456");

             if (!roleManager.Roles.Any())
             {
                 roleManager.Create(new IdentityRole { Name = "Admin" });
                 roleManager.Create(new IdentityRole { Name = "User" });
             }

             var adminUser = manager.FindByEmail("abc@gmail.com");

             manager.AddToRoles(adminUser.Id, new string[] { "Admin", "User" });*/

        }

        private void CreateProductCategorySample(TeduShop.Data.TeduShopDbContext context)
        {
            if (context.ProductCategories.Count() == 0)
            {
                List<ProductCategory> listProductCategory = new List<ProductCategory>()
            {
                new ProductCategory(){Name="Điện lạnh",Alias="dien-lanh",Status=true},
                new ProductCategory(){Name="Vien Thong",Alias="vien-thong",Status=true},
                new ProductCategory(){Name="Đồ gia dụng",Alias="do-gia-dung",Status=true},
                new ProductCategory(){Name="Mỹ phẩm",Alias="my-pham",Status=true},
                new ProductCategory(){Name="Tao",Alias="Tao",Status=true},
            };
                context.ProductCategories.AddRange(listProductCategory);
                context.SaveChanges();
            }
            
        }

        private void CreateProductSample(TeduShop.Data.TeduShopDbContext context)
        {
            if (context.Products.Count() == 0)
            {
                List<Product> listProductCategory = new List<Product>()
            {
                new Product(){Name="Tu lanh Toshiba",CategoryID=15,Alias="tu-lanh-toshiba",Status=true},
                new Product(){Name="Cuc wifi",CategoryID=15,Alias="cuc-wifi",Status=true},
               
            };
                context.Products.AddRange(listProductCategory);
                context.SaveChanges();
            }

        }
    }
}
