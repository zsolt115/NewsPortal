using System.ComponentModel.DataAnnotations;

namespace NewsPortal.Entities {
    public class Article {
        public int Id { get; set; }
        [Required]
        public string? Title { get; set; }
        [Required]
        public string? Description { get; set; }
        public string? CreatedDateTime { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
