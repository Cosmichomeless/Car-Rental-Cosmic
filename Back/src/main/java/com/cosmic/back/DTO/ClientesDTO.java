package com.cosmic.back.DTO;

import com.cosmic.back.Model.Clientes;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class ClientesDTO {

    private int ClienteID;
    private String Nombre;
    private String Apellido;
    private String Email;
    private String DNI;
    private String Direccion;
    private String Telefono;

    public ClientesDTO(Clientes cliente) {
        this.ClienteID = cliente.getClienteID();
        this.Nombre = cliente.getNombre();
        this.Apellido = cliente.getApellido();
        this.Email = cliente.getEmail();
        this.DNI = cliente.getDNI();
        this.Direccion = cliente.getDireccion();
        this.Telefono = cliente.getTelefono();
    }

}
