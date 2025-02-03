package com.cosmic.back.DTO;

import com.cosmic.back.Model.TipoMotor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class TipoMotorDTO {
    private int TipoMotorID;
    private String Nombre;

    public TipoMotorDTO(TipoMotor tipoMotor) {
        this.TipoMotorID = tipoMotor.getTipoMotorID();
        this.Nombre = tipoMotor.getNombre();
    }
}
