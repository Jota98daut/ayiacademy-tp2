package ayiacademy.tp2.ejercicio1backend.services;

import ayiacademy.tp2.ejercicio1backend.persistence.entities.Usuario;
import ayiacademy.tp2.ejercicio1backend.persistence.repositories.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UsuariosServiceImpl implements UsuariosService {
    @Autowired
    UsuariosRepository usuariosRepository;

    @Override
    @Transactional
    public boolean validateUser(Usuario usuario) {
        return usuariosRepository.findAllByNombreUsuario(usuario.getNombreUsuario()).stream()
                .anyMatch(otherUsuario -> otherUsuario.getPasswordUsuario().equals(usuario.getPasswordUsuario()));
    }
}
