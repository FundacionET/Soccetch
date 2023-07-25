import React from 'react';
import {MenuContainer, MenuList, MenuItem, MiniContainer } from "./StyledAside"
import {GiTrophyCup, GiSandsOfTime} from "react-icons/gi"

export const Aside = () => {
  return (
    <MenuContainer> 
    <MenuList>
        <MenuItem>Popular</MenuItem>
        <MenuItem><GiTrophyCup/>Destacado</MenuItem>
        <MenuItem><GiSandsOfTime/>Comenzando pronto</MenuItem>
        <MenuItem>Resultado</MenuItem>
        <MenuItem>Pronostico</MenuItem>
        <MenuItem>Hist</MenuItem>
        
    </MenuList>
    <MiniContainer></MiniContainer>
  </MenuContainer>
  )
}


export default Aside