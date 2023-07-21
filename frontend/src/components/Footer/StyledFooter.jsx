import styled from "styled-components";

export const Cajafooter = styled.div`
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
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
  height: 15.563rem;
  border: solid 1px black;
  display: flex;
  padding: 0 1rem;
  @media screen and (max-width: 688px) {
    display: flex;
    display: inline-block;
  }
`;
export const Cajainfo = styled.div`
  /* background-color: green; */
  width: 33.3%;
  height: 100%;
`;
export const Contactanos = styled.div`
  /*     background-color: pink; */
  width: 100%;
  height: 30%;
  color: white;
  display: flex;
  font-family: -moz-initial;
  font-size: x-large;
  align-items: center;
  /*   font-family: 'Raleway', sans-serif; */
  /*   font-size: 1.5rem; */
  font-family: "Montserrat", sans-serif;
`;
export const Cajasiguenos = styled.div`
  /* background-color: #710080; */
  width: 33.3%;
  height: 100%;
`;
export const Siguenos = styled.div`
  /*    background-color: #00ffdd; */
  width: 100%;
  height: 33.3%;
  color: white;
  display: flex;
  font-family: -moz-initial;
  font-size: x-large;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
`;
export const Logos = styled.div`
  /*    background-color: #00ffdd; */
  width: 100%;
  height: 33.3%;
  color: white;
  display: flex;
  font-family: -moz-initial;
  font-size: x-large;
  align-items: center;
  justify-content: center;
  * {
    cursor: pointer;
  }
`;

export const Cajacomentarios = styled.div`
  /* background-color: #710080; */
  width: 33.3%;
  height: 100%;
`;
export const Comentarios = styled.div`
  /*    background-color: #00ffdd; */
  width: 100%;
  height: 33.3%;
  color: white;
  display: flex;
  font-family: -moz-initial;
  font-size: x-large;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
`;
// export const Enviar = styled.button`
//     background-color: #ffffff;
//     width: 10%;
//     height: 35%;
//     margin-left: 20px;
//     cursor: pointer;
//     border-radius: 5px;
//     font-weight: 900;
//     font-family: 'Montserrat', sans-serif;

//     &:hover{
//         /* transition: 1.2s */
//         background-color: #6d6c6ca4 ;

//     }

// `

export const Enviar = styled.button`
  color: #ffffff !important;
  font-size: 0%.8;
  font-weight: bold;
  padding: 0.5em 1.2em;
  background: #0575e6;
  border: 2px solid;
  border-color: #1010117a;
  position: relative;
  border-radius: 6px;
  margin-left: 10px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 0px;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 1s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;
export const Efecto = styled.div`
  /*   color: #fff;
    font-size: 1rem;
    font-weight: bold;
    background: #0575e6;
    border: 2px solid;
    border-color: #1010117a;
    position: relative;
    border-radius: 6px;
    margin-left: 10px; */
  font-family: "Montserrat", sans-serif;
  padding: 0.5em;
  &:hover {
    color: #1900ff;
    transition: 0.6s;
  }
`;
export const Efecto1 = styled.div`
  /*   color: #fff;
    font-size: 1rem;
    font-weight: bold;
    background: #0575e6;
    border: 2px solid;
    border-color: #1010117a;
    position: relative;
    border-radius: 6px;
    margin-left: 10px; */
  font-family: "Montserrat", sans-serif;
  padding: 0.5em;
  &:hover path {
    color: #da267f;
    transition: 0.6s;
  }
`;
export const Efecto2 = styled.div`
  font-family: "Montserrat", sans-serif;
  padding: 0.5em;
  &:hover {
    color: #1da1f2;
    transition: 0.6s;
  }
`;
export const Efecto3 = styled.div`
  /*   color: #fff;
    font-size: 1rem;
    font-weight: bold;
    background: #0575e6;
    border: 2px solid;
    border-color: #1010117a;
    position: relative;
    border-radius: 6px;
    margin-left: 10px; */
  font-family: "Montserrat", sans-serif;
  padding: 0.5em;
  &:hover {
    color: red;
    transition: 0.6s;
  }
`;
