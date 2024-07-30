import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CarComponent } from './cars/cars.component';
import { CarDialogComponent } from './cars/cars-dialog.component';
import { CustomerComponent } from './customers/customers.component';
import { RentalComponent } from './rentals/rentals.component';
import { HomeComponent } from './home/home.component';
import { MatSelectModule } from '@angular/material/select';
import { CustomerDialogComponent } from './customers/customers-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RentalListComponent } from './rentals/components/rental-list/rental-list.component';
import { RentalDetailComponent } from './rentals/components/rental-detail/rental-detail.component';
import { RentalCreateComponent } from './rentals/components/rental-create/rental-create.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CustomerComponent,
    RentalComponent,
    CarDialogComponent,
    HomeComponent,
    CustomerDialogComponent,
    RentalListComponent,
    RentalDetailComponent,
    RentalCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
    
    
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
