package ayiacademy.tp2.ejercicio2backend.persistence.entities;

import jakarta.persistence.*;
import java.io.Serializable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "usuarios")
@NoArgsConstructor
@Data
public class Usuario implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  int idUsuario;

  String nombreUsuario;
  String passwordUsuario;

  private static final long serialVersionUID = 1L;
}
