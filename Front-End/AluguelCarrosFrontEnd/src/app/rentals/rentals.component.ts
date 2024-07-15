import { Component, OnInit } from '@angular/core';
import { Rental } from '../models/rental.model';
import { RentalService } from '../services/rentals/rental.service';
import { CustomerService } from '../services/costumers/customer.service';
import { CarService } from '../services/cars/car.service';


@Component({
  selector: 'app-rental',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalComponent implements OnInit {
  rental: any = {}; // Objeto para armazenar os dados do aluguel
  cars: any[] = []; // Array para armazenar a lista de carros
  customers: any[] = []; // Array para armazenar a lista de clientes

  constructor(private carService: CarService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadCars(); // Chama o método para carregar os carros ao inicializar o componente
    this.loadCustomers(); // Chama o método para carregar os clientes ao inicializar o componente
  }

  loadCars() {
    this.carService.getCars().subscribe(
      (data: any[]) => {
        this.cars = data; // Atribui a lista de carros ao array cars
        console.log('Carros carregados:', this.cars); // Verifica se os carros foram carregados corretamente
      },
      (error) => {
        console.error('Erro ao carregar carros:', error); // Exibe mensagem de erro se houver problemas no carregamento
      }
    );
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe(
      (data: any[]) => {
        this.customers = data; // Atribui a lista de clientes ao array customers
        console.log('Clientes carregados:', this.customers); // Verifica se os clientes foram carregados corretamente
      },
      (error) => {
        console.error('Erro ao carregar clientes:', error); // Exibe mensagem de erro se houver problemas no carregamento
      }
    );
  }

  onSubmit() {
    // Lógica para enviar os dados do aluguel para a API
    console.log(this.rental); // Exemplo simples de exibição dos dados
  }
}
