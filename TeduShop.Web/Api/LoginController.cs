using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using TeduShop.Model.Models;
using TeduShop.Service;
using TeduShop.Web.Infrastructure.Core;
using TeduShop.Web.Models;

namespace TeduShop.Web.Api
{
    [RoutePrefix("api/login")]
    [Authorize]
    public class LoginController : ApiControllerBase
    {
        IApplicationUserService _applicationUserService;
        public LoginController(IErrorService errorService,IApplicationUserService applicationUserService):
            base(errorService)
        {
            this._applicationUserService = applicationUserService;
        }

        [Route("home")]
        [HttpGet]
        public HttpResponseMessage GetByUser(HttpRequestMessage request)
        {
            return CreateHttpResponse(request, () =>
            {
                var userClaim = (ClaimsIdentity)User.Identity;
                var model = _applicationUserService.GetByUserName(userClaim.Name);
                var responseData = Mapper.Map<ApplicationUser, ApplicationUserViewModel>(model);
                var response = request.CreateResponse(HttpStatusCode.OK, responseData);

                return response;
            });
        }
    }
}
