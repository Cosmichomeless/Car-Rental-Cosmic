package com.cosmic.back.Service.Factory;

import com.cosmic.back.DTO.VehiculosDTO;
import com.cosmic.back.Model.Vehiculos;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VehiculosFactory {

    public Vehiculos createVehiculos(VehiculosDTO vehiculosDTO) {
        return new Vehiculos(vehiculosDTO);
    }

    public VehiculosDTO createVehiculosDTO(Vehiculos vehiculos) {
        return new VehiculosDTO(vehiculos);
    }

    public List<VehiculosDTO> createVehiculosDTOList(List<Vehiculos> vehiculosList) {
        List<VehiculosDTO> vehiculosDTOList = new ArrayList<>();
        vehiculosList.stream().forEach(
                vehiculos -> vehiculosDTOList.add(createVehiculosDTO(vehiculos))
        );
        return vehiculosDTOList;
    }


}