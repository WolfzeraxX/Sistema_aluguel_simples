import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './cars/cars.component';
import { CustomerComponent } from './customers/customers.component';
import { RentalComponent } from './rentals/rentals.component';
import { HomeComponent } from './home/home.component';
import { RentalListComponent } from './rentals/components/rental-list/rental-list.component';
import { RentalDetailComponent } from './rentals/components/rental-detail/rental-detail.component';
import { RentalCreateComponent } from './rentals/components/rental-create/rental-create.component';



const routes: Routes = [
  { path: 'cars', component: CarComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'rentals', component: RentalListComponent },
  { path: 'rental/:id', component: RentalDetailComponent },
  { path: 'create-rental', component: RentalCreateComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
