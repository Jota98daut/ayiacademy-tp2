package ayiacademy.tp2.ejercicio2backend.persistence.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Table(name = "clientes")
@Data
@NoArgsConstructor
public class Cliente implements Serializable {
  @Id
  int idCliente;

  String nombre;
  String apellido;
  String fechaIngreso;
  String domicilio;
  String telefono;

  private static final long serialVersionUID = 1L;
}
