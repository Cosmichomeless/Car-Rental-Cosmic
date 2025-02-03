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
        dashboardDTO.setMesEnero(alquileresRepository.findAlquileresEnero());
        dashboardDTO.setMesFebrero(alquileresRepository.findAlquileresFebrero());
        dashboardDTO.setMesMarzo(alquileresRepository.findAlquileresMarzo());
        dashboardDTO.setMesAbril(alquileresRepository.findAlquileresAbril());
        dashboardDTO.setMesMayo(alquileresRepository.findAlquileresMayo());
        dashboardDTO.setMesJunio(alquileresRepository.findAlquileresJunio());
        dashboardDTO.setMesJulio(alquileresRepository.findAlquileresJulio());
        dashboardDTO.setMesAgosto(alquileresRepository.findAlquileresAgosto());
        dashboardDTO.setMesSeptiembre(alquileresRepository.findAlquileresSeptiembre());
        dashboardDTO.setMesOctubre(alquileresRepository.findAlquileresOctubre());
        dashboardDTO.setMesNoviembre(alquileresRepository.findAlquileresNoviembre());
        dashboardDTO.setMesDiciembre(alquileresRepository.findAlquileresDiciembre());

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