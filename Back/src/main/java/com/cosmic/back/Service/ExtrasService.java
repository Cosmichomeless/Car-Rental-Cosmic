package com.cosmic.back.Service;

import com.cosmic.back.DTO.ExtrasDTO;
import com.cosmic.back.Model.Extras;
import com.cosmic.back.Repository.ExtrasRepository;
import com.cosmic.back.Service.Factory.ExtrasFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExtrasService {

    @Autowired
    private ExtrasRepository extrasRepository;

    @Autowired
    private ExtrasFactory extrasFactory;

    public List<ExtrasDTO> findAll() {
        List<Extras> extrasList = extrasRepository.findAll();
        return extrasFactory.createExtrasDTOList(extrasList);
    }

    public ExtrasDTO findById(int id) {
        Extras extras = extrasRepository.findById(id).orElse(null);
        return extrasFactory.createExtrasDTO(extras);
    }

    public ExtrasDTO save(ExtrasDTO extrasDTO) {
        Extras extras = extrasFactory.createExtras(extrasDTO);
        extras = extrasRepository.save(extras);
        return extrasFactory.createExtrasDTO(extras);
    }

    public ExtrasDTO update(ExtrasDTO extrasDTO) {
        Extras extras = extrasFactory.createExtras(extrasDTO);
        extras = extrasRepository.save(extras);
        return extrasFactory.createExtrasDTO(extras);
    }

    public void delete(int id) {
        extrasRepository.deleteById(id);
    }
}