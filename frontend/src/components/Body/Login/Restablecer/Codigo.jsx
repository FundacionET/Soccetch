import React from "react";
import { Contenedor, ContForm, Close, Form, Logotipo, Contraseña, Correo, Enviar, Cancelar } from './styled2'
import {AiOutlineCloseCircle} from 'react-icons'
import logotipo from "../imagenes/logo.png"

const Codigo = () => {
    return ( 
    <div>
        <Contenedor>
            <ContForm style={{height:"380px"}}>
                <Close>
                    <AiOutlineCloseCircle style={{cursor:"pointer"}}/>
                </Close>
                <Form style={{height:"300px"}}>
                <Logotipo src= {logotipo}></Logotipo>
                <Contraseña> 
                    <h1>RESTABLECER CONTRASEÑA</h1>
                    <label style={{marginBottom:"20px"}}> Codigo</label>
                    <Correo type="email"></Correo>
                    <Enviar>ENVIAR</Enviar>
                    <Cancelar>CANCELAR</Cancelar>
                </Contraseña>
                </Form>
            </ContForm>
        </Contenedor>
    </div> 
)};

export default Codigo;
