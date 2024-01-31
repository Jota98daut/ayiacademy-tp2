package ayiacademy.tp2.ejercicio1backend.controllers;

import ayiacademy.tp2.ejercicio1backend.persistence.entities.Empleado;
import ayiacademy.tp2.ejercicio1backend.services.EmpleadosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/empleados")
public class EmpleadosController {
    @Autowired
    EmpleadosService empleadosService;

    @GetMapping
    public Iterable<Empleado> getEmpleados() {
        return empleadosService.getAll();
    }
}
