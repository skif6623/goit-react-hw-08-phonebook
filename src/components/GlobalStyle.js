import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url('https://cdn.pixabay.com/photo/2012/03/03/23/06/wall-21534_960_720.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.no-scroll {
  overflow: hidden
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
a {
  text-decoration: none;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

button {
  cursor: pointer;
}

img {
  display: block;
  
  height: auto;
}
`;
