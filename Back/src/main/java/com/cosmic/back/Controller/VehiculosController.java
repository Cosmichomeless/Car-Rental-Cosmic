package com.cosmic.back.Controller;

import com.cosmic.back.DTO.VehiculosDTO;
import com.cosmic.back.Service.VehiculosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehiculo")
public class VehiculosController {

    @Autowired
    private VehiculosService vehiculosService;

    @GetMapping
    public ResponseEntity<List<VehiculosDTO>> findAll() {
        return new ResponseEntity<>(vehiculosService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<VehiculosDTO> findById(@PathVariable int id) {
        VehiculosDTO vehiculoDTO = vehiculosService.findById(id);
        if (vehiculoDTO != null) {
            return new ResponseEntity<>(vehiculoDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<VehiculosDTO> save(@RequestBody VehiculosDTO vehiculosDTO) {
        return new ResponseEntity<>(vehiculosService.save(vehiculosDTO), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<VehiculosDTO> update(@RequestBody VehiculosDTO vehiculosDTO) {
        return new ResponseEntity<>(vehiculosService.update(vehiculosDTO), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        vehiculosService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}