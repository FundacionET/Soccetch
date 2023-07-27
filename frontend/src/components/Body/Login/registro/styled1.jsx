import styled from "styled-components";


export const ContainerS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const FormS = styled.form`
    width: 300px;
    height: 450px;
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

export const ContenedorFormularioS = styled.div`
    width: 300px;
    height: 60px;
    border-bottom: 1px solid #23aad3;
    display: flex;
    border-radius: 8px;
    /* align-items: center; */
`;

export const InputS = styled.input`
    width: 300px;
    height: 30px;
    margin-bottom: 10px;
    background-color: #ffffff87;
    border: 1px solid #23aad3;
    border-radius: 8px;
    outline: none;
`;

export const InicioSS = styled.h1`
    /* text-align: center; */
    display: flex;
    align-items: center;
    `;

export const InicioS = styled.button`
    width: 250px;
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
`;

export const ContenedorLinkS = styled.div`
    width: 300px;
    height: 100px;
    border-top: 1px solid #23aad3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LinkS = styled.nav`
    display: flex;
    justify-content: center;
    `;

export const LogotipoS = styled.img`
    width: 80px;
    height: 60px;
    margin-right: 20px;
    `;



