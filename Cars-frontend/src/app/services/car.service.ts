import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/car';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {
    private carUpdatedSource = new Subject<void>();
    
    carUpdated$ = this.carUpdatedSource.asObservable();  
  constructor(private httpClient: HttpClient) { }

  getCars() {
    return this.httpClient.get(endpoint);
  }

  private carAddedSource = new Subject<void>();
  carAdded$ = this.carAddedSource.asObservable();

  add(car: any) {
    let body = new URLSearchParams();
    body.append("marca", car.marca);
    body.append("modelo", car.modelo);
    body.append("precio", car.precio.toString());
    body.append("descripcion", car.descripcion);

    return this.httpClient.post(endpoint, body.toString(), httpOptions).pipe(
      tap(() => {
        this.notifyListUpdated();
        this.carAddedSource.next(); 
      })
    );
  }

  updateCar(carId: number, updatedCar: any): Observable<any> {
    const updateUrl = `${endpoint}/${carId}`;
    let body = new URLSearchParams();
    body.append("marca", updatedCar.marca);
    body.append("modelo", updatedCar.modelo);
    body.append("precio", updatedCar.precio.toString());
    body.append("descripcion", updatedCar.descripcion);
  
    return this.httpClient.put(updateUrl, body.toString(), httpOptions).pipe(
      tap(() => {
        this.notifyListUpdated();
      })
    );
  }
  
  notifyListUpdated() {
    this.carUpdatedSource.next();
  }

  getCarById(carId: number): Observable<any> {
    const carUrl = `${endpoint}/${carId}`;
    return this.httpClient.get(carUrl);
  }

  deleteCar(carId: number): Observable<any> {
    const deleteUrl = `${endpoint}/${carId}`;
    return this.httpClient.delete(deleteUrl, httpOptions).pipe(
      tap(() => {
        this.notifyListUpdated();
      })
    );
  }  
}
