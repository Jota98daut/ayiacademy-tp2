package ayiacademy.tp2.ejercicio2backend.services;

import ayiacademy.tp2.ejercicio2backend.persistence.entities.Cliente;
import ayiacademy.tp2.ejercicio2backend.persistence.repositories.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ClientesServiceImpl implements ClientesService {
  @Autowired
  ClientesRepository clientesRepository;

  @Override
  @Transactional(readOnly = true)
  public Iterable<Cliente> getAll() {
    return clientesRepository.findAll();
  }

  @Override
  @Transactional
  public void save(Cliente cliente) {
    clientesRepository.save(cliente);
  }

  @Override
  @Transactional(readOnly = true)
  public Optional<Cliente> findById(int idCliente) {
    return clientesRepository.findById(idCliente);
  }

  @Override
  @Transactional
  public void delete(int idCliente) {
    clientesRepository.deleteById(idCliente);
  }

  @Override
  @Transactional(readOnly = true)
  public boolean exists(int idCliente) {
    return clientesRepository.existsById(idCliente);
  }
}
