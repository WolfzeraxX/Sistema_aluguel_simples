import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './cars/cars.component';
import { CustomerComponent } from './customers/customers.component';
import { RentalComponent } from './rentals/rentals.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: 'cars', component: CarComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'rentals', component: RentalComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
