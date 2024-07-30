using System.ComponentModel.DataAnnotations.Schema;

namespace CarRentalAPI.Models
{
    public class Rental
    {
        public int Id { get; set; }
        public int CarId { get; set; }
        public int CustomerId { get; set; }
        public decimal DailyRate { get; set; }
        public int DaysRented { get; set; }
        public DateTime RentalDate { get; set; }
        [ForeignKey("CarId")]
        public Car Car { get; set; }
        [ForeignKey("CustomerId")]
        public Customer Customer { get; set; }
    }
}
