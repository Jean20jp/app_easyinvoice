package com.serviciosFacturacion.servicios.controllers;

import com.serviciosFacturacion.servicios.dto.LoginParamsDTO;
import com.serviciosFacturacion.servicios.models.UsuarioModel;
import com.serviciosFacturacion.servicios.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    // Obtener todos los usuarios
    @GetMapping
    public List<UsuarioModel> obtenerUsuarios() {
        return usuarioRepository.findAll();
    }

    // Obtener un usuario por su ID
    @GetMapping("/{id}")
    public ResponseEntity<UsuarioModel> obtenerUsuarioPorId(@PathVariable("id") Long id) {
        UsuarioModel usuario = usuarioRepository.findById(id).orElse(null);
        if (usuario != null) {
            return ResponseEntity.ok(usuario);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Crear un nuevo usuario
    @PostMapping
    public ResponseEntity<UsuarioModel> crearUsuario(@RequestBody UsuarioModel usuario) {
        UsuarioModel nuevoUsuario = usuarioRepository.save(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoUsuario);
    }

    // Actualizar un usuario existente
    @PutMapping("/{id}")
    public ResponseEntity<UsuarioModel> actualizarUsuario(@PathVariable("id") Long id, @RequestBody UsuarioModel usuarioActualizado) {
        UsuarioModel usuario = usuarioRepository.findById(id).orElse(null);
        if (usuario != null) {
            usuario.setNomb_usuario(usuarioActualizado.getNomb_usuario());
            usuario.setApell_usuario(usuarioActualizado.getApell_usuario());
            usuario.setEmail_usuario(usuarioActualizado.getEmail_usuario());
            usuario.setTip_usuario(usuarioActualizado.getTip_usuario());
            // Actualizar otros campos según sea necesario

            UsuarioModel usuarioActualizadoDB = usuarioRepository.save(usuario);
            return ResponseEntity.ok(usuarioActualizadoDB);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Eliminar un usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable("id") Long id) {
        usuarioRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Inicio de sesión
    /*@PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String nombUsuario, @RequestParam String contrasenia) {
        UsuarioModel usuario = usuarioRepository.findByNomb_usuarioAndContrasenia(nombUsuario, contrasenia);
        if (usuario != null) {
            if (usuario.getTip_usuario() == 1) {
                return ResponseEntity.ok("Inicio de sesión exitoso para usuario tipo ADMIN");
            } else if (usuario.getTip_usuario() == 0) {
                return ResponseEntity.ok("Inicio de sesión exitoso para usuario tipo VENDEDOR");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
        }
    }*/

    /*@PostMapping("/login")
    public ResponseEntity<UsuarioModel> login(@RequestBody LoginParamsDTO loginParams) {
        String nomb_usuario = loginParams.getUsername();
        String contrasenia = loginParams.getPassword();

        UsuarioModel usuario = usuarioRepository.findByNomb_usuarioAndContrasenia(nomb_usuario, contrasenia);
        if (usuario != null) {
            return ResponseEntity.ok(usuario);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }*/
}
