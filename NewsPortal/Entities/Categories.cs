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

        //public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        //{
        //    if (!string.IsNullOrEmpty(Name))
        //    {
        //        var firstLetter = Name[0].ToString();
        //        if (firstLetter != firstLetter.ToUpper())
        //        {
        //            yield return new ValidationResult("First letter should be uppercase", new string[] { nameof(Name) });
        //        }
        //    }
        //}
    }
}
