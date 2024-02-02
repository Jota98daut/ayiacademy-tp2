package ayiacademy.tp2.ejercicio2backend.controllers;

import ayiacademy.tp2.ejercicio2backend.persistence.entities.Producto;
import ayiacademy.tp2.ejercicio2backend.services.ProductosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/productos")
public class ProductosController {
  @Autowired
  ProductosService productosService;

  @GetMapping("/{idProducto}")
  public ResponseEntity<Producto> getProducto(@PathVariable int idProducto) {
    var producto = productosService.findById(idProducto);
    if (producto.isPresent())
      return new ResponseEntity<>(producto.get(), HttpStatus.OK);

    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @GetMapping
  public Iterable<Producto> getProductos() {
    return productosService.getAll();
  }

  @PostMapping
  public ResponseEntity<String> postNuevoProducto(@RequestBody Producto producto) {
    if (productosService.exists(producto.getIdProducto()))
      return new ResponseEntity<>("PLU en uso", HttpStatus.CONFLICT);

    productosService.save(producto);
    return new ResponseEntity<>("Producto creado", HttpStatus.OK);
  }

  @PutMapping
  public ResponseEntity<String> putUpdateProducto(@RequestBody Producto producto) {
    if (!productosService.exists(producto.getIdProducto()))
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    productosService.save(producto);
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @DeleteMapping("/{idProducto}")
  public ResponseEntity<Producto> deleteProducto(@PathVariable int idProducto) {
    if (!productosService.exists(idProducto))
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    productosService.delete(idProducto);
    return new ResponseEntity<>(HttpStatus.OK);
  }
}
