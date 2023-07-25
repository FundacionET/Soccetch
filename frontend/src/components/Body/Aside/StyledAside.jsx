import styled from 'styled-components'
import cielo from "../../img/cieloestrellado.jpg"
import Fondo from "../../img/BajoAside.png"


export const MenuContainer = styled.div`
    box-sizing: border-box;
    height: 94%;
    width: 25%;
    padding: 0%;
    flex-wrap: wrap;
    background-size: cover;
    background: no-repeat;
    `

export const MiniContainer = styled.div`
    width: 100%;
    height: 50%;
    background: no-repeat;
    background-image: url(${Fondo});
    background-size: contain;
    background-position: 0rem -3rem;
`

export const MenuList = styled.div`
box-sizing: border-box;
width: 100%;
    list-style-type: none;
    color: #fff;
    padding: 0%;
    margin: 0;
    display: flex;
    flex-direction: column;
    background-image: url(${cielo}); 
    
`;



export const MenuItem = styled.li`
    box-sizing: border-box;
    height: 7vh;
    width: 100%;
    cursor: pointer;
    display: flex;
    border: 1px solid;
    padding-left: 10px;
    &:nth-child(1){
    padding-bottom: 5%;
    }
    font-size: 30px;
    align-items: center;
    p{
        margin-left: 10px;
        font-size: 25px;
    }
`
