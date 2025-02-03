package com.cosmic.back.Repository;

import com.cosmic.back.Model.FormasPago;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormasPagoRepository extends JpaRepository<FormasPago, Integer> {
}
