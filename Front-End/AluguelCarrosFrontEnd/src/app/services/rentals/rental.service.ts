import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private apiUrl = 'https://localhost:44355/api/rentals';

  constructor(private http: HttpClient) { }

  getRentals(): Observable<Rental[]> {
    return this.http.get<Rental[]>(this.apiUrl);
  }

  addRental(rental: Rental): Observable<Rental> {
    return this.http.post<Rental>(this.apiUrl, rental);
  }
}
