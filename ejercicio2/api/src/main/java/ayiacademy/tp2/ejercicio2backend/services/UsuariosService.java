package ayiacademy.tp2.ejercicio2backend.services;

import ayiacademy.tp2.ejercicio2backend.persistence.entities.Usuario;

public interface UsuariosService {
  boolean validateUser(Usuario usuario);
}
