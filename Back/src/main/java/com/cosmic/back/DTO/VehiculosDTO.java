package com.cosmic.back.DTO;

import com.cosmic.back.Model.Vehiculos;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class VehiculosDTO {

    private int VehiculoID;
    private String Matricula;
    private String Marca;
    private String Modelo;
    private String Color;
    private String Motor;
    private String TipoMotor;
    private Integer anio;
    private Integer ExtrasID;
    private String nombreExtra; // Nuevo campo

    public VehiculosDTO(Vehiculos vehiculo, String nombreExtra) {
        this.VehiculoID = vehiculo.getVehiculoID();
        this.Matricula = vehiculo.getMatricula();
        this.Marca = vehiculo.getMarca();
        this.Modelo = vehiculo.getModelo();
        this.Color = vehiculo.getColor();
        this.Motor = vehiculo.getMotor();
        this.TipoMotor = vehiculo.getTipoMotor();
        this.anio = vehiculo.getAnio();
        this.ExtrasID = vehiculo.getExtrasID();
        this.nombreExtra = nombreExtra; // Asignación del nuevo campo
    }
}