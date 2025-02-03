package com.cosmic.back.Repository;

import com.cosmic.back.Model.Extras;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExtrasRepository extends JpaRepository<Extras, Integer> {
}
