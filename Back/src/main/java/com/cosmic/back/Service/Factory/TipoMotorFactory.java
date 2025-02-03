package com.cosmic.back.Service.Factory;

import com.cosmic.back.DTO.TipoMotorDTO;
import com.cosmic.back.Model.TipoMotor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TipoMotorFactory {

    public TipoMotor createTipoMotor(TipoMotorDTO tipoMotorDTO) {
        return new TipoMotor(tipoMotorDTO);
    }

    public TipoMotorDTO createTipoMotorDTO(TipoMotor tipoMotor) {
        return new TipoMotorDTO(tipoMotor);
    }

    public List<TipoMotorDTO> createTipoMotorDTOList(List<TipoMotor> tipoMotorList) {
        List<TipoMotorDTO> tipoMotorDTOList = new ArrayList<>();
        tipoMotorList.stream().forEach(
                tipoMotor -> tipoMotorDTOList.add(createTipoMotorDTO(tipoMotor))
        );
        return tipoMotorDTOList;
    }
}