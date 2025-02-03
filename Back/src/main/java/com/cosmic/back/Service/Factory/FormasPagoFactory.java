package com.cosmic.back.Service.Factory;

import com.cosmic.back.DTO.FormasPagoDTO;
import com.cosmic.back.Model.FormasPago;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FormasPagoFactory {

    public FormasPago createFormasPago(FormasPagoDTO formasDePagoDTO) {
        return new FormasPago(formasDePagoDTO);
    }

    public FormasPagoDTO createFormasPagoDTO(FormasPago formasDePago) {
        return new FormasPagoDTO(formasDePago);
    }

    public List<FormasPagoDTO> createFormasPagoDTOList(List<FormasPago> formasDePagoList) {
        List<FormasPagoDTO> formasPagoDTOList = new ArrayList<>();
        formasDePagoList.stream().forEach(
                formasPago -> formasPagoDTOList.add(createFormasPagoDTO(formasPago))
        );
        return formasPagoDTOList;
    }
}