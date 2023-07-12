import styled from 'styled-components'

/* Este es el header HeaderPrincipal, el que contiene header1 y header 2 */
export const HeaderPrincipal = styled.header`
    width: 100%;
    height: 100%;
    background-color: #1B4F72;
    /* border: solid black 0.125rem; */
`

/* Este es el header que tiene el logo de socotech t el login*/
export const Header1 = styled.header`
    height: 4.875rem;
    width: 100%;
    /* border: solid white 0.125rem; */
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

/* Este es donde esta la barra de navegacion */
export const Header2 = styled.header`
    height: 6.25rem;
    width: 100%;
    /* border: solid red 0.125rem; */
    display: flex;
    justify-content: center;
`
/* ESTE CAJA CONTIENE TANTO LA BARRA DE NAV, LOGO Y SOCETECH */
export const ContenedorBLT = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #000000;
`

/* Aqui es donde se despliega la barra inferior izquierda */
export const BarraDesplegable = styled.button`
    width: 7.75rem;
    height: 0%;
    border: none;
    background-color: #000000;
    font-size: 2.980rem;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-top: 1.063rem;
    /* border: solid white 2px; */
`

/* Aqui es donde va el logo del proyecto */
export const LogoSocetech = styled.img`
    width: 8rem;
    height: 4.875rem;
    /* border: solid white 2px; */
    background-color: black;
`

/* Aqui va el nombre de la pgina SOCETECH */
export const Socetech = styled.div`
    width: 29.5rem;
    height: 3.125rem;
    /* border: solid white 2px; */
    background-color: #000000;
    justify-content: center;
    align-items:center ;
    display: flex;
    color: white;
    font-size: 4.5rem;
`

/* Este es la fuente de SOCETECH */
export const Fuente = styled.header`
font-family: 'Faster One', cursive;

`

/* AQUI VA LA CAJA QUE CONTIENE TANTO EL LOGIN COMO EL INGRESAR Y REGISTRARSE */
export const ContLR = styled.div`
    width: 43.75rem;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    /* border: solid white 2px; */
`

/* CAJA DE INGRESAR Y REGISTRARSE */
export const LoginIngreso = styled.div`
    width: 21.875rem;
    height: 100%;
    /* border: solid white 2px; */
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    background-color: black;
`

/* CAJA DE INGRESAR */
export const Ingresar = styled.button`
    width: 6.25rem;
    height: 2.188rem;
    border: solid white 0.125rem;
    background-color: #1B4F72;
    color: white;
    cursor: pointer;
    border-radius: 10%;
    font-size: 1.063rem;
    font-family: 'Bacasime Antique', serif;
    &:hover {
    background-color: #5a9ec9;
    transition:.3s ease all;
    transform: scale(1.3);
}
`

/* CAJA DE REGISTRARSE */
export const Registrarse = styled.button`
    width: 6.25rem;
    height: 2.188rem;
    border: solid white 0.125rem;
    background-color: #1B4F72;
    color: white;
    cursor: pointer;
    border-radius: 10%;
    font-size: 1.063rem;
    font-family: 'Bacasime Antique', serif;
    &:hover {
    background-color: #5a9ec9;
    &:hover {
    transition:.3s ease all;
    transform: scale(1.3);
}
}
`

/* AQUI YA ESTAMOS EN HEADER 2 */
/* CAJA DE ICONOS */
export const BarraIconos = styled.div`
    width: 81.25rem;
    height: 5.938rem;
    /* border: solid black 0.125rem; */
    background-color: #1B4F72;
    font-size: 2.188rem;
    /* justify-items: center; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;

`
/* ESTE CONTIENE CADA ICONO POR SEPARADO EN CADA CAJA */

export const Menu = styled.button`
    width: 6.25rem;
    height: 4.625rem;
    border: none;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.0rem ;
    /* font-family: 'Bacasime Antique', serif; */
    cursor: pointer;
    background-color: #1B4F72;
    color: white;
    &:hover {
    /* background-color: #145a87; */
    /* border: solid white 2px; */
    transform: scale(1.3);
    transition:.3s ease all;
    font-family:-moz-initial ;
}
`
/* CAJA DE QONTINE BUSQUEDA Y LUPA */
export const CajaBusqueda = styled.div`
    width: 18.75rem;
    height: 6.25rem;
    /* border: solid black 0.125rem; */
    background-color: #1B4F72;
    display: flex;
    justify-content: center;
    align-items: center;

`

/* CAJA DE INGRESAR NUEVA BUSQUEDA */
export const LoginBusqueda = styled.div`
    width: 15.625rem;
    height: 1.875rem;
    /* border: solid black 2px; */
    background-color: #1B4F72;
    font-size: 2.5rem;
    justify-content: space-around;
    display: flex;
    color: #ffffff;
    
`
/* LUPA */
export const Lupa = styled.button`
    &:hover {
        transform: scale(1.3);
    /* background-color: #145a87; */
    /* border: solid white 2px; */
    transition:.3s ease all;

}
border: none;
background-color: #1B4F72;
color: white;
font-size: 40px;
cursor: pointer;

`

