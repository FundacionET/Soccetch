import React, { useState } from "react";
import {
  BarraDesplegable,
  Header1,
  Header2,
  HeaderPrincipal,
  Ingresar,
  Registrarse,
  LoginIngreso,
  LogoSocetech,
  Socetech,
  ContenedorBLT,
  BarraIconos,
  Menu,
} from "./StyleHeader";
import * as imagenes from "../img";
/*  */
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { PiChartLineUpBold } from "react-icons/pi";
import { GiAerialSignal } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import Aside from "./Aside/Aside";

function HeaderP() {
  const [active, setActive] = useState("");
  return (
    <div>
      <HeaderPrincipal>
        <Header1>
          <ContenedorBLT>
            <BarraDesplegable>
              <AiOutlineMenu onClick={() => setActive(!active)} />
            </BarraDesplegable>
            <Aside active={active} />
            <LogoSocetech src={imagenes.HeaderLogo} alt="logo" />
            <Socetech>
              SocceTech
            </Socetech>
            <LoginIngreso>
              <Ingresar>Ingresar</Ingresar>
              <Registrarse>Registrarse</Registrarse>
            </LoginIngreso>
          </ContenedorBLT>
        </Header1>
        <Header2>
          <BarraIconos>
            <Menu>
              <AiOutlineHome size={30} />
              Home
            </Menu>
            <Menu>
              <PiChartLineUpBold size={30} />
              Datos
            </Menu>
            <Menu>
              <GiAerialSignal size={30} />
              En Vivo
            </Menu>
            <Menu>
              <FaRegStar size={30} />
              Favoritos
            </Menu>
          </BarraIconos>
        </Header2>
      </HeaderPrincipal>
    </div>
  );
}

export default HeaderP;
