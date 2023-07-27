import React, { useState } from "react";
import {
  BarraDesplegable,
  Fuente,
  Header1,
  Header2,
  HeaderPrincipal,
  Ingresar,
  Registrarse,
  LoginIngreso,
  LogoSocetech,
  Socetech,
  ContenedorBLT,
  ContLR,
  BarraIconos,
  CajaBusqueda,
  LoginBusqueda,
  Menu,
  Search,
  Lupa,
} from "./StyleHeader";
import * as imagenes from "../img";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { PiChartLineUpBold } from "react-icons/pi";
import { GiAerialSignal } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import Aside from "./Aside/Aside";

function HeaderP() {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
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
              <Fuente>SocceTech</Fuente>
            </Socetech>
          </ContenedorBLT>
          <ContLR>
            <LoginIngreso>
              <Ingresar>Ingresar</Ingresar>
              <Registrarse>Registrarse</Registrarse>
            </LoginIngreso>
          </ContLR>
        </Header1>
        <Header2>
          <BarraIconos>
            <Menu onClick={() => navigate("/Home")}>
              <AiOutlineHome size={35} />
              HOME
            </Menu>
            <Menu onClick={() => navigate("/data")}>
              <PiChartLineUpBold size={35} />
              DATOS
            </Menu>
            <Menu onClick={() => navigate("/live")}>
              <GiAerialSignal size={35} />
              EN VIVO
            </Menu>
            <Menu onClick={() => navigate("/favorites")}>
              <FaRegStar size={35} />
              FAVORITOS
            </Menu>
          </BarraIconos>
          <CajaBusqueda>
            <LoginBusqueda>
              <Search placeholder="Nueva Busqueda"></Search>
            </LoginBusqueda>
            <Lupa>
              <AiOutlineSearch />
            </Lupa>
          </CajaBusqueda>
        </Header2>
      </HeaderPrincipal>
    </div>
  );
}

export default HeaderP;
