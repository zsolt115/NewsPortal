using Microsoft.AspNetCore.Mvc;
using NewsPortal.Entities;
using NewsPortal.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Controllers {
    [Route("api/categories")]
    [ApiController]
    public class CategoriesController: ControllerBase {
        private readonly IRepository repository;

        public CategoriesController(IRepository repository) {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Category>>> Get() {
            return await repository.GetAllCategories();
        }

        [HttpGet("{Id:int}")]
        public ActionResult<Category> Get(int Id) {
            var category = repository.GetCategoryById(Id);

            if (category == null) {
                return NotFound();
            }

            return category;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Category category) {
            repository.AddCategory(category);

            return NoContent();
        }

        [HttpPut]
        public ActionResult Update() {
            return NoContent();
        }

        [HttpDelete]
        public ActionResult Delete() {
            return NoContent();
        }
    }
}