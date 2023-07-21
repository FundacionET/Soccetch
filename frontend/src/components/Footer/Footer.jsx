import React from "react";

import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

import { Cajafooter, Cajainfo, Contactanos } from "./StyledFooter";
import { Cajasiguenos, Siguenos, Logos } from "./StyledFooter";
import {Cajacomentarios,Comentarios,Enviar,Efecto,Efecto1,Efecto2,Efecto3} from "./StyledFooter";

function Footer() {
  return (
    <div>
      <Cajafooter>
        <Cajainfo>
          <Contactanos style={{ padding: "2%", marginTop: "-10px" }}>
            Contactanos
          </Contactanos>
          <Contactanos>
            <LuPhone style={{ marginRight: "2%", padding: "1%" }} /> Telefono:
            3162267832
          </Contactanos>
          <Contactanos>
            <HiOutlineMail style={{ marginRight: "2%", padding: "1%" }} />
            Postulaciones@etfundación.org
          </Contactanos>
        </Cajainfo>
        <Cajasiguenos>
          <Siguenos>Síguenos en:</Siguenos>
          <Logos>
            <Efecto>
              <BsFacebook style={{ fontSize: "2rem" }} />
            </Efecto>
            <Efecto1>
              <FaInstagram style={{ fontSize: "2rem" }} />
            </Efecto1>
            <Efecto2>
              <BsTwitter style={{ fontSize: "2rem" }} />
            </Efecto2>
            <Efecto3>
            <IoLogoYoutube style={{ fontSize: "2rem" }} />
            </Efecto3>
          </Logos>
        </Cajasiguenos>
        <Cajacomentarios>
          <Comentarios>Dejanos tu comentario:</Comentarios>
          <Comentarios>
            <input
              placeholder=""
              style={{
                height: "25px",
                width: "150px",
                borderRadius: "5px",
                outline: "none",
              }}
            ></input>
            <Enviar style={{ color: "#000" }}>Enviar</Enviar>
          </Comentarios>
        </Cajacomentarios>
      </Cajafooter>
    </div>
  );
}

export default Footer;
