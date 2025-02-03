package com.cosmic.back.Service;

import com.cosmic.back.DTO.AlquileresDTO;
import com.cosmic.back.Model.Alquileres;
import com.cosmic.back.Repository.AlquileresRepository;
import com.cosmic.back.Repository.ClientesRepository;
import com.cosmic.back.Repository.VehiculosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AlquileresService {

    @Autowired
    private AlquileresRepository alquileresRepository;

    @Autowired
    private ClientesRepository clienteRepository;

    @Autowired
    private VehiculosRepository vehiculoRepository;

    public List<AlquileresDTO> findAll() {
        return alquileresRepository.findAll().stream().map(alquiler -> {
            String nombreCliente = clienteRepository.findById(alquiler.getClienteID()).orElseThrow().getNombre();
            String nombreVehiculo = vehiculoRepository.findById(alquiler.getVehiculoID()).orElseThrow().getModelo();
            return new AlquileresDTO(alquiler, nombreCliente, nombreVehiculo);
        }).collect(Collectors.toList());
    }

    public AlquileresDTO findById(int id) {
        Alquileres alquiler = alquileresRepository.findById(id).orElseThrow();
        String nombreCliente = clienteRepository.findById(alquiler.getClienteID()).orElseThrow().getNombre();
        String nombreVehiculo = vehiculoRepository.findById(alquiler.getVehiculoID()).orElseThrow().getModelo();
        return new AlquileresDTO(alquiler, nombreCliente, nombreVehiculo);
    }

    public AlquileresDTO save(AlquileresDTO alquileresDTO) {
        Alquileres alquiler = new Alquileres(alquileresDTO);
        alquileresRepository.save(alquiler);
        return new AlquileresDTO(alquiler, clienteRepository.findById(alquiler.getClienteID()).orElseThrow().getNombre(), vehiculoRepository.findById(alquiler.getVehiculoID()).orElseThrow().getModelo());
    }

    public AlquileresDTO update(AlquileresDTO alquileresDTO) {
        Alquileres alquiler = new Alquileres(alquileresDTO);
        alquileresRepository.save(alquiler);
        return new AlquileresDTO(alquiler, clienteRepository.findById(alquiler.getClienteID()).orElseThrow().getNombre(), vehiculoRepository.findById(alquiler.getVehiculoID()).orElseThrow().getModelo());
    }

    public void delete(int id) {
        alquileresRepository.deleteById(id);
    }
}