using ImageData.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace ImageData.Controllers
{
    public class ImageController : ApiController
    {
    [HttpPost]
    [Route("api/Upload")]
    public HttpResponseMessage upload()
    {
      string fileName = null;
      var httpRequest = HttpContext.Current.Request;
      var postedFiles = httpRequest.Files["Image"];
      fileName = new String(Path.GetFileNameWithoutExtension(postedFiles.FileName)
        .Take(10).ToArray()).Replace(" ", "-");
      fileName = fileName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFiles.FileName);
      var filepath = HttpContext.Current.Server.MapPath("~/Images/" + fileName);
      postedFiles.SaveAs(filepath);

      using (DbModel db = new DbModel())
      {
        ImagesData data = new ImagesData()
        {
          Name = httpRequest["Name"],
          Description = httpRequest["Description"],
          IsFeatured = false,
          IndexPage = true,
          ImageUrl = fileName

        };
        db.ImagesDatas.Add(data);
        db.SaveChanges();
      }
      return Request.CreateResponse(HttpStatusCode.Created);
    }
  }
}
