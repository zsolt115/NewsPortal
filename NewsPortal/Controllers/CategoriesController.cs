using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NewsPortal.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Controllers {
    [Route("api/categories")]
    [ApiController]
    public class CategoriesController: ControllerBase {
        private readonly ApplicationDbContext dbContext;

        public CategoriesController(ApplicationDbContext dbContext) {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Category>>> Get() {
            return await dbContext.Categories.ToListAsync();
        }

        [HttpGet("{Id:int}")]
        public ActionResult<Category> Get(int Id) {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Category category) {
            dbContext.Add(category);

            await dbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut]
        public ActionResult Update() {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete() {
            throw new NotImplementedException();
        }
    }
}