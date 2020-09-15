using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPITest.Api
{
    [RoutePrefix("api/test")]
    public class TestController : ApiController
    {
        [Route("testMethod")]
        [HttpGet]
        public string TestMethod()
        {
            return "Hello C#";
        }
    }
}
