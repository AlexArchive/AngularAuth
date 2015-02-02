using System.Web.Http;

namespace AngularAuth
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