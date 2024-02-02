package ayiacademy.tp2.ejercicio2backend.services;


import ayiacademy.tp2.ejercicio2backend.persistence.entities.Cliente;

import java.util.Optional;

public interface ClientesService {
  Iterable<Cliente> getAll();

  void save(Cliente cliente);

  Optional<Cliente> findById(int idCliente);

  void delete(int idCliente);

  boolean exists(int idCliente);
}
