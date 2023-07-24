import styled from 'styled-components';

export const SaiderBarContadiner = styled.div`
  position: fixed;
  width: 15.625rem;
  height: 100vh;
  background-color: red;
  display: block;
  z-index: 2;
  transition: transform 0.3s  ease-in-out;
`;

export const SiderBar = styled.div`
  background: linear-gradient(0deg, #3358f4, #1d8cf8);
  height: 100vh;
  overflow: hidden;
`;

export const MenuList = styled.ul`
  position: relative;
  list-style: none;
  display: block;
  padding: 0;
  transition: all 0.5s ease;
`