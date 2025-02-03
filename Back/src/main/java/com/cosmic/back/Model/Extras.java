package com.cosmic.back.Model;

import com.cosmic.back.DTO.ExtrasDTO;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
@Table(name = "extras")
public class Extras {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ExtraID;
    private String Nombre;

    public Extras(ExtrasDTO extrasDTO) {
        this.ExtraID = extrasDTO.getExtraID();
        this.Nombre = extrasDTO.getNombre();
    }
    
}

