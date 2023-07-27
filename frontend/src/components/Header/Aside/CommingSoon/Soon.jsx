import {
  BackgroundPage,
  Forecast,
  LogoEt,
  LogoSocce,
  Logos,
  Message,
  Soon,
  Texts,
} from "./StyledSoon";
import ET from "../../../img/logo1.png";
import Socce from "../../../img/socce.png";
import HeaderP from "../../Header";
import Footer from "../../../Footer/Footer";

const CommingSoon = () => {
  return (
    <>
    <HeaderP/>
      <BackgroundPage>
        <Forecast>
          <Logos>
            <LogoEt src={ET} />
            <LogoSocce src={Socce}></LogoSocce>
          </Logos>
          <Soon>PRÓXIMAMENTE</Soon>
          <Message>
            <Texts>Lamentablemente, la opción que estás buscando,</Texts>
            <Texts>
              aun se encuentra en construccion, pero no te preocupes,
            </Texts>
            <Texts>¡estamos trabajando arduamente para hacerla realidad!</Texts>
            .
          </Message>
        </Forecast>
      </BackgroundPage>
      <Footer/>
    </>
  );
};

export default CommingSoon;
