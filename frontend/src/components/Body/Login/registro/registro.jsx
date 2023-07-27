import React, { useState } from "react";
import {
  ContainerS,
  FormS,
  ContenedorFormularioS,
  InputS,
  InicioS,
  ContenedorLinkS,
  LogotipoS,
  InicioSS,
} from "./styled1";
import fondo from "../../../img/login.jpg";
import logotipo from "../../../img/logo.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Close, ContForm } from "../StyledLogin";
import Login from "../Login";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState("");
  const [campoAdicional, setcampoAdicional] = useState("");
  const [login, setLogin] = useState(false);
  const [registro, setRegistro] = useState(true);

  const registroP = () => {
    setLogin(true);
    setRegistro(false);
  };

  const handleForgotPassword = () => {
    setLogin(true);
    setRegistro(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Email: ${email}, Password: ${password}, Register: ${register}`
    );
    // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
  };

  return (
    <ContainerS>
      {registro && (
        <ContForm style={{ height: "540px" }}>
          <Close>
            <AiOutlineCloseCircle style={{ cursor: "pointer" }} />
          </Close>
          <FormS
            onSubmit={handleSubmit}
            style={{ background: `url(${fondo}) center/cover no-repeat` }}
          >
            <div>
              <ContenedorFormularioS>
                <LogotipoS src={logotipo} alt="Logotipo" />
                <InicioSS>REGÍSTRATE</InicioSS>
              </ContenedorFormularioS>
              <br />
              <label>Nombre De Usuario </label>
              <InputS
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Correo Electronico</label>
              <InputS
                type="email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <label>Contraseña</label>
                <div>
                  <InputS
                    type="password"
                    value={campoAdicional}
                    onChange={(e) => setcampoAdicional(e.target.value)}
                  ></InputS>
                  <label>Confirmar contraseña</label>
                </div>
                <InputS
                  type="text"
                  value={register}
                  onChange={(e) => setRegister(e.target.value)}
                ></InputS>
              </div>
            </div>

            <br></br>
            <ContenedorLinkS>
              <br />
              <InicioS onClick={handleForgotPassword}>Continuar</InicioS>
              <InicioS onClick={registroP}>cancelar</InicioS>
            </ContenedorLinkS>
          </FormS>
        </ContForm>
      )}
      {login && <Login></Login>}
    </ContainerS>
  );
};

export default Registro;
