package ayiacademy.tp2.ejercicio2backend.persistence.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Table(name = "productos")
@Data
@NoArgsConstructor
public class Producto implements Serializable {
  @Id
  int idProducto;

  String codigoEan;
  String nombreProducto;
  String descripcionProducto;
  String tipo;
  String marca;
  float precio;
  int stock;

  private static final long serialVersionUID = 1L;
}
