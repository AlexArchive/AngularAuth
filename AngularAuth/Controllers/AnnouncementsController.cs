using System.Web.Http;
using AngularAuth.Models;

namespace AngularAuth.Controllers
{
    [RoutePrefix("api/Announcements")]
    public class AnnouncementsController : ApiController
    {
        [Route("")]
        [Authorize]
        public IHttpActionResult Get()
        {
            return Ok(AnnouncementFactory.CreateAnnouncements());
        }
    }
}