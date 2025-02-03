package com.cosmic.back.Controller;

import com.cosmic.back.DTO.ExtrasDTO;
import com.cosmic.back.Model.Extras;
import com.cosmic.back.Service.ExtrasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping ("/extras")
@RestController
public class ExtrasController {

    @Autowired
    private ExtrasService extrasService;

    @GetMapping
    public ResponseEntity<List<ExtrasDTO>>  finAll() {
        return new ResponseEntity<>(extrasService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExtrasDTO> findById(@PathVariable int id) {
        return new ResponseEntity<>(extrasService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ExtrasDTO> save(@RequestBody ExtrasDTO extrasDTO) {
        return new ResponseEntity<>(extrasService.save(extrasDTO), HttpStatus.CREATED);
    }
}