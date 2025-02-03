package com.cosmic.back.Service;

import com.cosmic.back.DTO.FormasPagoDTO;
import com.cosmic.back.Model.FormasPago;
import com.cosmic.back.Repository.FormasPagoRepository;
import com.cosmic.back.Service.Factory.FormasPagoFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormaPagoService {

    @Autowired
    private FormasPagoRepository formaPagoRepository;

    @Autowired
    private FormasPagoFactory formaPagoFactory;

    public List<FormasPagoDTO> findAll() {
        List<FormasPago> formaPagoList = formaPagoRepository.findAll();
        return formaPagoFactory.createFormasPagoDTOList(formaPagoList);
    }

    public FormasPagoDTO findById(int id) {
        FormasPago formaPago = formaPagoRepository.findById(id).orElse(null);
        return formaPagoFactory.createFormasPagoDTO(formaPago);
    }

    public FormasPagoDTO save(FormasPagoDTO formaPagoDTO) {
        FormasPago formaPago = formaPagoFactory.createFormasPago(formaPagoDTO);
        formaPago = formaPagoRepository.save(formaPago);
        return formaPagoFactory.createFormasPagoDTO(formaPago);
    }

    public FormasPagoDTO update(FormasPagoDTO formaPagoDTO) {
        FormasPago formaPago = formaPagoFactory.createFormasPago(formaPagoDTO);
        formaPago = formaPagoRepository.save(formaPago);
        return formaPagoFactory.createFormasPagoDTO(formaPago);
    }

    public void delete(int id) {
        formaPagoRepository.deleteById(id);
    }
}