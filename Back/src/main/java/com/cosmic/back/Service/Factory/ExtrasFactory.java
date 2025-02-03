package com.cosmic.back.Service.Factory;

import com.cosmic.back.DTO.ExtrasDTO;
import com.cosmic.back.Model.Extras;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExtrasFactory {

    public Extras createExtras(ExtrasDTO extrasDTO) {
        return new Extras(extrasDTO);
    }

    public ExtrasDTO createExtrasDTO(Extras extras) {
        return new ExtrasDTO(extras);
    }

    public List<ExtrasDTO> createExtrasDTOList(List<Extras> extrasList) {
        List<ExtrasDTO> extrasDTOList = new ArrayList<>();
        extrasList.stream().forEach(
                extras -> extrasDTOList.add(createExtrasDTO(extras))
        );
        return extrasDTOList;
    }
}