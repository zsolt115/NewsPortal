using Microsoft.AspNetCore.Mvc;
using NewsPortal.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Controllers {
    [Route("api/articles")]
    [ApiController]
    public class ArticlesController: ControllerBase {
        public ArticlesController() {
        }

        [HttpGet]
        public List<Article> Get() {
            return new List<Article>() { new Article() { Id = 1, Title = "Title1", Description = "Description1", CategoryId = 1, CreatedDateTime = "2022-05-22" } };
        }

        [HttpGet("{Id}")]
        public ActionResult<Article> Get(int Id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Article article)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        public ActionResult Update()
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();
        }
    }
}