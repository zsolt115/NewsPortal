using Microsoft.AspNetCore.Mvc;
using NewsPortal.Entities;
using NewsPortal.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Controllers {
    [Route("api/articles")]
    [ApiController]
    public class ArticlesController: ControllerBase {
        private readonly IRepository repository;

        public ArticlesController(IRepository repository) {
            this.repository = repository;
        }

        [HttpGet]
        public List<Article> Get() {
            return repository.GetAllArticles();
        }

        [HttpGet("{Id}")]
        public ActionResult<Article> Get(int Id)
        {
            var article = repository.GetArticleById(Id);

            if (article == null)
            {
                return NotFound();
            }

            return article;
        }

        [HttpPost]
        public ActionResult Post()
        {
            return NoContent();
        }

        [HttpPut]
        public ActionResult Update()
        {
            return NoContent();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();
        }
    }
}