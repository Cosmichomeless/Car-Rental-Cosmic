package com.cosmic.back.DTO;

import com.cosmic.back.Model.Vehiculos;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

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
    private Set<ExtrasDTO> extras;

    public VehiculosDTO(Vehiculos vehiculo) {
        this.VehiculoID = vehiculo.getVehiculoID();
        this.Matricula = vehiculo.getMatricula();
        this.Marca = vehiculo.getMarca();
        this.Modelo = vehiculo.getModelo();
        this.Color = vehiculo.getColor();
        this.Motor = vehiculo.getMotor();
        this.TipoMotor = vehiculo.getTipoMotor();
        this.anio = vehiculo.getAnio();
        if (vehiculo.getExtras() != null) {
            this.extras = vehiculo.getExtras().stream()
                    .map(ExtrasDTO::new)
                    .collect(Collectors.toSet());
        } else {
            this.extras = new HashSet<>();
        }
    }


}

