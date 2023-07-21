import styled from 'styled-components'
/* import {Asidefondo} from '../../img/index' */

export const MenuContainer = styled.div`
    box-sizing: border-box;
    height: 94%;
    width: 25%;
    border: solid;
    padding: 0%;
    flex-wrap: wrap;
    background-size: cover;
    background: no-repeat;
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
    
`



export const MenuItem = styled.li`
    box-sizing: border-box;
    width: 100%;
    cursor: pointer;
    display: flex;
    border: 1px solid;
    padding-bottom: 9%;
    &:nth-child(1){
    padding-bottom: 6%;
    }
    `;