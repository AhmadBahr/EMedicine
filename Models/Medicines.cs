namespace EMedicineBE.Models
{
    public class Medicines
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Manufacturer { get; set; }
        public decimal UnitPrice { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public DateTime ExpDate { get; set; }
        public string ImageUrl { get; set; }
        public int Status { get; set; }
        public decimal Discount { get; set; }
        public string Type { get; set; }
    }
}
