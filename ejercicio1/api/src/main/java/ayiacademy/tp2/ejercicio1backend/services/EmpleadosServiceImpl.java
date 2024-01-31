package ayiacademy.tp2.ejercicio1backend.services;

import ayiacademy.tp2.ejercicio1backend.persistence.entities.Empleado;
import ayiacademy.tp2.ejercicio1backend.persistence.repositories.EmpleadosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class EmpleadosServiceImpl implements EmpleadosService {
    @Autowired
    EmpleadosRepository empleadosRepository;

    @Override
    @Transactional(readOnly = true)
    public Iterable<Empleado> getAll() {
        return empleadosRepository.findAll();
    }

    @Override
    @Transactional
    public void save(Empleado empleado) {
        empleadosRepository.save(empleado);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Empleado> findByLegajo(int legajo) {
        return empleadosRepository.findById(legajo);
    }

    @Override
    @Transactional
    public void delete(int legajo) {
        empleadosRepository.deleteById(legajo);
    }

    @Override
    @Transactional(readOnly = true)
    public boolean exists(int legajo) {
        return empleadosRepository.existsById(legajo);
    }
}
