// rental-create.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { Customer } from 'src/app/models/custumer.model';
import { Rental } from 'src/app/models/rental.model';
import { CarService } from 'src/app/services/cars/car.service';
import { CustomerService } from 'src/app/services/costumers/customer.service';
import { RentalService } from 'src/app/services/rentals/rental.service';


@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.css']
})
export class RentalCreateComponent {
  rental: Rental = {
    carId: 0,
    customerId: 0,
    dailyRate: 0,
    daysRented: 0,
    rentalDate: ''
  };
  car: Car | null = null;
  customer: Customer | null = null;
  cars: Car[] = [];
  customers: Customer[] = [];

  constructor(
    private rentalService: RentalService,
    private carService: CarService,
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
    });

    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  onCarIdChange(): void {
    if (this.rental.carId) {
      this.carService.getCar(this.rental.carId).subscribe(car => {
        this.car = car;
      });
    }
  }

  onCustomerIdChange(): void {
    if (this.rental.customerId) {
      this.customerService.getCustomer(this.rental.customerId).subscribe(customer => {
        this.customer = customer;
      });
    }
  }

  
  onSubmit() {
    // Certifique-se de que rentalDate está no formato correto
    this.rental.rentalDate = new Date(this.rental.rentalDate).toISOString();

    this.rentalService.createRental(this.rental).subscribe(
      response => {
        alert('Aluguel cadastrado com sucesso');
        this.resetForm();  // Limpa o formulário após o sucesso
      },
      error => {
        console.error('Erro ao cadastrar aluguel', error);
      }
    );
  }
  resetForm() {
    this.rental = {
      carId: 0,
      customerId: 0,
      dailyRate: 0,
      daysRented: 0,
      rentalDate: ''
    };
  }
  }

