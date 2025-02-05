package com.cosmic.back.Model;

import com.cosmic.back.DTO.ClientesDTO;
import com.cosmic.back.DTO.VehiculosDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "clientes")
public class Clientes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ClienteID;
    private String Nombre;
    private String Apellido;
    private String Email;
    private String DNI;
    private String Direccion;
    private String Telefono;




    public Clientes(ClientesDTO clientesDTO) {
        this.ClienteID = clientesDTO.getClienteID();
        this.Nombre = clientesDTO.getNombre();
        this.Apellido = clientesDTO.getApellido();
        this.Email = clientesDTO.getEmail();
        this.DNI = clientesDTO.getDNI();
        this.Direccion = clientesDTO.getDireccion();
        this.Telefono = clientesDTO.getTelefono();
    }
}
