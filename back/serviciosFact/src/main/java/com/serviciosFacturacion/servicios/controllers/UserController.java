package com.serviciosFacturacion.servicios.controllers;

import com.serviciosFacturacion.servicios.models.LoginRequest;
import com.serviciosFacturacion.servicios.models.UserModel;
import com.serviciosFacturacion.servicios.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController

@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public ArrayList<UserModel> getUsers(){
        return this.userService.getUsers();
    }

    @PostMapping
    public  UserModel saveUser(@RequestBody UserModel  user){
        //System.out.println(user.getId_tip_dni() + "234");
        //System.out.println(user.getId_establ_per() + "xxx");
        //System.out.println(user.getApell_usuario() + "234");
        return this.userService.saveUser(user);
    }


    @GetMapping(path = "/{id}")
    public Optional<UserModel> getUserById(@PathVariable("id") Long id_usuario ){
        return  this.userService.getById(id_usuario);
    }

    @PutMapping(path = "/{id}")
    public UserModel updateUserById(@RequestBody UserModel request,@PathVariable("id") Long id_usuario){
        return this.userService.updateById(request, id_usuario);

    }


    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable("id") Long id_usuario){
        boolean ok = this.userService.deleteUser(id_usuario);
        if (ok){
            return  "Iva with id " + id_usuario + " delete";
        }else{
            return "Error, we have a problem";

        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        // Obtener el usuario por su dirección de correo electrónico
        Optional<UserModel> optionalUser = userService.getUserByEmail(loginRequest.getEmail_usuario());

        if (optionalUser.isPresent()) {
            UserModel user = optionalUser.get();
            // Verificar la contraseña del usuario
            if (user.getContrasenia().equals(loginRequest.getContrasenia())) {
                // Autenticación exitosa
                return ResponseEntity.ok("Inicio de sesión exitoso");
            }
        }

        // Credenciales inválidas
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Correo electrónico o contraseña inválidos");
    }

}
