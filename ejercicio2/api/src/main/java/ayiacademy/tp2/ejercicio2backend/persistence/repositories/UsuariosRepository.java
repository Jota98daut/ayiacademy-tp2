package ayiacademy.tp2.ejercicio2backend.persistence.repositories;

import ayiacademy.tp2.ejercicio2backend.persistence.entities.Usuario;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuariosRepository extends CrudRepository<Usuario, Integer> {
  List<Usuario> findAllByNombreUsuario(String nombreUsuario);
}
