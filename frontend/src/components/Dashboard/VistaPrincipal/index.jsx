import React, { Fragment } from 'react'
import HeaderP from '../Header/index.header';
import { ContainerHeader, ContainerMain } from './styled';
import MenuDeplegable from '../Header/Menu/index.menu';

const Principal = () => {
  return ( 
    <Fragment>
      <ContainerMain>
        <MenuDeplegable/>
        <ContainerHeader>
        
          <HeaderP/>
        </ContainerHeader>
      </ContainerMain>
      
      
    </Fragment>
  );
}

export default Principal;