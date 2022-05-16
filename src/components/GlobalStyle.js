import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 500px){
        font-size: 40%;
        overflow-x: hidden;
    }
}

body{
    background: #1b1b1b;
    font-family: 'Merriweather', serif;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #01C4FA;
    background: transparent;
    color: white;
    transform: all 0.5s ease;
    font-family: 'Merriweather', serif;
    &:hover{
        background-color: #01C4FA;
        color: white;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color: white;
}
h4{
    font-weight: bold;
    font-size: 2rem;
}
a{
    font-size: 1.1rem;
}
span{
    font-weight: bold;
    color: #01C4FA;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

::-webkit-scrollbar{
    width: 10px;
}

::-webkit-scrollbar-track{
    background: #282828;
}

::-webkit-scrollbar-thumb{
    background-color: #01C4FA;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover{
    background-color: #0980B9;
}

`;

export default GlobalStyle;
