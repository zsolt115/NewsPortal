using AutoMapper;
using NewsPortal.DTO;
using NewsPortal.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.Helper
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<ArticleDTO, Article>().ReverseMap(); // "bridge"
            CreateMap<ArticleCreationDTO, Article>();

            CreateMap<CategoryDTO, Category>().ReverseMap();
            CreateMap<CategoryCreationDTO, Category>();
        }
    }
}