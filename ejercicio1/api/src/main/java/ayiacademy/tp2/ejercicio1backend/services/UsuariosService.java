package ayiacademy.tp2.ejercicio1backend.services;

import ayiacademy.tp2.ejercicio1backend.persistence.entities.Usuario;

public interface UsuariosService {
    boolean validateUser(Usuario usuario);
}
