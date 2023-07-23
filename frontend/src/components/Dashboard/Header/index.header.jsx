import React, { Fragment } from 'react'
import { ContHeader, Titulo } from './styled.header';
import { LogoSocetech } from '../../Header/StyleHeader';
import * as imagenes from '../../img'


const HeaderP = () => {
  return ( 
    <Fragment>
      <ContHeader>
        <LogoSocetech src={imagenes.HeaderLogo} alt='Logo'/>
        <Titulo>SocceTech</Titulo>
      </ContHeader>
    </Fragment>
  );
}

export default HeaderP;