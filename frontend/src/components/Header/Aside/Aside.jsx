import React from 'react';
import {MenuContainer, MenuList, MenuItem, MiniContainer } from "./StyledAside"
import {GiTrophyCup, GiSandsOfTime} from "react-icons/gi"
import {IoStatsChartSharp} from "react-icons/io5"
import {RiTimeLine} from "react-icons/ri"
import {BsCalendarWeek} from "react-icons/bs"
import Fondo from "../../img/BajoAside.png";
export const Aside = ({active}) => {
  return (
    <MenuContainer active = {active} style={active ? {left:"0"} : {left:"-25%"}}> 
    <MenuList>
        <MenuItem>Popular</MenuItem>
        <MenuItem><GiTrophyCup/>Destacado</MenuItem>
        <MenuItem><GiSandsOfTime/>Comenzando pronto</MenuItem>
        <MenuItem><IoStatsChartSharp/>Resultado</MenuItem>
        <MenuItem><BsCalendarWeek/>Pronóstico</MenuItem>
        <MenuItem><RiTimeLine/>Hist</MenuItem>
        
    </MenuList>
    <MiniContainer src={Fondo}/>
  </MenuContainer>
  )
}


export default Aside