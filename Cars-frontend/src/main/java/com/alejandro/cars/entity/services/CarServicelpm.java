package com.alejandro.cars.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alejandro.cars.entity.dao.ICarDao;
import com.alejandro.cars.entity.model.Car;

@Service

public class CarServicelpm implements ICarService{

	@Autowired
	private ICarDao carDao;
	
	public Car get(long id) {
		return carDao.findById(id).get();
	}

	@Override
	public List<Car> getAll() {
		return (List<Car>) carDao.findAll();
	}

	@Override
	public void post(Car car) {
		carDao.save(car);
	}

	@Override
	public void put(Car car, long id) {
		carDao.findById(id).ifPresent((x) ->{
			car.setId(id);
			carDao.save(car);
		});
	}

	@Override
	public void delete(long id) {
		carDao.deleteById(id);
	}
}
