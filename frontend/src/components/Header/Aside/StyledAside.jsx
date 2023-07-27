import styled from "styled-components";
import cielo from "../../img/cieloestrellado.jpg";

export const MenuContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 9.1rem;
  box-sizing: border-box;
  height: 65%;
  width: 25%;
  padding: 0%;
  flex-wrap: wrap;
  background-size: cover;
  background: no-repeat;
  transition: all 0.4s ease-in-out;
  opacity: 0.9;
`;

export const MiniContainer = styled.img`
  width: 100%;
  height: 65.5%;
  object-fit: cover;
  background: no-repeat;
`;

export const MenuList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0;
  color: #fff;
  list-style-type: none;
  box-sizing: border-box;
  background-image: url(${cielo});
  li {
    :nth-child(1) {
      cursor: default;
      text-transform: uppercase;
      justify-content: center;
      font-weight: 600;
      font-size: 1.5rem;
      letter-spacing: 3px;
    }
    cursor: pointer;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  width: 95%;
  padding: 3.7% 0;
  text-transform: capitalize;
  border-bottom: 2px solid #0000007b;
  box-sizing: border-box;
  svg {
    font-size: 2rem;
    border-right: 2px solid #0000007b;
    padding-right: 0.3rem;
  }
  span {
    padding-left: 0.4rem;
  }
`;
