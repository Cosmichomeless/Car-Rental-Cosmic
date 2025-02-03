package com.cosmic.back.Controller;

import com.cosmic.back.DTO.AlquileresDTO;
import com.cosmic.back.Service.AlquileresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping ("/alquileres")
@RestController
public class AlquileresController {

    @Autowired
    private AlquileresService alquileresService;

    @GetMapping
    public ResponseEntity<List<AlquileresDTO>>  finAll() {
        return new ResponseEntity<>(alquileresService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AlquileresDTO> findById(@PathVariable int id) {
        return new ResponseEntity<>(alquileresService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<AlquileresDTO> save(@RequestBody AlquileresDTO alquileresDTO) {
        return new ResponseEntity<>(alquileresService.save(alquileresDTO), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<AlquileresDTO> update(@RequestBody AlquileresDTO alquileresDTO) {
        return new ResponseEntity<>(alquileresService.update(alquileresDTO), HttpStatus.OK);
    }




}
