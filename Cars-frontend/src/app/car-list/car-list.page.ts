import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.page.html',
  styleUrls: ['./car-list.page.scss'],
})
export class CarListPage implements OnInit, OnDestroy {
  cars: any = [];
  private refreshSubscription!: Subscription;
  searchParams: any = {};
  filteredCars: any = [];
  showAllButtonVisible: boolean = false; // Variable para controlar la visibilidad del botón "Ver todas las ofertas"

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit() {
    this.loadCars();
    this.carService.carUpdated$.subscribe(() => {
      this.loadCars();
    });
  }

  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  loadCars() {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
      this.filteredCars = data;
    });
  }

  gotoCarAdd() {
    this.router.navigateByUrl('/car-add');
  }

  editCar(carId: number) {
    this.router.navigate(['/car-update', carId]);
  }

  deleteCar(carId: number) {
    this.carService.deleteCar(carId).subscribe(() => {
      console.log('Coche eliminado');
      this.loadCars();
    });
  }

  searchCarsByMarca() {
    if (this.searchParams.marca) {
      console.log(this.searchParams.marca);
      this.cars = this.cars.filter(
        (car: any) => car.marca.toLowerCase() === this.searchParams.marca.toLowerCase()
      );
    } else {
      this.loadCars();
    }
    this.showAllButtonVisible = true;
  }
  
  showAllCars() {
    this.searchParams.marca = ''; 
    this.showAllButtonVisible = false;
    this.loadCars();
  }
}
