import React from "react";
import HeaderP from "../../Header";
import Footer from "../../../Footer/Footer";
import {
  Bground2,
  BodyTable,
  Container,
  Content,
  FeaturedContainer,
  HeaderTable,
  PlayerName,
  Table2,
  Th1,
  Th2,
  Titles,
  Td1,
  Information,
} from "./StyledFeatured";

const Featured = () => {
  const data = [{}, {}, {}, {}, {}];

  return (
    <Container>
      <HeaderP/>
      <Bground2>
        <Table2>
          <HeaderTable>
            <Th1 colSpan={4}>
              <FeaturedContainer>Destacados</FeaturedContainer>
            </Th1>
            <Titles>
              <PlayerName>
                <Content>Nombre Jugador</Content>
              </PlayerName>
              <Th2>
                <Content>Equipo</Content>
              </Th2>
              <Th2>
                <Content>Goles</Content>
              </Th2>
              <Th2>
                <Content>Calificacion</Content>
              </Th2>
            </Titles>
          </HeaderTable>
          <BodyTable>
            {data.map((partido, index) => (
              <Information key={index}>
                <Td1>{}</Td1>
                <Td1>{}</Td1>
                <Td1>{}</Td1>
                <Td1>{}</Td1>
              </Information>
            ))}
          </BodyTable>
        </Table2>
      </Bground2>
    </Container>
  );
};

export default Featured;
