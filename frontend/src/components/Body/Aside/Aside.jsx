import React from 'react';
import {MenuContainer, MenuList, MenuItem, MiniContainer } from "./StyledAside"
import {GiTrophyCup, GiSandsOfTime} from "react-icons/gi"
import {VscGraph, VscGraphLine} from "react-icons/vsc"
import {FaRegFolder} from "react-icons/fa"

export const Aside = () => {
  return (
    <MenuContainer> 
    <MenuList>
        <MenuItem><p>Popular</p></MenuItem>
        <MenuItem><GiTrophyCup/> <p>Destacado</p></MenuItem>
        <MenuItem><GiSandsOfTime/><p>Comenzando pronto</p> 
        </MenuItem>
        <MenuItem><VscGraph/> <p>Resultado</p></MenuItem>
        <MenuItem><VscGraphLine/> <p>Pronostico</p></MenuItem>
        <MenuItem><FaRegFolder/> <p>Hist</p></MenuItem>
        
    </MenuList>
    <MiniContainer></MiniContainer>
  </MenuContainer>
  )
}


export default Aside