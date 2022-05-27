using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NewsPortal.DTO
{
    public class CategoryCreationDTO
    {
        [Required]
        public string Name { get; set; }

        public string? CreatedDateTime { get; set; }
    }
}