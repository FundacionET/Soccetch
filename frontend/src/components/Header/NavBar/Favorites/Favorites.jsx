import React, { useState, useEffect } from "react";
import HeaderP from "../../Header";
import { Bground, Container100 } from "../../Aside/History/StyledHistory";
import { FavoritesContainer, Title, WithContainer, WithoutContainer } from "./StyledFavorites";
import { AiOutlineStar } from "react-icons/ai";

const Favorites = () => {
  const [haveFavorites, setHaveFavorites] = useState(false);
  const [favorites, setFavorites] = useState([1]);

  useEffect(() => {
    if (favorites.length > 0) {
      setHaveFavorites(true);
    } else {
      setHaveFavorites(false);
    }
  }, [favorites]);
  return (
    <Container100>
      <HeaderP />
      <Bground>
        {haveFavorites ? <WithFavorites /> : <WithoutFavorites />}
      </Bground>
    </Container100>
  );
};

export default Favorites;

const WithoutFavorites = () => {
  return (
    <FavoritesContainer>
      <Title>
        <AiOutlineStar /> <p className="text">Equipos Favoritos </p>
      </Title>
      <WithoutContainer>
        <p className="text" style={{ fontSize: "1.8rem" }}>
          Añade tus equipos Favoritos
        </p>

        <spam className="text" style={{ fontSize: "1.3rem" }}>
          Descubre en un único sitio todos los encuentros y noticias relevantes
          de tus equipos preferidos.
        </spam>
      </WithoutContainer>
    </FavoritesContainer>
  );
};
const WithFavorites = () => {
  return (
    <FavoritesContainer>
      <Title>
        <AiOutlineStar /> <p className="text">Equipos Favoritos </p>
      </Title>
      <WithContainer>
        asd
      </WithContainer>
    </FavoritesContainer>
  );
};
