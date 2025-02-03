package com.cosmic.back.Service;

import com.cosmic.back.DTO.ClientesDTO;
import com.cosmic.back.Model.Clientes;
import com.cosmic.back.Repository.ClientesRepository;
import com.cosmic.back.Service.Factory.ClientesFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientesService {

    @Autowired
    private ClientesRepository clientesRepository;

    @Autowired
    private ClientesFactory clientesFactory;

    public List<ClientesDTO> findAll() {
        List<Clientes> clientesList = clientesRepository.findAll();
        return clientesFactory.createClientesDTOList(clientesList);
    }

    public ClientesDTO findById(int id) {
        Clientes clientes = clientesRepository.findById(id).orElse(null);
        return clientesFactory.createClientesDTO(clientes);
    }

    public ClientesDTO save(ClientesDTO clientesDTO) {
        Clientes clientes = clientesFactory.createClientes(clientesDTO);
        clientes = clientesRepository.save(clientes);
        return clientesFactory.createClientesDTO(clientes);
    }

    public ClientesDTO update(ClientesDTO clientesDTO) {
        Clientes clientes = clientesFactory.createClientes(clientesDTO);
        clientes = clientesRepository.save(clientes);
        return clientesFactory.createClientesDTO(clientes);
    }

    public void delete(int id) {
        clientesRepository.deleteById(id);
    }
}