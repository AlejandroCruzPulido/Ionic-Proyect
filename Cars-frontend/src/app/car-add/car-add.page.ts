import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.page.html',
  styleUrls: ['./car-add.page.scss'],
})
export class CarAddPage implements OnInit {

  marca: string = '';
  modelo: string = '';
  precio: number = 0;
  descripcion: string = '';

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
  }

  addCar(){
    let car = {
      marca: this.marca,
      modelo: this.modelo,
      precio: this.precio,
      descripcion: this.descripcion
    }
    this.carService.add(car).subscribe(response =>{
      console.log("Oferta añadida");
      this.marca = '';
      this.modelo = '';
      this.precio = 0;
      this.descripcion = '';
    })
  }

  gotoCarList(){
    this.router.navigateByUrl("/car-list")
  }

}
