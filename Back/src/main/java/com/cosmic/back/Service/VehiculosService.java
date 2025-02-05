package com.cosmic.back.Service;

import com.cosmic.back.DTO.VehiculosDTO;
import com.cosmic.back.Model.Extras;
import com.cosmic.back.Model.Vehiculos;
import com.cosmic.back.Repository.ExtrasRepository;
import com.cosmic.back.Repository.VehiculosRepository;
import com.cosmic.back.Service.Factory.VehiculosFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehiculosService {

    @Autowired
    private VehiculosRepository vehiculosRepository;

    @Autowired
    private VehiculosFactory vehiculoFactory;

    @Autowired
    private ExtrasRepository extrasRepository;

    public List<VehiculosDTO> findAll() {
        List<Vehiculos> vehiculoList = vehiculosRepository.findAll();
        return vehiculoFactory.createVehiculosDTOList(vehiculoList);
    }

    public VehiculosDTO findById(int id) {
        Optional<Vehiculos> vehiculoOpt = vehiculosRepository.findById(id);
        if (vehiculoOpt.isPresent()) {
            Vehiculos vehiculo = vehiculoOpt.get();
            String nombreExtra = null;
            if (vehiculo.getExtrasID() != null) {
                Optional<Extras> extraOpt = extrasRepository.findById(vehiculo.getExtrasID());
                if (extraOpt.isPresent()) {
                    nombreExtra = extraOpt.get().getNombre();
                }
            }
            return new VehiculosDTO(vehiculo, nombreExtra);
        }
        return null;
    }

    public VehiculosDTO save(VehiculosDTO vehiculoDTO) {
        Vehiculos vehiculo = vehiculoFactory.createVehiculos(vehiculoDTO);
        vehiculo = vehiculosRepository.save(vehiculo);
        return vehiculoFactory.createVehiculosDTO(vehiculo);
    }

    public VehiculosDTO update(VehiculosDTO vehiculoDTO) {
        Vehiculos vehiculo = vehiculoFactory.createVehiculos(vehiculoDTO);
        vehiculo = vehiculosRepository.save(vehiculo);
        return vehiculoFactory.createVehiculosDTO(vehiculo);
    }

    public void delete(int id) {
        vehiculosRepository.deleteById(id);
    }
}