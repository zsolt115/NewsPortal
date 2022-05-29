using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NewsPortal.DTO;
using NewsPortal.Entities;
using NewsPortal.Helper;
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

        [HttpGet("all")]
        public async Task<ActionResult<List<ArticleDTO>>> Get()
        {
            var articles = await dbContext.Articles.OrderByDescending(a => a.CreatedDateTime).ToListAsync();

            return mapper.Map<List<ArticleDTO>>(articles);
        }

        [HttpGet]
        public async Task<ActionResult> Get([FromQuery] PaginationDTO paginationDTO)
        {
            var queryable = dbContext.Articles
                    .Join(dbContext.Categories,
                        a => a.CategoryId,
                        c => c.Id,
                        (a, c) => new
                        {
                            Title = a.Title,
                            Description = a.Description,
                            CategoryName = c.Name,
                            CreatedDateTime = a.CreatedDateTime
                        }
                    )
                    .AsQueryable();

            await HttpContext.InsertParametersPaginationInHeader(queryable);

            var articles = await queryable.OrderByDescending(a => a.CreatedDateTime).Paginate(paginationDTO).ToListAsync();

            return Ok(articles);
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

        [HttpGet("search")]
        public async Task<ActionResult> Search([FromQuery] SearchArticleDTO searchArticleDTO)
        {
            var articlesQueryable = dbContext.Articles
                .Join(dbContext.Categories,
                    a => a.CategoryId,
                    c => c.Id,
                    (a, c) => new
                    {
                        Title = a.Title,
                        Description = a.Description,
                        CategoryName = c.Name,
                        CreatedDateTime = a.CreatedDateTime
                    }
                )
                .AsQueryable();

            if (!string.IsNullOrEmpty(searchArticleDTO.search))
            {
                articlesQueryable = articlesQueryable.Where(a => a.Title.Contains(searchArticleDTO.search) || a.Description.Contains(searchArticleDTO.search));
            }

            await HttpContext.InsertParametersPaginationInHeader(articlesQueryable);

            var articles = await articlesQueryable.OrderByDescending(a => a.CreatedDateTime).Paginate(searchArticleDTO.PaginationDTO).ToListAsync();

            return Ok(articles);
        }

        [HttpGet("articlesList")]
        public async Task<ActionResult> GetArticles()
        {
            var articlesList =
                dbContext.Articles
                    .Join(dbContext.Categories,
                    a => a.CategoryId,
                    c => c.Id,
                    (a, c) => new
                    {
                        Title = a.Title,
                        Description = a.Description,
                        CategoryName = c.Name,
                        CreatedDateTime = a.CreatedDateTime
                    }
                );

            return Ok(articlesList);
        }
    }
}