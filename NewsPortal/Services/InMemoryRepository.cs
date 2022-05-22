using NewsPortal.Entities;
using System.Collections.Generic;
using NewsPortal.Controllers;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Services {
    public class InMemoryRepository: IRepository {
        private List<Article> _articles;
        private List<Category> _categories;
        public InMemoryRepository() {
            _articles = new List<Article>() {
                new Article { Id = 1, Title = "Powerlifting", Description = "strength focus, 3 lift", CategoryId = 1, CreatedDateTime = "2022-05-17" },
                new Article { Id = 2, Title = "Bodybuilding", Description = "body and muscle size focus", CategoryId = 1, CreatedDateTime = "2022-05-17" },
                new Article { Id = 3, Title = "Strongman", Description = "strength focus, lifting barbells/dumbbells & lifting objects like Atlas stones, tires, and even trucks", CategoryId = 1, CreatedDateTime = "2022-05-17" },
                new Article { Id = 4, Title = "Weightlifting", Description = "strength focus, clean&jerk + snatch", CategoryId = 1, CreatedDateTime = "2022-05-17" },
                new Article { Id = 5, Title = "League of Legends", Description = "moba", CategoryId = 2, CreatedDateTime = "2022-05-17" }
            };

            _categories = new List<Category>() {
                new Category { Id = 1, Name = "Fitness", CreatedDateTime = "2022-05-17" },
                new Category { Id = 2, Name = "Gaming", CreatedDateTime = "2022-05-17" },
                new Category { Id = 3, Name = "Food", CreatedDateTime = "2022-05-17" },
                new Category { Id = 4, Name = "Creativity", CreatedDateTime = "2022-05-17" }
            };
        }
        public List<Article> GetAllArticles() {
            return _articles;
        }

        public async Task<List<Category>> GetAllCategories() {
            await Task.Delay(3000);

            return _categories;
        }

        public Article GetArticleById(int Id) { 
            return _articles.FirstOrDefault(a => a.Id == Id);
        }
        public Category GetCategoryById(int Id) {
            return _categories.FirstOrDefault(c => c.Id == Id);
        }

        public void AddCategory(Category category)
        {
            category.Id = _categories.Max(c => c.Id) + 1;

            _categories.Add(category);
        }
    }
}