using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NewsPortal.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using NewsPortal.DTO;

namespace NewsPortal.Controllers {
    [Route("api/categories")]
    [ApiController]
    public class CategoriesController: ControllerBase {
        private readonly ApplicationDbContext dbContext;
        private readonly IMapper mapper;

        public CategoriesController(ApplicationDbContext dbContext, IMapper mapper) {
            this.dbContext = dbContext;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<CategoryDTO>>> Get() {
            var categories = await dbContext.Categories.OrderBy(c => c.Name).ToListAsync();

            return mapper.Map<List<CategoryDTO>>(categories);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<CategoryDTO>> Get(int Id) {
            var category = await dbContext.Categories.FirstOrDefaultAsync(c => c.Id == Id);

            if (category == null)
            {
                return NotFound();
            }

            return mapper.Map<CategoryDTO>(category);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] CategoryCreationDTO createCategory) {
            var category = mapper.Map<Category>(createCategory);

            dbContext.Add(category);

            await dbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Update(int id, [FromBody] CategoryCreationDTO updateCategory) {
            var category = mapper.Map<Category>(updateCategory);

            category.Id = id;

            dbContext.Entry(category).State = EntityState.Modified;

            await dbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int Id) {
            var category = await dbContext.Categories.FirstOrDefaultAsync(c => c.Id == Id);

            if (category == null)
            {
                return NotFound();
            }

            dbContext.Remove(category);

            await dbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}