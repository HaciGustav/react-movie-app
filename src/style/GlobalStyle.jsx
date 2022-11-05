import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body, html{
    background-color: #000;
    height: 100vh;
}
#root{
    height:100%
}
`;

export default GlobalStyle;
