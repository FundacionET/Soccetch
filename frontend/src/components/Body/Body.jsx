import React from "react";
import{Bodys,Cajacarrusel,Cuadronoticias} from "./StyledBody";
import About     from "./About/About";
import Aside from "./Aside/Aside";

const Body = () => {
    return (
        <div>
            <Bodys>
                <Cajacarrusel>
                    <Cuadronoticias>Noticias Destacadas</Cuadronoticias>
                <Aside></Aside>
                </Cajacarrusel>
                <About/>
            </Bodys>
        

        
        </div>
    );
};

export default Body;
