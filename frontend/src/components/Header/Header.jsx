import React from "react";
import { BarraDesplegable, Fuente, Header1, Header2, HeaderPrincipal, Ingresar, Registrarse, LoginIngreso, LogoSocetech, Socetech, ContenedorBLT, ContLR, BarraIconos, CajaBusqueda, LoginBusqueda, Menu, Search, Lupa } from "./StyleHeader";
import * as imagenes from '../img'
/*  */
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"
import {PiChartLineUpBold} from "react-icons/pi"
import {GiAerialSignal} from "react-icons/gi"
import {FaRegStar} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"


function HeaderP(){
  return (
    <div>
      <HeaderPrincipal>
        <Header1>
          <ContenedorBLT>
            <BarraDesplegable><AiOutlineMenu/></BarraDesplegable>
            <LogoSocetech src={imagenes.HeaderLogo} alt="logo"/>
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
            <Menu>
            <AiOutlineHome size={35}/>HOME
            </Menu>
            <Menu>
              <PiChartLineUpBold size={35}/>DATOS
            </Menu>
            <Menu>
              <GiAerialSignal size={35}/>EN VIVO
            </Menu>
            <Menu>
              <FaRegStar size={35}/>FAVORITOS
            </Menu>
              </BarraIconos>
          <CajaBusqueda>
            <LoginBusqueda>
              <Search placeholder="Nueva Busqueda"></Search>
            </LoginBusqueda>
            <Lupa>
                <AiOutlineSearch/>
              </Lupa>
          </CajaBusqueda>
        </Header2>
      </HeaderPrincipal>
    </div>
  )
}

export default HeaderP