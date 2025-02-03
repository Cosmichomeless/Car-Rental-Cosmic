package com.cosmic.back.Service.Factory;

import com.cosmic.back.DTO.AlquileresDTO;
import com.cosmic.back.Model.Alquileres;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlquileresFactory {

    public Alquileres createAlquileres(AlquileresDTO alquileresDTO) {
        return new Alquileres(alquileresDTO);
    }

    public AlquileresDTO createAlquileresDTO(Alquileres alquileres) {
        return new AlquileresDTO(alquileres);
    }

    public List<AlquileresDTO> createAlquileresDTOList(List<Alquileres> alquileresList) {
        List<AlquileresDTO> alquileresDTOList = new ArrayList<>();
        alquileresList.stream().forEach(
                alquileres -> alquileresDTOList.add(createAlquileresDTO(alquileres))
        );
        return alquileresDTOList;
    }
}