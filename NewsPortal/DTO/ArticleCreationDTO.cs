using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.DTO
{
    public class ArticleCreationDTO
    {
        public string? Title { get; set; }
        [Required]
        public string? Description { get; set; }
        public int CategoryId { get; set; }
        public string? CreatedDateTime { get; set; }
    }
}