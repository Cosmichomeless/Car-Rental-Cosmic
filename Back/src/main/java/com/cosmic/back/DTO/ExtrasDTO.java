package com.cosmic.back.DTO;

import com.cosmic.back.Model.Extras;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ExtrasDTO {
    private int ExtraID;
    private String Nombre;

    public ExtrasDTO(Extras extra) {
        this.ExtraID = extra.getExtraID();
        this.Nombre = extra.getNombre();
    }
}