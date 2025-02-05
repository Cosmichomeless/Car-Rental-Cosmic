package com.cosmic.back.Model;

import com.cosmic.back.DTO.ExtrasDTO;
import com.cosmic.back.DTO.VehiculosDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity
@Table(name = "vehiculos")
public class Vehiculos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int VehiculoID;
    @Column(unique = true)
    private String Matricula;
    private String Marca;
    private String Modelo;
    private String Color;
    private String Motor;
    private String TipoMotor;
    private Integer anio;
    private Integer ExtrasID;


    public Vehiculos(VehiculosDTO vehiculo) {
        this.VehiculoID = vehiculo.getVehiculoID();
        this.Matricula = vehiculo.getMatricula();
        this.Marca = vehiculo.getMarca();
        this.Modelo = vehiculo.getModelo();
        this.Color = vehiculo.getColor();
        this.Motor = vehiculo.getMotor();
        this.TipoMotor = vehiculo.getTipoMotor();
        this.anio = vehiculo.getAnio();
        this.ExtrasID = vehiculo.getExtrasID();

    }
}