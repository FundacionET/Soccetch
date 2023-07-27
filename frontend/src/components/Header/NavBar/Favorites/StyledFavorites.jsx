import styled from "styled-components";

export const FavoritesContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .text {
    text-align: center;
    font-size: 2.3rem;
    line-height: 3.5rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 10px 10px 5px 5px;
  box-shadow: 0px 2px 5px 0px #000;
  background-color: #032f92;
  svg {
    color: #fff;
    font-size: 2.8rem;
  }
`;

export const WithoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem;
  border: 1px solid #fff;
  border-radius: 5px 5px 10px 10px;
  box-shadow: 0px 1px 5px 0px #202020;
  `;

export const WithContainer = styled.div`
  display: flex;
  border: 1px solid #fff;
  border-radius: 5px 5px 10px 10px;
  box-shadow: 0px 1px 5px 0px #202020;
`;
