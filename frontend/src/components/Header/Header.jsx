import React from "react";
import { BarraDesplegable, Fuente, Header1, Header2, HeaderPrincipal, Ingresar, Registrarse, LoginIngreso, LogoSocetech, Socetech, ContenedorBLT, ContLR, BarraIconos, CajaBusqueda, LoginBusqueda, Menu, Lupa } from "./StyleHeader";
import logo from './img/logo.png'
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
            <LogoSocetech src={logo}/>
            <Socetech>
              <Fuente>SoceTech</Fuente>
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
              <input placeholder="Nueva Busqueda" style={{"height":"25px", "width":"150px"}}></input>
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