import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car.model';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'https://localhost:44355/api/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }
  getCar(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, car);
  }
  updateCar(car: Car): Observable<any> {
    return this.http.put(`${this.apiUrl}/${car.id}`, car);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
