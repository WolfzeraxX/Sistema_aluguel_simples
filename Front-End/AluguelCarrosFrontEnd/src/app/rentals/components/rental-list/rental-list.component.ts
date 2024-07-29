import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental.model';
import { RentalService } from 'src/app/services/rentals/rental.service';


@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  rentals: Rental[] = []; // Certifique-se de que a propriedade rentals está definida
  displayedColumns: string[] = ['id', 'carId', 'customerId', 'startDate', 'endDate'];

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.rentalService.getRentals().subscribe(rentals => {
      this.rentals = rentals;
    });
  }
}
