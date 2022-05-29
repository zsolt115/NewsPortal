using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.DTO
{
    public class SearchArticleDTO
    {
        public int Page { get; set; }
        public int ArticlesPerPage { get; set; }

        public PaginationDTO PaginationDTO
        {
            get { return new PaginationDTO() { Page = Page }; } 
        }

        public string Title { get; set; }

        public string Description { get; set; }

        public int CategoryId { get; set; }

        public string search { get; set; }
    }
}