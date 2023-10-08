import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.page.html',
  styleUrls: ['./car-update.page.scss'],
})
export class CarUpdatePage implements OnInit {

  carId: number = 0;
  car: any = {}; 

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.carId = +this.activatedRoute.snapshot.paramMap.get('id')!;
  
    this.carService.getCarById(this.carId).subscribe((data) => {
      this.car = data;
    });
  }  

  updateCar(){
      this.carService.updateCar(this.carId, this.car).subscribe(() => {
      console.log('Cambios guardados');
      this.router.navigateByUrl('/car-list');
  });
}
}
