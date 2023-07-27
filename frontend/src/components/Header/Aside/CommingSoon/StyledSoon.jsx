import styled from "styled-components";
import fondo from "../../../img/fondodefinitivo.jpg";
import Pagina from "../../../img/5651682.png";

export const BackgroundPage = styled.div`
  height: 100vh;
  /* background-color: #cdcdcd; */
  background-image: url(${Pagina});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Forecast = styled.div`
  height: 49.4em;
  width: 37em;
  background-image: url(${fondo});
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: 10px 10px 10px black;
`;
export const Logos = styled.div`
  height: 20em;
  width: 37em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;
export const LogoEt = styled.img`
  height: 6em;
  width: 8em;
`;
export const LogoSocce = styled.img`
  height: 3em;
`;
export const Soon = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 3em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  font-family: "Katibeh", cursive;
`;
export const Message = styled.div`
  height: 10em;
  width: 37em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;
export const Texts = styled.p`
  margin: 0;
  font-size: 1em;
  color: white;
  font-family: "Katibeh", cursive;
`;
