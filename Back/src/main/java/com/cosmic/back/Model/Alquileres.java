package com.cosmic.back.Model;

import com.cosmic.back.DTO.AlquileresDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@Table(name = "alquileres")
public class Alquileres {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int AlquilerID;
    @JoinColumn(name = "ClienteID")
    private int ClienteID;
    @JoinColumn(name = "VehiculoID")
    private int VehiculoID;
    private Date FechaInicio;
    private Date FechaFin;
    private int Precio;
    @JoinColumn(name = "FormaPagoID")
    private int FormaPagoID;
    private boolean Entregado;

    public Alquileres(AlquileresDTO alquileresDTO) {
        this.AlquilerID = alquileresDTO.getAlquilerID();
        this.ClienteID = alquileresDTO.getClienteID();
        this.VehiculoID = alquileresDTO.getVehiculoID();
        this.FechaInicio = alquileresDTO.getFechaInicio();
        this.FechaFin = alquileresDTO.getFechaFin();
        this.Precio = alquileresDTO.getPrecio();
        this.FormaPagoID = alquileresDTO.getFormaPagoID();
    }


}
