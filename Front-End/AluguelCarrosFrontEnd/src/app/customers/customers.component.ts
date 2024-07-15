import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from '../services/costumers/customer.service';
import { Customer } from '../models/custumer.model';
import { CustomerDialogComponent } from './customers-dialog.component';



@Component({
  selector: 'app-customer',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomerComponent {
  customer: Customer = {
    id: 0, name: '', phoneNumber: '', address: '',
    document: ''
  };
  customers: Customer[] = [];
  displayedColumns: string[] = ['id', 'name', 'telefone', 'endereco', 'documento', 'actions'];
  dataSource!: MatTableDataSource<Customer>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private customerService: CustomerService, 
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
      this.dataSource = new MatTableDataSource(this.customers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onSubmit() {
    this.customerService.addCustomer(this.customer).subscribe(response => {
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

  editiCostumer(customer: Customer) {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '250px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.updateCustomer(result).subscribe(() => {
          this.loadCars();
        });
      }
    });
  }

  deleteCostumer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.loadCars();
    });
  }
}
