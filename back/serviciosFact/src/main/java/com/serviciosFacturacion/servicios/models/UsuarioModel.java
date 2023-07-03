package com.serviciosFacturacion.servicios.models;

import javax.persistence.*;

@Entity
@Table(name = "usuarios")
public class UsuarioModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_usuario;

    @Column
    private Long id_tip_dni;

    @Column
    private String num_ident;

    @Column
    private String nomb_usuario;

    @Column
    private String apell_usuario;

    @Column
    private String email_usuario;

    @Column
    private String telef_usuario;

    @Column
    private String direc_usuario;

    @Column
    private byte estado_usuario;

    @Column
    private byte tip_usuario;

    @Column
    private String contrasenia;

    @Column
    private Long foto;

    public Long getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Long id_usuario) {
        this.id_usuario = id_usuario;
    }

    public Long getId_tip_dni() {
        return id_tip_dni;
    }

    public void setId_tip_dni(Long id_tip_dni) {
        this.id_tip_dni = id_tip_dni;
    }

    public String getNum_ident() {
        return num_ident;
    }

    public void setNum_ident(String num_ident) {
        this.num_ident = num_ident;
    }

    public String getNomb_usuario() {
        return nomb_usuario;
    }

    public void setNomb_usuario(String nomb_usuario) {
        this.nomb_usuario = nomb_usuario;
    }

    public String getApell_usuario() {
        return apell_usuario;
    }

    public void setApell_usuario(String apell_usuario) {
        this.apell_usuario = apell_usuario;
    }

    public String getEmail_usuario() {
        return email_usuario;
    }

    public void setEmail_usuario(String email_usuario) {
        this.email_usuario = email_usuario;
    }

    public String getTelef_usuario() {
        return telef_usuario;
    }

    public void setTelef_usuario(String telef_usuario) {
        this.telef_usuario = telef_usuario;
    }

    public String getDirec_usuario() {
        return direc_usuario;
    }

    public void setDirec_usuario(String direc_usuario) {
        this.direc_usuario = direc_usuario;
    }

    public byte getEstado_usuario() {
        return estado_usuario;
    }

    public void setEstado_usuario(byte estado_usuario) {
        this.estado_usuario = estado_usuario;
    }

    public byte getTip_usuario() {
        return tip_usuario;
    }

    public void setTip_usuario(byte tip_usuario) {
        this.tip_usuario = tip_usuario;
    }

    public String getContrasenia() {
        return contrasenia;
    }

    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }

    public Long getFoto() {
        return foto;
    }

    public void setFoto(Long foto) {
        this.foto = foto;
    }
}
