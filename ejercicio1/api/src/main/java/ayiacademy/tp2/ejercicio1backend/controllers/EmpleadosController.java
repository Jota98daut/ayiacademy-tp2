package ayiacademy.tp2.ejercicio1backend.controllers;

import ayiacademy.tp2.ejercicio1backend.persistence.entities.Empleado;
import ayiacademy.tp2.ejercicio1backend.services.EmpleadosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/empleados")
public class EmpleadosController {
    @Autowired
    EmpleadosService empleadosService;

    @GetMapping("/{legajo}")
    public ResponseEntity<Empleado> getEmpleado(@PathVariable int legajo) {
        var empleado = empleadosService.findByLegajo(legajo);
        if (empleado.isPresent())
            return new ResponseEntity<>(empleado.get(), HttpStatus.OK);

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public Iterable<Empleado> getEmpleados() {
        return empleadosService.getAll();
    }

    @PostMapping
    public ResponseEntity<String> postNuevoEmpleado(@RequestBody Empleado empleado) {
        if (empleadosService.exists(empleado.getLegajo()))
            return new ResponseEntity<>("Legajo en uso", HttpStatus.CONFLICT);

        empleadosService.save(empleado);
        return new ResponseEntity<>("Empleado creado", HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<String> putUpdateEmpleado(@RequestBody Empleado empleado) {
        if (!empleadosService.exists(empleado.getLegajo()))
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        empleadosService.save(empleado);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{legajo}")
    public ResponseEntity<Empleado> deleteEmpleado(@PathVariable int legajo) {
        if (!empleadosService.exists(legajo))
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        empleadosService.delete(legajo);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
