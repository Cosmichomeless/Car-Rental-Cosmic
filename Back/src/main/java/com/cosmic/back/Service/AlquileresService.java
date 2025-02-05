package com.cosmic.back.Service;

import com.cosmic.back.DTO.AlquileresDTO;
import com.cosmic.back.Model.Alquileres;
import com.cosmic.back.Model.Clientes;
import com.cosmic.back.Model.FormasPago;
import com.cosmic.back.Model.Vehiculos;
import com.cosmic.back.Repository.AlquileresRepository;
import com.cosmic.back.Repository.ClientesRepository;
import com.cosmic.back.Repository.FormasPagoRepository;
import com.cosmic.back.Repository.VehiculosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AlquileresService {

    @Autowired
    private AlquileresRepository alquileresRepository;

    @Autowired
    private ClientesRepository clienteRepository;

    @Autowired
    private VehiculosRepository vehiculoRepository;

    @Autowired
    private FormasPagoRepository formasPagoRepository;

    public List<AlquileresDTO> findAll() {
        return alquileresRepository.findAll().stream()
                .map(alquiler -> {
                    String nombreCliente = clienteRepository.findById(alquiler.getClienteID())
                            .map(Clientes::getNombre)
                            .orElse("Cliente no encontrado");
                    String nombreVehiculo = vehiculoRepository.findById(alquiler.getVehiculoID())
                            .map(Vehiculos::getMatricula)
                            .orElse("Vehículo no encontrado");
                    String nombreFormaPago = formasPagoRepository.findById(alquiler.getFormaPagoID())
                            .map(FormasPago::getNombre)
                            .orElse("Forma de pago no encontrada");
                    return new AlquileresDTO(alquiler, nombreCliente, nombreVehiculo, nombreFormaPago);
                })
                .collect(Collectors.toList());
    }

    public AlquileresDTO findById(int id) {
        Alquileres alquiler = alquileresRepository.findById(id).orElseThrow();
        String nombreCliente = clienteRepository.findById(alquiler.getClienteID()).orElseThrow().getNombre();
        String nombreVehiculo = vehiculoRepository.findById(alquiler.getVehiculoID()).orElseThrow().getMatricula();
        String nombreFormaPago = formasPagoRepository.findById(alquiler.getFormaPagoID()).orElseThrow().getNombre();
        return new AlquileresDTO(alquiler, nombreCliente, nombreVehiculo, nombreFormaPago);
    }

    public AlquileresDTO save(AlquileresDTO alquileresDTO) {
        Alquileres alquiler = new Alquileres(alquileresDTO);
        alquileresRepository.save(alquiler);
        String nombreCliente = clienteRepository.findById(alquiler.getClienteID()).orElseThrow().getNombre();
        String nombreVehiculo = vehiculoRepository.findById(alquiler.getVehiculoID()).orElseThrow().getMatricula();
        String nombreFormaPago = formasPagoRepository.findById(alquiler.getFormaPagoID()).orElseThrow().getNombre();
        return new AlquileresDTO(alquiler, nombreCliente, nombreVehiculo, nombreFormaPago);
    }

    public AlquileresDTO update(AlquileresDTO alquileresDTO) {
        Alquileres alquiler = new Alquileres(alquileresDTO);
        alquileresRepository.save(alquiler);
        String nombreCliente = clienteRepository.findById(alquiler.getClienteID()).orElseThrow().getNombre();
        String nombreVehiculo = vehiculoRepository.findById(alquiler.getVehiculoID()).orElseThrow().getMatricula();
        String nombreFormaPago = formasPagoRepository.findById(alquiler.getFormaPagoID()).orElseThrow().getNombre();
        return new AlquileresDTO(alquiler, nombreCliente, nombreVehiculo, nombreFormaPago);
    }

    public void delete(int id) {
        alquileresRepository.deleteById(id);
    }
}