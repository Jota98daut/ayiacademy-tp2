package ayiacademy.tp2.ejercicio2backend.controllers;

import ayiacademy.tp2.ejercicio2backend.persistence.entities.Cliente;
import ayiacademy.tp2.ejercicio2backend.services.ClientesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/clientes")
public class ClientesController {
  @Autowired
  ClientesService clientesService;

  @GetMapping("/{idCliente}")
  public ResponseEntity<Cliente> getCliente(@PathVariable int idCliente) {
    var cliente = clientesService.findById(idCliente);
    if (cliente.isPresent())
      return new ResponseEntity<>(cliente.get(), HttpStatus.OK);

    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @GetMapping
  public Iterable<Cliente> getClientes() {
    return clientesService.getAll();
  }

  @PostMapping
  public ResponseEntity<String> postNuevoCliente(@RequestBody Cliente cliente) {
    if (clientesService.exists(cliente.getIdCliente()))
      return new ResponseEntity<>("PLU en uso", HttpStatus.CONFLICT);

    clientesService.save(cliente);
    return new ResponseEntity<>("Cliente creado", HttpStatus.OK);
  }

  @PutMapping
  public ResponseEntity<String> putUpdateCliente(@RequestBody Cliente cliente) {
    if (!clientesService.exists(cliente.getIdCliente()))
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    clientesService.save(cliente);
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @DeleteMapping("/{idCliente}")
  public ResponseEntity<Cliente> deleteCliente(@PathVariable int idCliente) {
    if (!clientesService.exists(idCliente))
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    clientesService.delete(idCliente);
    return new ResponseEntity<>(HttpStatus.OK);
  }
}
