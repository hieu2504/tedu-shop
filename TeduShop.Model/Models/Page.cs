using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeduShop.Model.Models
{
    public class Page
    {
        [Key]
        public int ID { set; get; }
        [MaxLength(256)]
        public string Name { set; get; }
        public string Content { set; get; }
        [MaxLength(256)]
        public string MetaKeyword { set; get; }
        [MaxLength(256)]
        public string MetaDescription { set; get; }
        public bool Status { set; get; }
    }
}
