import React from "react";
import { Contenedor, Contraseña, Correo, Enviar } from "./styled2";
import logotipo from "../../../img/logo.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Close, ContForm, Form, Logotipo } from "../StyledLogin";

const Restablecer = () => {
  return (
    <Contenedor>
      <ContForm style={{ height: "380px" }}>
        <Close>
          <AiOutlineCloseCircle style={{ cursor: "pointer" }} />
        </Close>
        <Form style={{ height: "300px" }}>
          <Logotipo src={logotipo}></Logotipo>
          <Contraseña>
            <h1>RESTABLECER CONTRASEÑA</h1>
            <label> CORREO</label>
            <Correo type="email"></Correo>
            <Enviar>ENVIAR</Enviar>
            <Enviar>CANCELAR</Enviar>
          </Contraseña>
        </Form>
      </ContForm>
    </Contenedor>
  );
};
export default Restablecer;
