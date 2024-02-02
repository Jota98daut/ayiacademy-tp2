package ayiacademy.tp2.ejercicio2backend.services;

import ayiacademy.tp2.ejercicio2backend.persistence.entities.Producto;
import ayiacademy.tp2.ejercicio2backend.persistence.repositories.ProductosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ProductosServiceImpl implements ProductosService {
  @Autowired
  ProductosRepository productosRepository;

  @Override
  @Transactional(readOnly = true)
  public Iterable<Producto> getAll() {
    return productosRepository.findAll();
  }

  @Override
  @Transactional
  public void save(Producto producto) {
    productosRepository.save(producto);
  }

  @Override
  @Transactional(readOnly = true)
  public Optional<Producto> findById(int idProducto) {
    return productosRepository.findById(idProducto);
  }

  @Override
  @Transactional
  public void delete(int idProducto) {
    productosRepository.deleteById(idProducto);
  }

  @Override
  @Transactional(readOnly = true)
  public boolean exists(int idProducto) {
    return productosRepository.existsById(idProducto);
  }
}
