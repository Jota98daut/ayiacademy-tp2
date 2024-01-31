package ayiacademy.tp2.ejercicio1backend.persistence.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

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
