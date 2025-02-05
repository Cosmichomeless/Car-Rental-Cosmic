package com.cosmic.back.Service;

import com.cosmic.back.DTO.DashboardDTO;
import com.cosmic.back.DTO.UltimosAlquileresDTO;
import com.cosmic.back.Model.Alquileres;
import com.cosmic.back.Model.Clientes;
import com.cosmic.back.Model.Vehiculos;
import com.cosmic.back.Repository.AlquileresRepository;
import com.cosmic.back.Repository.ClientesRepository;
import com.cosmic.back.Repository.VehiculosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DashboardService {

    @Autowired
    private ClientesRepository clientesRepository;
    @Autowired
    private AlquileresRepository alquileresRepository;
    @Autowired
    private VehiculosRepository vehiculosRepository;

    public DashboardDTO getDashboard() {
        DashboardDTO dashboardDTO = new DashboardDTO();
        dashboardDTO.setTotalClientes(clientesRepository.countClientes());
        dashboardDTO.setTotalVehiculos(vehiculosRepository.countVehiculos());
        dashboardDTO.setTotalAlquileres(alquileresRepository.countAlquileres());
        dashboardDTO.setTotalIngresos(alquileresRepository.sumAlquileres());
        dashboardDTO.setMesEnero(alquileresRepository.findAlquileresEnero() != null ? alquileresRepository.findAlquileresEnero() : 0);
        dashboardDTO.setMesFebrero(alquileresRepository.findAlquileresFebrero() != null ? alquileresRepository.findAlquileresFebrero() : 0);
        dashboardDTO.setMesMarzo(alquileresRepository.findAlquileresMarzo() != null ? alquileresRepository.findAlquileresMarzo() : 0);
        dashboardDTO.setMesAbril(alquileresRepository.findAlquileresAbril() != null ? alquileresRepository.findAlquileresAbril() : 0);
        dashboardDTO.setMesMayo(alquileresRepository.findAlquileresMayo() != null ? alquileresRepository.findAlquileresMayo() : 0);
        dashboardDTO.setMesJunio(alquileresRepository.findAlquileresJunio() != null ? alquileresRepository.findAlquileresJunio() : 0);
        dashboardDTO.setMesJulio(alquileresRepository.findAlquileresJulio() != null ? alquileresRepository.findAlquileresJulio() : 0);
        dashboardDTO.setMesAgosto(alquileresRepository.findAlquileresAgosto() != null ? alquileresRepository.findAlquileresAgosto() : 0);
        dashboardDTO.setMesSeptiembre(alquileresRepository.findAlquileresSeptiembre() != null ? alquileresRepository.findAlquileresSeptiembre() : 0);
        dashboardDTO.setMesOctubre(alquileresRepository.findAlquileresOctubre() != null ? alquileresRepository.findAlquileresOctubre() : 0);
        dashboardDTO.setMesNoviembre(alquileresRepository.findAlquileresNoviembre() != null ? alquileresRepository.findAlquileresNoviembre() : 0);
        dashboardDTO.setMesDiciembre(alquileresRepository.findAlquileresDiciembre() != null ? alquileresRepository.findAlquileresDiciembre() : 0);

        List<Alquileres> ultimosAlquileres = alquileresRepository.findUltimosAlquileres();
        List<UltimosAlquileresDTO> ultimosAlquileresDTOs = ultimosAlquileres.stream()
                .map(alquiler -> {
                    Clientes cliente = clientesRepository.findById(alquiler.getClienteID()).orElse(null);
                    Vehiculos vehiculo = vehiculosRepository.findById(alquiler.getVehiculoID()).orElse(null);
                    String vehiculoInfo = vehiculo != null ? vehiculo.getMarca() + " " + vehiculo.getModelo() : "Desconocido";
                    return new UltimosAlquileresDTO(
                            cliente != null ? cliente.getNombre() + " " + cliente.getApellido() : "Desconocido",
                            vehiculoInfo,
                            alquiler.getPrecio()
                    );
                })
                .collect(Collectors.toList());

        dashboardDTO.setUltimosAlquileres(ultimosAlquileresDTOs);
        return dashboardDTO;
    }
}