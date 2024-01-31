package ayiacademy.tp2.ejercicio1backend.persistence.repositories;

import ayiacademy.tp2.ejercicio1backend.persistence.entities.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuariosRepository extends CrudRepository<Usuario, Integer> {
    List<Usuario> findAllByNombreUsuario(String nombreUsuario);
}
