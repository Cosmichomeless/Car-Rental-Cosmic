package com.cosmic.back.Controller;

import com.cosmic.back.DTO.AlquileresDTO;
import com.cosmic.back.Service.AlquileresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/alquileres")
@RestController
public class AlquileresController {

    @Autowired
    private AlquileresService alquileresService;

    @GetMapping
    public ResponseEntity<List<AlquileresDTO>> findAll() {
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

    @PutMapping("/{id}")
    public AlquileresDTO update(@PathVariable int id, @RequestBody AlquileresDTO alquileresDTO) {
        alquileresDTO.setAlquilerID(id);
        return alquileresService.update(alquileresDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        alquileresService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}