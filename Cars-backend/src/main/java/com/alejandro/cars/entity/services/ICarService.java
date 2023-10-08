package com.alejandro.cars.entity.services;

import java.util.List;

import com.alejandro.cars.entity.models.Car;

public interface ICarService {
	public List<Car> getAll();
	public Car get(long id);
	public void post(Car car);
	public void put(Car car, long id);
	public void delete(long id);
}
