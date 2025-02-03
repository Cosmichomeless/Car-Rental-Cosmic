package com.cosmic.back.Repository;

import com.cosmic.back.Model.TipoMotor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoMotorRepository extends JpaRepository<TipoMotor, Integer> {
}
