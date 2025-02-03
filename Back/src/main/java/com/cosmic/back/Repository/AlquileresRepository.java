package com.cosmic.back.Repository;

import com.cosmic.back.Model.Alquileres;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlquileresRepository extends JpaRepository<Alquileres, Integer> {

    @Query("Select sum(a.Precio) from Alquileres a")
    Integer sumAlquileres();

    @Query("SELECT COUNT(a) FROM Alquileres a")
    Integer countAlquileres();

    @Query("SELECT SUM(a.Precio) FROM Alquileres a WHERE MONTH(a.FechaFin) = 1")
    Integer findAlquileresEnero();

    @Query("SELECT SUM(a.Precio) FROM Alquileres a WHERE MONTH(a.FechaFin) = 2")
    Integer findAlquileresFebrero();

    @Query("SELECT SUM(a.Precio) FROM Alquileres a WHERE MONTH(a.FechaFin) = 3")
    Integer findAlquileresMarzo();

    @Query("SELECT SUM(a.Precio) FROM Alquileres a WHERE MONTH(a.FechaFin) = 4")
    Integer findAlquileresAbril();

    @Query("SELECT SUM(a.Precio) FROM Alquileres a WHERE MONTH(a.FechaFin) = 5")
    Integer findAlquileresMayo();

    @Query("SELECT SUM(a.Precio) FROM Alquileres a WHERE MONTH(a.FechaFin) = 6")
    Integer findAlquileresJunio();

    @Query("SELECT SUM(a.Precio) FROM Alquileres a WHERE MONTH(a.FechaFin) = 7")
    Integer findAlquileresJulio();

    @Query("SELECT SUM(a.Precio) FROM Alquileres a WHERE MONTH(a.FechaFin) = 8")
    Integer findAlquileresAgosto();

    @Query("SELECT SUM(a.Precio) FROM Alquileres a WHERE MONTH(a.FechaFin) = 9")
    Integer findAlquileresSeptiembre();

    @Query("SELECT SUM(a.Precio) FROM Alquileres a WHERE MONTH(a.FechaFin) = 10")
    Integer findAlquileresOctubre();

    @Query("SELECT SUM(a.Precio) FROM Alquileres a WHERE MONTH(a.FechaFin) = 11")
    Integer findAlquileresNoviembre();

    @Query("SELECT SUM(a.Precio) FROM Alquileres a WHERE MONTH(a.FechaFin) = 12")
    Integer findAlquileresDiciembre();

    @Query("SELECT a FROM Alquileres a ORDER BY a.FechaFin DESC LIMIT 5")
    List<Alquileres> findUltimosAlquileres();

}