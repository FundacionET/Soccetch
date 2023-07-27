import styled from "styled-components";
import Imagen from "../../../img/5651682.png";

export const Bground = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container100 = styled.div`
  height: 100vh;
  background-image: url(${Imagen});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Table = styled.table`
  width: 80%;
  height: 35%;
  border-collapse: collapse;
  position: relative;
  top: -9em;
`;

export const Th = styled.th`
  border: 3px solid white;
  padding: 10px;
  text-align: left;
  width: 5rem;
  height: 2.2rem;
  text-align: center;
  color: #fff;
`;

export const Td = styled.td`
  border: 3px solid white;
  padding: 10px;
  text-align: center;
  color: #fff;
  font-size: 1.3rem;
`;

export const Th1 = styled.th`
  border: solid white 3px;
  height: 4rem;
  text-align: center;
`;
