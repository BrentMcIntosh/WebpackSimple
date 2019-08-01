
using Microsoft.AspNetCore.Mvc;

namespace ASPNetCoreReact.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}