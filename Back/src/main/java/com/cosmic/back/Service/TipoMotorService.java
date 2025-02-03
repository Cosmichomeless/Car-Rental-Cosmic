package com.cosmic.back.Service;

import com.cosmic.back.DTO.TipoMotorDTO;
import com.cosmic.back.Model.TipoMotor;
import com.cosmic.back.Repository.TipoMotorRepository;
import com.cosmic.back.Service.Factory.TipoMotorFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TipoMotorService {

    @Autowired
    private TipoMotorRepository tipoMotorRepository;

    @Autowired
    private TipoMotorFactory tipoMotorFactory;

    public List<TipoMotorDTO> findAll() {
        List<TipoMotor> tipoMotorList = tipoMotorRepository.findAll();
        return tipoMotorFactory.createTipoMotorDTOList(tipoMotorList);
    }

    public TipoMotorDTO findById(int id) {
        TipoMotor tipoMotor = tipoMotorRepository.findById(id).orElse(null);
        return tipoMotorFactory.createTipoMotorDTO(tipoMotor);
    }

    public TipoMotorDTO save(TipoMotorDTO tipoMotorDTO) {
        TipoMotor tipoMotor = tipoMotorFactory.createTipoMotor(tipoMotorDTO);
        tipoMotor = tipoMotorRepository.save(tipoMotor);
        return tipoMotorFactory.createTipoMotorDTO(tipoMotor);
    }

    public TipoMotorDTO update(TipoMotorDTO tipoMotorDTO) {
        TipoMotor tipoMotor = tipoMotorFactory.createTipoMotor(tipoMotorDTO);
        tipoMotor = tipoMotorRepository.save(tipoMotor);
        return tipoMotorFactory.createTipoMotorDTO(tipoMotor);
    }

    public void delete(int id) {
        tipoMotorRepository.deleteById(id);
    }
}