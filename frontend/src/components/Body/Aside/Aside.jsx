import React from 'react';
import {MenuContainer, MenuList, MenuItem } from "./StyledAside"

export const Aside = () => {
  return (
    <MenuContainer> 
    <MenuList>
        <MenuItem>Popular</MenuItem>
        <MenuItem>Destacado</MenuItem>
        <MenuItem>Comenzando pronto</MenuItem>
        <MenuItem>Resultado</MenuItem>
        <MenuItem>Centro de juagadores</MenuItem>
        <MenuItem>Pronostico</MenuItem>
        <MenuItem>Hist</MenuItem>
        <MenuItem>Sedes</MenuItem>
    </MenuList>
  </MenuContainer>
  )
}


export default Aside