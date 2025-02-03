package com.cosmic.back.DTO;

import com.cosmic.back.Model.FormasPago;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class FormasPagoDTO {
    private int FormaPagoID;
    private String Nombre;

    public FormasPagoDTO(FormasPago formasPago) {
        this.FormaPagoID = formasPago.getFormaPagoID();
        this.Nombre = formasPago.getNombre();
    }
}
