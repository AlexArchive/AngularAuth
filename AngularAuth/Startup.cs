using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using Owin;
using System;
using System.Web.Http;

[assembly: OwinStartup(typeof(AngularAuth.Startup))]

namespace AngularAuth
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();
            ConfigureRoutes(config);
            ConfigureFormatters(config);

            ConfigureOAuth(app);
            app.UseCors(CorsOptions.AllowAll);
            app.UseWebApi(config);
        }

        private void ConfigureRoutes(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }

        private void ConfigureFormatters(HttpConfiguration config)
        {
            var jsonFormatter = config.Formatters.JsonFormatter;
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }

        private void ConfigureOAuth(IAppBuilder app)
        {
            var config = new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                Provider = new Authorizer()
            };

            app.UseOAuthAuthorizationServer(config);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
        }
    }
}
