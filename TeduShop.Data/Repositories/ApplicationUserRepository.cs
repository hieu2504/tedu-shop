using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeduShop.Data.Infrastructure;
using TeduShop.Model.Models;

namespace TeduShop.Data.Repositories
{
    public interface IApplicationUserRepository : IRepository<ApplicationUser>
    {
        ApplicationUser GetByUser(string user);
    }
    public class ApplicationUserRepository:RepositoryBase<ApplicationUser>, IApplicationUserRepository
    {
        public ApplicationUserRepository(IDbFactory dbFactory) : base(dbFactory)
        {

        }

        public ApplicationUser GetByUser(string user)
        {
            var query = from ap in DbContext.Users
                        where ap.UserName == user
                        select ap;
            return query.FirstOrDefault();
        }
    }
}
