import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Car } from '../models/car.model';
import { CarService } from '../services/cars/car.service';
import { CarDialogComponent } from './cars-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-car',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarComponent implements OnInit {
  car: Car = { id: 0, name: '', model: '', year: 0 };
  cars: Car[] = [];
  displayedColumns: string[] = ['id', 'name', 'model', 'year', 'actions'];
  dataSource!: MatTableDataSource<Car>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private carService: CarService, 
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.carService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
      this.dataSource = new MatTableDataSource(this.cars);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onSubmit() {
    this.carService.addCar(this.car).subscribe(response => {
      alert('Carro cadastrado com sucesso!');
      this.loadCars();  // Recarrega a lista de carros após adicionar um novo
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editCar(car: Car) {
    const dialogRef = this.dialog.open(CarDialogComponent, {
      width: '250px',
      data: car
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.carService.updateCar(result).subscribe(() => {
          this.loadCars();
        });
      }
    });
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(() => {
      this.loadCars();
    });
  }
}
