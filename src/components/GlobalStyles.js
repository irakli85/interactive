import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: 'Overpass';
}

body {
  width: 100%;
  min-height: 100vh;
  background: #131518;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyles;