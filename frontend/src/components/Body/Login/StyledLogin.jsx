import styled from "styled-components";
import { fondo } from "../../img";

export const Container = styled.div`
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    
`;

export const ContForm = styled.div`
    height: 485px;
    width: 420px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

export const Form = styled.form`
    width: 300px;
    height: 400px;
    padding: 30px;
    background-image: url(${fondo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid black;
    background-color: #ffffff;
    color: #ffffff;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 0 0 50px black;
`;

export const Close = styled.div`
    height:auto;
    width: 100%;
    display: flex;
    justify-content: end;
    font-size: 30px;
`

export const ContenedorFormulario = styled.div`
    width: 300px;
    height: 60px;
    /* text-decoration : underline; */
    border-bottom: 1px solid #23aad3;
    display: flex;
`

export const Input = styled.input`
    width: 300px;
    height: 30px;
    outline: none;
    margin-bottom: 10px;
    background-color: #ffffff87;
    border:1px solid #03c2fc;
    border-radius: 8px;
`;

export const Inicio1 = styled.h1`
    text-align: center;
    display: flex;
    align-items: center;
    padding-bottom: 17px;

`

export const Inicio = styled.button`
    width: 300px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #0000008b;
    border: none; //elimina el borde
    text-decoration: none;
    cursor: pointer;
    color: #e4e9eb;
    font-weight: bolder;
    &:hover{
        transition: 0.5s;
        background-color: #ffffff3b;
    }
`

export const ContenedorLink = styled.div`
    width: 300px;
    height: 60px;
    border-top: 1px solid #23aad3;
`;

export const Link = styled.nav`
    display: flex;
    justify-content: center;
`
export const Logotipo = styled.img`
    width: 80px;
    height: 60px;
    margin-right: 20px;
    display: flex;
    align-items: start;
    justify-content: initial;
`
export const Estilos = styled.button`
    color: white;
    width: 200px;
    height: 30px;
    background: none;
    margin-bottom: 6px;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #ffffff3b;
        transition: 0.5s;
    }
`

