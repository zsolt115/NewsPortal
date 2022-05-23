using Microsoft.AspNetCore.Mvc;
using NewsPortal.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Controllers {
    [Route("api/categories")]
    [ApiController]
    public class CategoriesController: ControllerBase {

        public CategoriesController() {
            
        }

        [HttpGet]
        public async Task<ActionResult<List<Category>>> Get() {
            return new List<Category>() { new Category() { Id = 1, Name = "Name1", CreatedDateTime = "2022-05-22" } };
        }

        [HttpGet("{Id:int}")]
        public ActionResult<Category> Get(int Id) {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult Post([FromBody] Category category) {
            throw new NotImplementedException();
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