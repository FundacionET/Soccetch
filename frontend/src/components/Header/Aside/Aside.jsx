import React from 'react';
import {MenuContainer, MenuList, MenuItem, MiniContainer } from "./StyledAside"
import {GiTrophyCup, GiSandsOfTime} from "react-icons/gi"
import {IoStatsChartSharp} from "react-icons/io5"
import {RiTimeLine} from "react-icons/ri"
import {BsCalendarWeek} from "react-icons/bs"
import Fondo from "../../img/BajoAside.png";
import { useNavigate } from 'react-router-dom';


export const Aside = ({active}) => {

  const navigate = useNavigate();
  return (
    <MenuContainer active = {active} style={active ? {left:"0"} : {left:"-25%"}}> 
    <MenuList>
        <MenuItem>Popular</MenuItem>
        <MenuItem onClick={() => navigate("/featured")}><GiTrophyCup/><span>Destacado</span></MenuItem>
        <MenuItem onClick={() => navigate("/commingSoon")}><GiSandsOfTime/><span>Comenzando pronto</span></MenuItem>
        <MenuItem onClick={() => navigate("/results")}><IoStatsChartSharp/><span>Resultado</span></MenuItem>
        <MenuItem onClick={() => navigate("/forecast")}><BsCalendarWeek/><span>Pronóstico</span></MenuItem>
        <MenuItem onClick={() => navigate("/history")}><RiTimeLine/><span>Histórico</span></MenuItem>
        
    </MenuList>
    <MiniContainer src={Fondo}/>
  </MenuContainer>
  )
}


export default Aside