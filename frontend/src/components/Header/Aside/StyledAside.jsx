import styled from "styled-components";
import cielo from "../../img/cieloestrellado.jpg";

export const MenuContainer = styled.div`
  position: absolute;
  top: 9.1rem;
  box-sizing: border-box;
  height: 65%;
  width: 25%;
  padding: 0%;
  flex-wrap: wrap;
  background-size: cover;
  background: no-repeat;
  transition: all 0.6s ease-in-out;
  opacity: 0.9;
`;

export const MiniContainer = styled.img`
  width: 100%;
  height: 42%;
  background: no-repeat;
`;

export const MenuList = styled.div`
  box-sizing: border-box;
  width: 100%;
  list-style-type: none;
  color: #fff;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-image: url(${cielo});
  li {
    :nth-child(1) {
      cursor: default;
    }
    cursor: pointer;
  }
`;

export const MenuItem = styled.li`
  box-sizing: border-box;
  width: 100%;

  display: flex;
  align-items: center;
  border: 1px solid;
  padding: 3.8% 0;
  &:nth-child(1) {
    padding-bottom: 5%;
  }
  svg {
    font-size: 2rem;
    padding: 0 .2rem;
  }
`;
