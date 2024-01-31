package ayiacademy.tp2.ejercicio1backend.persistence.repositories;

import ayiacademy.tp2.ejercicio1backend.persistence.entities.Empleado;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadosRepository extends CrudRepository<Empleado, Integer> {}
