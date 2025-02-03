package com.cosmic.back.Controller;

import com.cosmic.back.DTO.ClientesDTO;
import com.cosmic.back.Service.ClientesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/clientes")
@RestController
public class ClientesController {

    @Autowired
    private ClientesService clientesService;

    @GetMapping
    public ResponseEntity<List<ClientesDTO>> findAll() {
        return new ResponseEntity<>(clientesService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClientesDTO> findById(@PathVariable int id) {
        return new ResponseEntity<>(clientesService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ClientesDTO> save(@RequestBody ClientesDTO clientesDTO) {
        return new ResponseEntity<>(clientesService.save(clientesDTO), HttpStatus.CREATED);
    }
}