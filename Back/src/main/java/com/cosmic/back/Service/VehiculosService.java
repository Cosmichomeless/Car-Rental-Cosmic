package com.cosmic.back.Service;

import com.cosmic.back.DTO.VehiculosDTO;
import com.cosmic.back.Model.Vehiculos;
import com.cosmic.back.Repository.VehiculosRepository;
import com.cosmic.back.Service.Factory.VehiculosFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiculosService {

    @Autowired
    private VehiculosRepository vehiculoRepository;

    @Autowired
    private VehiculosFactory vehiculoFactory;

    public List<VehiculosDTO> findAll() {
        List<Vehiculos> vehiculoList = vehiculoRepository.findAll();
        return vehiculoFactory.createVehiculosDTOList(vehiculoList);
    }

    public VehiculosDTO findById(int id) {
        Vehiculos vehiculo = vehiculoRepository.findById(id).orElse(null);
        return vehiculoFactory.createVehiculosDTO(vehiculo);
    }

    public VehiculosDTO save(VehiculosDTO vehiculoDTO) {
        Vehiculos vehiculo = vehiculoFactory.createVehiculos(vehiculoDTO);
        vehiculo = vehiculoRepository.save(vehiculo);
        return vehiculoFactory.createVehiculosDTO(vehiculo);
    }

    public VehiculosDTO update(VehiculosDTO vehiculoDTO) {
        Vehiculos vehiculo = vehiculoFactory.createVehiculos(vehiculoDTO);
        vehiculo = vehiculoRepository.save(vehiculo);
        return vehiculoFactory.createVehiculosDTO(vehiculo);
    }

    public void delete(int id) {
        vehiculoRepository.deleteById(id);
    }
}