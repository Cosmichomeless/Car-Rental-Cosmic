package com.cosmic.back.Service.Factory;

import com.cosmic.back.DTO.ClientesDTO;
import com.cosmic.back.Model.Clientes;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientesFactory {

    public Clientes createClientes(ClientesDTO clientesDTO) {
        return new Clientes(clientesDTO);
    }

    public ClientesDTO createClientesDTO(Clientes clientes) {
        return new ClientesDTO(clientes);
    }

    public List<ClientesDTO> createClientesDTOList(List<Clientes> clientesList) {
        List<ClientesDTO> clientesDTOList = new ArrayList<>();
        clientesList.stream().forEach(
                clientes -> clientesDTOList.add(createClientesDTO(clientes))
        );
        return clientesDTOList;
    }
}