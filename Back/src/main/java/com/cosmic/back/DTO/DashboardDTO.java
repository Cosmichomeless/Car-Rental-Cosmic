package com.cosmic.back.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class DashboardDTO {

    private int totalClientes;
    private int totalVehiculos;
    private int totalAlquileres;
    private int totalIngresos;
    private int mesEnero;
    private int mesFebrero;
    private int mesMarzo;
    private int mesAbril;
    private int mesMayo;
    private int mesJunio;
    private int mesJulio;
    private int mesAgosto;
    private int mesSeptiembre;
    private int mesOctubre;
    private int mesNoviembre;
    private int mesDiciembre;
    private List<UltimosAlquileresDTO> ultimosAlquileres;
}