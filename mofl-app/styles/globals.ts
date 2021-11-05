import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding: 0px 50px;
`;

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
}

.notion-page { 
  width: 100%;
  max-width: 1000px;
  padding: 120px 50px;
} 
.notion-page-cover {
  min-height: 450px;
/*  min-width: 1920px;*/
}
html,
body {    
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
h1 {
  font-size: 48px;
}
h2 {
  font-size: 42px;
}
h3 {
  font-size: 36px;
}
h4 {
  font-size: 30px;
  font-weight: 500;
}
h5 {
  font-size: 24px;
  font-weight: 500;
}
h6 {
  font-size: 18px;
  font-weight: 500;
}
p {
  font-size: 16px;
  line-height: 28px;
}
a {
  color: inherit;
  text-decoration: none;
}
ul, li {
  margin: 0;
  padding: 0;
  }
.about-list {
  margin-top: 30px;
}
`;
