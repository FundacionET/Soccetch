import styled from 'styled-components'

/* Este es el header HeaderPrincipal, el que contiene header1 y header 2 */
export const HeaderPrincipal = styled.header`
    width: 100%;
    height: 100%;
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
    height: 4.25rem;
    width: 100%;
    /* border: solid red 0.125rem; */
    display: flex;
    justify-content: center;
    background: #0575e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #021b79,
    #0575e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #021b79,
    #0575e6
  );
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
    width: 6.75rem;
    height: 30px;
    margin-bottom: 0px;
    border: none;
    background-color: #000000;
    font-size: 3.001rem;
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
    background-color: #0575E6;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    font-size: 1.063rem;
    font-family: 'Bacasime Antique', serif;
    &:hover {
        background: #0575e6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
    to right,
    #021b79,
    #0575e6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
    to right,
    #021b79,
    #0575e6
    );
    transition:.3s ease all;
    transform: scale(1.1);
    }`



/* CAJA DE REGISTRARSE */
export const Registrarse = styled.button`
    width: 6.25rem;
    height: 2.188rem;
    border: solid white 0.125rem;
    background-color: #0575E6;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    font-size: 1.063rem;
    font-family: 'Bacasime Antique', serif;
    &:hover {
    background-color: #5a9ec9;
    &:hover {
    transition:.3s ease all;
    transform: scale(1.1);
    background: #0575e6; /* fallback for old browsers */
    background: -webkit-linear-gradient(
    to right,
    #021b79,
    #0575e6
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
    to right,
    #021b79,
    #0575e6
    );
}

}
`

/* AQUI YA ESTAMOS EN HEADER 2 */
/* CAJA DE ICONOS */
export const BarraIconos = styled.div` 
    width: 81.25rem;
    height: 3.938rem; /* AQUI MODIFIQUE EL DEADER 2 */////////////////////////////////
    /* border: solid black 0.125rem; */
    /*  */
    font-size: 2.188rem;
    /* justify-items: center; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;

`
/* ESTE CONTIENE CADA ICONO POR SEPARADO EN CADA CAJA */

export const Menu = styled.button` /* AQUI EDITE FONT-SIZE Y HEIGHT */
    /* border: solid black 2px; */
    width: 5.25rem;
    height: 70%;
    border: none;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 0.938;
    /* font-family: 'Bacasime Antique', serif; */
    cursor: pointer;
    background-color: transparent;
    color: white;
    &:hover {
    /* background-color: #145a87; */
    /* border: solid white 2px; */
    transform: scale(1.1);
    transition:.3s ease all;
    font-family:-moz-initial ;
}
`
/* CAJA DE QONTINE BUSQUEDA Y LUPA */  /* AQUI EDITE HEIGHT */
export const CajaBusqueda = styled.div`
    width: 18.75rem;
    height: 3.90rem;
    /* border: solid black 0.125rem; */
    
    display: flex;
    justify-content: center;
    align-items: center;
    

`

/* CAJA DE INGRESAR NUEVA BUSQUEDA */
export const LoginBusqueda = styled.div`
    width: 12.625rem;
    height: 1.500rem;
    /* border: solid black 2px; */
    font-size: 2.5rem;
    justify-content: space-around;
    display: flex;
    align-items: center;
    color: #ffffff;
    
    
`
/* LUPA */
export const Lupa = styled.button`

    &:hover {
        transform: scale(1.2);
    /* background-color: #0575E6; */
    /* border: solid white 2px; */
    transition:.3s ease all;
    
}
margin-top: auto;
border: none;
background-color: transparent;
font-size: 35px;
cursor: pointer;
color: white;

`
export const Search = styled.input`
height :25px; 
width : 170px;
border-radius: 5px;
border: none;
outline: none;
`