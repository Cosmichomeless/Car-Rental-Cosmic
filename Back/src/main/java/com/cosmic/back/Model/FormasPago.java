package com.cosmic.back.Model;

import com.cosmic.back.DTO.FormasPagoDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
@Table(name = "formas_pago")
public class FormasPago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int FormaPagoID;
    private String Nombre;

    public FormasPago(FormasPagoDTO formasPagoDTO) {
        this.FormaPagoID = formasPagoDTO.getFormaPagoID();
        this.Nombre = formasPagoDTO.getNombre();
    }

}
