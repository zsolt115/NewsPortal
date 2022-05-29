using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.DTO
{
    public class PaginationDTO
    {
        public int Page { get; set; } = 1;

        private int articlesPerPage = 5;

        public int ArticlesPerPage
        {
            get { return articlesPerPage; }
        }
    }
}