package com.cosmic.back.Controller;

import com.cosmic.back.DTO.TipoMotorDTO;
import com.cosmic.back.Service.TipoMotorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/tipomotor")
@RestController
public class TipoMotorController {

    @Autowired
    private TipoMotorService tipoMotorService;

    @GetMapping
    public ResponseEntity<List<TipoMotorDTO>> findAll() {
        return new ResponseEntity<>(tipoMotorService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TipoMotorDTO> findById(@PathVariable int id) {
        return new ResponseEntity<>(tipoMotorService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TipoMotorDTO> save(@RequestBody TipoMotorDTO tipoMotorDTO) {
        return new ResponseEntity<>(tipoMotorService.save(tipoMotorDTO), HttpStatus.CREATED);
    }
}