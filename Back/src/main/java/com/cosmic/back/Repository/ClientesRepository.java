package com.cosmic.back.Repository;

import com.cosmic.back.Model.Clientes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ClientesRepository extends JpaRepository<Clientes, Integer> {



    @Query ("SELECT COUNT(c) FROM Clientes c")
    int countClientes();







}
