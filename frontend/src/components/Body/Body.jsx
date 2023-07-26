import React from "react";
import { Bodys, Cajacarrusel } from "./StyledBody";
import About from "./About/About";

const Body = () => {
  return (
    <div>
      <Bodys>
        <Cajacarrusel>
        </Cajacarrusel>
        <About />
      </Bodys>
    </div>
  );
};

export default Body;
