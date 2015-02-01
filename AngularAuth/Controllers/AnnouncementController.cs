using System.Web.Http;
using AngularAuth.Models;

namespace AngularAuth.Controllers
{
    [RoutePrefix("api/Announcements")]
    public class AnnouncementController : ApiController
    {
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(Announcement.CreateAnnouncements());
        }
    }
}