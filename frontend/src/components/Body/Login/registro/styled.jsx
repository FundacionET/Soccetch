import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Form = styled.form`
    width: 550px;
    height: 500px;
    padding: 30px;
    border: 1px solid black;
    background-color: transparent;
    color: #ffffff;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 20px;
    box-shadow: 0 0 50px black;
`;

export const ContenedorFormulario = styled.div`
    width: 550px;
    height: 60px;
    border-bottom: 1px solid #23aad3;   
    display: flex;
    /* align-items: center; */
`;

export const Input = styled.input`
    width: 530px;
    height: 35px;
    margin-bottom: 10px;
    background-color: #ffffff87;
    border: 1px solid #23aad3;
    outline: none;
`;

export const InicioS = styled.h1`
    /* text-align: center; */
    display: flex;
    align-items: center;
    `;

export const Inicio = styled.button`
    width: 150px;
    height: 500px;
    padding: 15px;
    background-color: #fdfafa8a;
    border: none;
    cursor: pointer;
    color: #06415e;
    font-weight: bolder;
    &:hover {
        transition: 2s;
        background-color: #ffffff3b;
    }
`;

export const ContenedorLink = styled.div`
    width: 550px;
    height: 60px;
    border-top: 1px solid #23aad3;
    
`;

export const Link = styled.nav`
    display: flex;
    justify-content: center;
    `;

export const Logotipo = styled.img`
    width: 80px;
    height: 60px;
    margin-right: 20px;
    `;

export const Estilos = styled.a`
    color: white;
`;


