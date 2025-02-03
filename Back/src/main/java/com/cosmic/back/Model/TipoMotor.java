package com.cosmic.back.Model;

import com.cosmic.back.DTO.TipoMotorDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
@Table(name = "tipo_motor")
public class TipoMotor {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int TipoMotorID;
    private String Nombre;

    public TipoMotor(TipoMotorDTO tipoMotorDTO) {
        this.TipoMotorID = tipoMotorDTO.getTipoMotorID();
        this.Nombre = tipoMotorDTO.getNombre();
    }
}

