package com.cosmic.back.Service.Factory;

import com.cosmic.back.DTO.VehiculosDTO;
import com.cosmic.back.Model.Extras;
import com.cosmic.back.Model.Vehiculos;
import com.cosmic.back.Repository.ExtrasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VehiculosFactory {

    @Autowired
    private ExtrasRepository extrasRepository;

    public Vehiculos createVehiculos(VehiculosDTO vehiculosDTO) {
        return new Vehiculos(vehiculosDTO);
    }

    public VehiculosDTO createVehiculosDTO(Vehiculos vehiculos) {
        String nombreExtra = null;
        if (vehiculos.getExtrasID() != null) {
            Optional<Extras> extraOpt = extrasRepository.findById(vehiculos.getExtrasID());
            if (extraOpt.isPresent()) {
                nombreExtra = extraOpt.get().getNombre();
            }
        }
        return new VehiculosDTO(vehiculos, nombreExtra);
    }

    public List<VehiculosDTO> createVehiculosDTOList(List<Vehiculos> vehiculosList) {
        List<VehiculosDTO> vehiculosDTOList = new ArrayList<>();
        vehiculosList.stream().forEach(
                vehiculos -> vehiculosDTOList.add(createVehiculosDTO(vehiculos))
        );
        return vehiculosDTOList;
    }
}