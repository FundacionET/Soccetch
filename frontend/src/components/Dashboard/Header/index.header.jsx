import React, { Fragment } from 'react'
import { ContHeader,ContainerPerfilRol, ContainerProfileNameRol, ContainerSetting, Menu, Name, Perfil, Rol, Titulo } from './styled.header';
import { LogoSocetech } from '../../Header/StyleHeader';
import * as imagenes from '../../img'


const HeaderP = () => {
  return ( 
    <Fragment>
      <ContHeader>
        <Menu>
          
        </Menu>
        <LogoSocetech src={imagenes.HeaderLogo} alt='Logo'/>
        <Titulo>SocceTech</Titulo>
        <ContainerProfileNameRol>
          <Perfil></Perfil>
          <ContainerPerfilRol>
            <Name>Sergio Galvis</Name>
            <Rol>Administrador</Rol>
          </ContainerPerfilRol>
        </ContainerProfileNameRol>
        <ContainerSetting></ContainerSetting>
      </ContHeader>
    </Fragment>
  );
}

export default HeaderP;