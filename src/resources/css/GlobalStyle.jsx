import { createGlobalStyle } from "styled-components";
import "./Font_Noto.css";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
    }
    a {
        color: #424242;
        text-decoration: none;
      }
    ul{
        list-style: none;
    }
    li{
        cursor: pointer;
    }

`;

export default GlobalStyle;
