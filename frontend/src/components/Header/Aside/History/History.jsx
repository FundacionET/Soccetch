import React from "react";
import { Container100, Table, Th, Td, Th1, Bground } from "./StyledHistory";
import HeaderP from "../../Header";

const data = [{}, {}, {}, {}];

const History = () => {
  return (
    <Container100>
      <HeaderP />
      <Bground>
        <Table>
          <thead>
            <Th1 colSpan={3}>
              <h1 style={{ margin: "0", color: "white" }}>HIST</h1>
            </Th1>
            <tr>
              <Th>
                <h3 style={{ margin: "0", fontSize: "2rem" }}>Temporada</h3>
              </Th>
              <Th>
                <h3 style={{ margin: "0", fontSize: "2rem" }}>Campeon</h3>
              </Th>
              <Th>
                <h3 style={{ margin: "0", fontSize: "2rem" }}>Segundo</h3>
              </Th>
            </tr>
          </thead>
          <tbody>
            {data.map((persona, index) => (
              <tr key={index}>
                <Td>{}</Td>
                <Td>{}</Td>
                <Td>{}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Bground>
    </Container100>
  );
};

export default History;
