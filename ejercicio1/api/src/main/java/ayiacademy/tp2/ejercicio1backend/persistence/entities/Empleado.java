package ayiacademy.tp2.ejercicio1backend.persistence.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Table(name = "empleados")
@Data
@NoArgsConstructor
public class Empleado implements Serializable {
    @Id
    int legajo;
    String nombreEmpleado;
    String apellidoEmpleado;
    String cargo;
    String sucursal;
    int antiguedadAnios;

    private static final long serialVersionUID = 1L;
}
