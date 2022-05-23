using NewsPortal.Validations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace NewsPortal.Entities {
    public class Category {
        public int Id { get; set; }
        [Required]
        [FirstLetterUppercase]
        public string? Name { get; set; }
        public string? CreatedDateTime { get; set; }

    }
}
