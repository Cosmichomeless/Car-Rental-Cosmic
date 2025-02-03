package com.cosmic.back.DTO;

import com.cosmic.back.Model.Extras;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class ExtrasDTO {
    private int ExtraID;
    private String Nombre;

    public ExtrasDTO(Extras extras) {
        this.ExtraID = extras.getExtraID();
        this.Nombre = extras.getNombre();
    }
}
