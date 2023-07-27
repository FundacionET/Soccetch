import styled from "styled-components";
import Background from "../../../img/5651682.png";

export const Container = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;
export const Bground2 = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Table2 = styled.table`
  width: 80%;
  height: 35%;
  border-collapse: collapse;
  position: relative;
  top: -9em;
`;
export const HeaderTable = styled.thead``;
export const Th1 = styled.th`
  border: solid white 3px;
  height: 4rem;
  text-align: center;
`;
export const FeaturedContainer = styled.h1`
  margin: 0;
  color: rgb(255, 255, 255);
`;
export const Titles = styled.tr``;
export const PlayerName = styled.th`
  border: 3px solid white;
  padding: 10px;
  text-align: left;
  width: 20rem;
  height: 2.2rem;
  text-align: center;
  color: rgb(255, 255, 255);
`;
export const Th2 = styled.th`
  border: 3px solid white;
  padding: 10px;
  text-align: left;
  width: 5rem;
  height: 2.2rem;
  text-align: center;
  color: rgb(255, 255, 255);
`;
export const Content = styled.h3`
  margin: 0;
  font-size: 2em;
`;
export const BodyTable = styled.tbody``;
export const Information = styled.tr``;
export const Td1 = styled.td`
  border: 3px solid white;
  padding: 10px;
  text-align: center;
  color: white;
  font-size: 1.3rem;
`;
