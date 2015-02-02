using Microsoft.AspNet.Identity.EntityFramework;

namespace AngularAuth
{
    public class AuthenticationContext : IdentityDbContext<IdentityUser>
    {
        public AuthenticationContext() : base ("AuthContext")
        {
        }
    }
}