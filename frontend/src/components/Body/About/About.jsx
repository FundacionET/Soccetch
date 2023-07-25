import React from 'react'
import { Texto, Container, Container2, Texth2 } from "./Styled";


const About = () => {
return (
    <div>
<Container>
        <Container2>
            
            <div style={{paddingTop: '2rem'}}>
                <h2 style={{margin: '0'}}>SOCCETECH:</h2>
            </div>
            
        <Texto>

            <Texth2>Es una pagina web dedicada al apasionante mundo del futbol y las estadisticas. En nuestro sitio. encontraras una amplia gama de contenido relacionado con este deporte, diseñado para satisfacer las necesidades de los fanaticos y seguidores del futbol.</Texth2>
            
            <div>
                <Texth2>SocceEteeh también ofrece funciones interactivas, como pronóstico de partidos y desafíos de prediccion.</Texth2>
            </div>


            </Texto>
            </Container2>
        </Container>

    </div>
)
}

export default About