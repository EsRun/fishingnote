import { createGlobalStyle } from "styled-components";
import "./Font_Noto.css";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
    }

`;

export default GlobalStyle;
