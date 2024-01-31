package ayiacademy.tp2.ejercicio1backend.controllers;

import ayiacademy.tp2.ejercicio1backend.persistence.entities.Usuario;
import ayiacademy.tp2.ejercicio1backend.services.UsuariosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @Autowired
    UsuariosService usuariosService;

    @PostMapping("/login")
    public ResponseEntity<String> postLogin(@RequestBody Usuario usuario) {
        if (usuariosService.validateUser(usuario)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
