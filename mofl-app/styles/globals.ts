import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  width: 1180px;
  margin: 0 auto;
  position: relative;
`;

export const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
}

.notion-page {
  width: 900px !important;
} 
.notion-page-cover {
  min-height: 450px;
}
html,
body {
  min-width: 1180px;
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
