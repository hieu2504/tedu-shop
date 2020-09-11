using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Linq;
using TeduShop.Model.Abstract;

namespace TeduShop.Model.Models
{
    [Table("Product")]
    public class Product : Auditable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { set; get; }
        [Required]
        [MaxLength(256)]
        public string Name { set; get; }
        [Required]
        [MaxLength(256)]
        public string Alias { set; get; }
        public int Category { set; get; }
        [MaxLength(500)]
        public string Image { set; get; }
        public XElement MoreImages { set; get; }
        public decimal Price { set; get; }
        public decimal? PromotionPrice { set; get; }
        public int Warranty { set; get; }
        [MaxLength(500)]
        public string Description { set; get; }
        public string Content { set; get; }

        public bool? HomeFlag { set; get; }
        public bool? HotFlag { set; get; }
        public int? ViewCount { set; get; }

        [ForeignKey("CategoryID")]
        public virtual ProductCategory ProductCategory { set; get; }

        public virtual IEnumerable<OrderDetail> OrderDetail { set; get; }

        public virtual IEnumerable<ProductTag> ProductTags { set; get; }
    }
}
