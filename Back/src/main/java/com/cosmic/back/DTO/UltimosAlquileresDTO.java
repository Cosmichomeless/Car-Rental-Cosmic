package com.cosmic.back.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UltimosAlquileresDTO {
    private String nombreCliente;
    private String vehiculo;
    private int precio;

    public UltimosAlquileresDTO(String nombreCliente, String vehiculo, int precio) {
        this.nombreCliente = nombreCliente;
        this.vehiculo = vehiculo;
        this.precio = precio;
    }
}