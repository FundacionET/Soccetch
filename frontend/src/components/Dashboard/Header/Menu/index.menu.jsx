import React, { useState } from "react";
import { MyRoutes } from "./routers/routes";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
export const ThemeContext = React.createContext(null);

function MenuDesplegable() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Container className={sidebarOpen ? "sidebarState active" : ""}>
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <MyRoutes />
        </Container>
      </BrowserRouter>
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: white;
  transition:all 0.3s ;
  &.active {
    grid-template-columns: 300px auto;
  }
`;
export default MenuDesplegable;