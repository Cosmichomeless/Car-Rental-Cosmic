package com.cosmic.back.Repository;

import com.cosmic.back.Model.Vehiculos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VehiculosRepository extends JpaRepository<Vehiculos, Integer> {

    @Query("SELECT COUNT(v) FROM Vehiculos v")
    int countVehiculos();

}
