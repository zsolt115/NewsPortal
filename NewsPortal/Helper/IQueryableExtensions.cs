using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using NewsPortal.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Helper
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> Paginate<T>(this IQueryable<T> queryable, PaginationDTO paginationDTO)
        {
            return queryable.Skip((paginationDTO.Page - 1) * paginationDTO.ArticlesPerPage).Take(paginationDTO.ArticlesPerPage);
        }
    }
}