using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TeduShop.Web.Models
{
    public class ApplicationUserViewModel
    {
        public string Id { set; get; }
        public string FullName { set; get; }
        public string Address { set; get; }
        public DateTime BirthDay { set; get; }
        public string Email { set; get; }
        public bool EmailConfirmed { set; get; }
        public string PasswordHash { set; get; }
        public string SecurityStamp { set; get; }
        public string PhoneNumber { set; get; }
        public bool PhoneNumberConfirmed { set; get; }
        public bool TwoFactorEnabled { set; get; }
        public DateTime LockoutEndDateUtc { set; get; }
        public bool LockoutEnabled { set; get; }
        public int AccessFailedCount { set; get; }
        public string UserName { set; get; }



    }
}