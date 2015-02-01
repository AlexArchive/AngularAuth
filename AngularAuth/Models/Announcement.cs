using System.Collections.Generic;

namespace AngularAuth.Models
{
    public class Announcement
    {
        public string Title { get; set; }
        public string Body { get; set; }

        public static IEnumerable<Announcement> CreateAnnouncements()
        {
            yield return new Announcement { Title = "Jacuzzi broke", Body = "Jacuzzi broke. Do not use." };
            yield return new Announcement { Title = "Party on Friday", Body = "Bring your blazers jackets, gentlement." };
        }
    }
}