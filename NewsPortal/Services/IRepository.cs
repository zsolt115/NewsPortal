using NewsPortal.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace NewsPortal.Services {
    public interface IRepository {
        void AddCategory(Category category);
        List<Article> GetAllArticles();
        Task<List<Category>> GetAllCategories();
        Article GetArticleById(int Id);
        Category GetCategoryById(int Id);
    }
}