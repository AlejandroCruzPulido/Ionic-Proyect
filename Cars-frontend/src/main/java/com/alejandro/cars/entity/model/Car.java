package com.alejandro.cars.entity.model;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "car")

public class Car implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	long id;
	String marca;
	String modelo;
	int precio;
	String descripcion;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getModelo() {
		return modelo;
	}
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	public int getPrecio() {
		return precio;
	}
	public void setPrecio(int precio) {
		this.precio = precio;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public Car(long id, String marca, String modelo, int precio, String descripcion) {
		super();
		this.id = id;
		this.marca = marca;
		this.modelo = modelo;
		this.precio = precio;
		this.descripcion = descripcion;
	}
	
	public Car() {
		
	}
	
}
