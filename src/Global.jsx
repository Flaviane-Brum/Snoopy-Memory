import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;

}
 *{
   margin: 0;
   box-sizing:border-box ;
   padding: 0;
 }
 img{
   max-width:100% ;
   display:block;
 }


`;
export default GlobalStyle;
