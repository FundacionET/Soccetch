import styled from "styled-components";

export const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Contraseña = styled.form`
    width: 300px;
    height: 300px;
    h1{
        font-size: 25px;
    }
`
export const ContenedorContraseña = styled.div`
    
`
export const Correo = styled.input`
    width: 300px;
    height: 30px;
    margin-top: 3px;
    margin-bottom: 10px;
    background-color: #ffffff87;
    border: 1px solid #23aad3;
    border-radius: 8px;
    outline: none;
`

export const Enviar = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    background: none;
    gap: 15px;
    &:hover {
        transition: 0.5s;
        background-color: #ffffff3b;
    }
`

export const Cancelar = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    background: none;
    gap: 15px;
    &:hover {
        transition: 2s;
        background-color: #ffffff3b;
    }
`