package ayiacademy.tp2.ejercicio1backend.services;

import ayiacademy.tp2.ejercicio1backend.persistence.entities.Empleado;

import java.util.Optional;

public interface EmpleadosService {
    Iterable<Empleado> getAll();

    void save(Empleado empleado);

    Optional<Empleado> findByLegajo(int legajo);

    void delete(int legajo);
}
