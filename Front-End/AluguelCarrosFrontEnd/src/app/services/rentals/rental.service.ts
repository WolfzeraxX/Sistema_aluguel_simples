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

  getRental(id: number): Observable<Rental> {
    return this.http.get<Rental>(`${this.apiUrl}/${id}`);
  }

  createRental(rental: Rental): Observable<any> {
    return this.http.post<any>(this.apiUrl, rental);
  }

  updateRental(id: number, rental: Rental): Observable<Rental> {
    return this.http.put<Rental>(`${this.apiUrl}/${id}`, rental);
  }

  deleteRental(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

