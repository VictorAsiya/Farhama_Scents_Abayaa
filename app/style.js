import styled from "styled-components";

export const FixedDiv = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(19, 4, 5, 0.4), rgba(1, 1, 10, 0.8)),
    url("/background/background4.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -20;
  top: 0;
`;