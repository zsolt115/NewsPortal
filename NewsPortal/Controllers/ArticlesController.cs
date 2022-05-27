using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NewsPortal.DTO;
using NewsPortal.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Controllers {
    [Route("api/articles")]
    [ApiController]
    public class ArticlesController: ControllerBase {
        private readonly ApplicationDbContext dbContext;
        private readonly IMapper mapper;

        public ArticlesController(ApplicationDbContext dbContext, IMapper mapper) {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<ArticleDTO>>> Get()
        {
            var articles = await dbContext.Articles.OrderBy(a => a.Title).ToListAsync();

            return mapper.Map<List<ArticleDTO>>(articles);
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<ArticleDTO>> Get(int Id)
        {
            var article = await dbContext.Articles.FirstOrDefaultAsync(a => a.Id == Id);

            if (article == null)
            {
                return NotFound();
            }

            return mapper.Map<ArticleDTO>(article);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] ArticleCreationDTO createArticle)
        {
            var article = mapper.Map<Article>(createArticle);

            dbContext.Add(article);

            await dbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Update(int id, [FromBody] ArticleCreationDTO updateArticle)
        {
            var article = mapper.Map<Article>(updateArticle);

            article.Id = id;

            dbContext.Entry(article).State = EntityState.Modified; // entry pass the data... already exists in the DB so we mark with modified

            await dbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var article = await dbContext.Articles.FirstOrDefaultAsync(a => a.Id == Id);

            if (article == null)
            {
                return NotFound();
            }

            dbContext.Remove(article);

            await dbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}