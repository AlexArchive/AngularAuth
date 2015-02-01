using Microsoft.AspNet.Identity.EntityFramework;

namespace AngularAuth.Authentication
{
    public class AuthenticationContext : IdentityDbContext<IdentityUser>
    {
        public AuthenticationContext() : base ("AuthContext")
        {
        }
    }
}