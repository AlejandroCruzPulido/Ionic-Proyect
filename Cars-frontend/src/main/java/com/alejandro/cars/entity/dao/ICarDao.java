package com.alejandro.cars.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.alejandro.cars.entity.model.Car;

public interface ICarDao extends CrudRepository <Car, Long>{

}
