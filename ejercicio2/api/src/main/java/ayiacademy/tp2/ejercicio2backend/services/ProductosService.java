package ayiacademy.tp2.ejercicio2backend.services;

import ayiacademy.tp2.ejercicio2backend.persistence.entities.Producto;

import java.util.Optional;

public interface ProductosService {
  Iterable<Producto> getAll();

  void save(Producto producto);

  Optional<Producto> findById(int idProducto);

  void delete(int idProducto);

  boolean exists(int idProducto);
}
