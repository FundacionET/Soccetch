import styled from 'styled-components'

/* Este es el header HeaderPrincipal, el que contiene header1 y header 2 */
export const HeaderPrincipal = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 15%;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
`

/* Este es el header que tiene el logo de socotech t el login*/
export const Header1 = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 50%;
    background-color: #000000;
`

/* Este es donde esta la barra de navegacion */
export const Header2 = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 50%;
    background: -moz-linear-gradient(left, #021b79 0%, #0575e6 100%);
    background: -webkit-linear-gradient(left, #021b79 0%,#0575e6 100%);
    background: linear-gradient(to right, #021b79 0%,#0575e6 100%);
    `

/* ESTE CAJA CONTIENE TANTO LA BARRA DE NAV, LOGO Y SOCETECH */
export const ContenedorBLT = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    `
/* Aqui es donde se despliega la barra inferior izquierda */
export const BarraDesplegable = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    border: none;
    color: #ffffff;
    background: none;
    cursor: pointer;
    font-size: 3.5vh;
    align-items: center;
    justify-content: center;
    margin-left: 1%;
    &:hover {
        transition:.3s ease all;
        transform: scale(1.2);
        }
    `

/* Aqui es donde va el logo del proyecto */
export const LogoSocetech = styled.img`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: 90%;
    margin-left: 1%;
    object-fit: cover;
`

/* Aqui va el nombre de la pgina SOCETECH */
export const Socetech = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 50%;
	height:auto;
    margin-left: 1%;
    font-family: 'Faster One', cursive;
    color: white;
    overflow: hidden;
    align-items: center;
    font-size: 6vh;
    `

/* AQUI VA LA CAJA QUE CONTIENE TANTO EL LOGIN COMO EL INGRESAR Y REGISTRARSE */

/* CAJA DE INGRESAR Y REGISTRARSE */
export const LoginIngreso = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 20%;
    justify-content: center;
    align-items: center;
    margin-left: 18%;
    `

/* CAJA DE INGRESAR */
export const Ingresar = styled.button`
    box-sizing: border-box;
    border: 1px solid #007df7;
    background: none;
    color: #ffffff;
    min-width: 40%;
    min-height: 50%;
    border-radius: 3px;
    font-size: 100%;
    cursor: pointer;
    font-family: 'Bacasime Antique', serif;
    margin-right: 2.5%;
    &:hover {
        background: #000000;
        transition:.1s ease all;
        transform: scale(1.1);
        box-shadow: 0px 0px 6px 1px #007df7;
        }`



/* CAJA DE REGISTRARSE */
export const Registrarse = styled.button`
    box-sizing: border-box;
    border: 1px solid #007df7;
    background: none;
    color: #ffffff;
    min-width: 40%;
    min-height: 50%;
    border-radius: 3px;
    font-size: 100%;
    cursor: pointer;
    font-family: 'Bacasime Antique', serif;
    margin-left: 2.5%;
    &:hover {
        background: #000000;
        transition:.1s ease all;
        transform: scale(1.1);
        box-shadow: 0px 0px 6px 1px #007df7;
        }`

/* AQUI YA ESTAMOS EN HEADER 2 */


/* CAJA DE ICONOS */
export const BarraIconos = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
/* ESTE CONTIENE CADA ICONO POR SEPARADO EN CADA CAJA */

export const Menu = styled.button` /* AQUI EDITE FONT-SIZE Y HEIGHT */
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    font-size: 100%;
    font-family: 'Bacasime Antique', serif;
    cursor: pointer;
    background: none;
    border: none;
    color: white;
    margin-left: 8%;
    margin-right: 8%;
    &:hover {
    transform: scale(1.15);
    transition:.1s ease all;
    font-family:-moz-initial;
}
`
