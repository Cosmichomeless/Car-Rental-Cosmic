package com.cosmic.back.DTO;

import com.cosmic.back.Model.Alquileres;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@Data
public class AlquileresDTO {
    private int AlquilerID;
    private int ClienteID;
    private String nombreCliente;
    private int VehiculoID;
    private String nombreVehiculo;
    private Date FechaInicio;
    private Date FechaFin;
    private int Precio;
    private int FormaPagoID;
    private boolean Entregado;

    public AlquileresDTO(Alquileres alquileres, String nombreCliente, String nombreVehiculo) {
        this.AlquilerID = alquileres.getAlquilerID();
        this.ClienteID = alquileres.getClienteID();
        this.nombreCliente = nombreCliente;
        this.VehiculoID = alquileres.getVehiculoID();
        this.nombreVehiculo = nombreVehiculo;
        this.FechaInicio = alquileres.getFechaInicio();
        this.FechaFin = alquileres.getFechaFin();
        this.Precio = alquileres.getPrecio();
        this.FormaPagoID = alquileres.getFormaPagoID();
        this.Entregado = alquileres.isEntregado();
    }

    public AlquileresDTO(Alquileres alquileres) {
        this.AlquilerID = alquileres.getAlquilerID();
        this.ClienteID = alquileres.getClienteID();
        this.VehiculoID = alquileres.getVehiculoID();
        this.FechaInicio = alquileres.getFechaInicio();
        this.FechaFin = alquileres.getFechaFin();
        this.Precio = alquileres.getPrecio();
        this.FormaPagoID = alquileres.getFormaPagoID();
        this.Entregado = alquileres.isEntregado();
    }
}