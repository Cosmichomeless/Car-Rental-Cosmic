package com.cosmic.back.Controller;

import com.cosmic.back.DTO.FormasPagoDTO;
import com.cosmic.back.Service.FormaPagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/formaspago")
@RestController
public class FormasPagoController {

    @Autowired
    private FormaPagoService formasPagoService;

    @GetMapping
    public ResponseEntity<List<FormasPagoDTO>> findAll() {
        return new ResponseEntity<>(formasPagoService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FormasPagoDTO> findById(@PathVariable int id) {
        return new ResponseEntity<>(formasPagoService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<FormasPagoDTO> save(@RequestBody FormasPagoDTO formasPagoDTO) {
        return new ResponseEntity<>(formasPagoService.save(formasPagoDTO), HttpStatus.CREATED);
    }
}