package com.serviciosFacturacion.servicios.repositories;

import com.serviciosFacturacion.servicios.models.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {

        //UsuarioModel findByNomb_usuarioAndContrasenia(String nomb_usuario, String contrasenia);


}
