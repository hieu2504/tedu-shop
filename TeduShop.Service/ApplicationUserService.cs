using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeduShop.Data.Infrastructure;
using TeduShop.Data.Repositories;
using TeduShop.Model.Models;

namespace TeduShop.Service
{
    public interface IApplicationUserService
    {
        ApplicationUser GetByUserName(string userName);
    }
    public class ApplicationUserService : IApplicationUserService
    {
        private IApplicationUserRepository _applicationUserRepository;
        private IUnitOfWork _unitOfWork;

        public ApplicationUserService(IApplicationUserRepository applicationUserRepository,IUnitOfWork unitOfWork)
        {
            this._applicationUserRepository = applicationUserRepository;
            this._unitOfWork = unitOfWork;
        }
        
        public ApplicationUser GetByUserName(string userName)
        {
            return _applicationUserRepository.GetByUser(userName);
        }
    }
}
