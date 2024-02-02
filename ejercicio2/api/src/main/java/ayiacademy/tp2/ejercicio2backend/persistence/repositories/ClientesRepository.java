package ayiacademy.tp2.ejercicio2backend.persistence.repositories;

import ayiacademy.tp2.ejercicio2backend.persistence.entities.Cliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientesRepository extends CrudRepository<Cliente, Integer> {}
