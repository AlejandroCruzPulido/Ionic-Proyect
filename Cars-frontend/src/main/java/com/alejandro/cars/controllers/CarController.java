package com.alejandro.cars.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alejandro.cars.entity.model.Car;
import com.alejandro.cars.entity.services.ICarService;

@RestController
@CrossOrigin(origins = "*")
public class CarController {

		@Autowired
		private ICarService carService;

		@GetMapping("/car")
		public List<Car> getAll(){
			
			return carService.getAll();
		}
		
		@GetMapping("/car/{id}")
		public Car getOne(@PathVariable(value = "id") long id) {
			return carService.get(id);
		}
		
		@PostMapping("/car")
		public void addCar(Car car) {
			carService.post(car);
		}
		
		@PutMapping("/car/{id}")
		public void put(Car car, @PathVariable(value = "id") long id) {
			carService.put(car, id);
		}
		
		@DeleteMapping("/car/{id}")
		public void delete(@PathVariable(value = "id") long id) {
			carService.delete(id);
		}
}
