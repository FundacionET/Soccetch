import React, { useState } from "react";
import { Container, Form, ContenedorFormulario, Input, Inicio, ContenedorLink, Link, Logotipo, Estilos, Inicio1, Close, ContForm } from "./StyledLogin";
import logotipo from "../../img/logo.png"
import Registro from "./registro/registro";
import Restablecer from "./Restablecer/restablecer";
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true)
  const [registro, setRegistro] = useState(false)
  const [restablecer, setRestablecer] = useState (false)

  
const registroP = () => {
  setLogin(false)
  setRegistro(true)
}
const restablecerco = () => {
  setRestablecer(true)
  setLogin(false)
}

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`Email: ${email}, Password: ${password}, Inicio: ${inicio}`);
    // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
  };

  const handleForgotPassword = () => {
    // Implementa aquí la lógica para manejar el enlace "¿Olvidaste tu contraseña?"
    // console.log("Se ha hecho clic en '¿Olvidaste tu contraseña?'");
  };

  return (
    <Container>
      {login && 
      <ContForm>
        <Close>
            <AiOutlineCloseCircle style={{cursor:"pointer"}}/>
        </Close>
        <Form onSubmit={handleSubmit}>
          <div>
            <ContenedorFormulario>
              <Logotipo src= {logotipo}></Logotipo>
              <Inicio1>Iniciar sesión</Inicio1>
            </ContenedorFormulario>
            <br/> 
            
            <label>Email</label>

            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br/>
          <div>
            <label>Introduzca la contraseña</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br/>
          <Inicio onClick={handleForgotPassword}>Iniciar Sesión</Inicio>
          <br></br>
          <ContenedorLink>
          <br></br>
            <Link>
              <Estilos onClick={restablecerco}>Restablecer contraseña</Estilos>
            </Link>
            <Link>
              <Estilos onClick={registroP}>Crear cuenta</Estilos>
            </Link>
          </ContenedorLink>  
      </Form>
    </ContForm>
      }
      
      {restablecer && <Restablecer></Restablecer>}
      {registro && <Registro></Registro>}
    </Container>

  );
};

export default Login;

