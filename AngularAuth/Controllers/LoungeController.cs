using System.Web.Http;

namespace AngularAuth.Controllers
{
    [RoutePrefix("api/Lounge")]
    public class LoungeController : ApiController
    {
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok("Welcome to the lounge.");
        }
    }
}