import React, { Component } from "react";
import styled from "styled-components";

class AboutMain extends Component {
  render() {
    return (
      <Banner>
        <Content>
          <h1>Title</h1>
          <p>text</p>
        </Content>
      </Banner>
    );
  }
}
export default function About() {
  return (
    <>
      <AboutMain />
      <div style={{ height: "1000px" }}></div>
    </>
  );
}

const Banner = styled.div`
  height: 540px;
  text-align: center;
  background-image: url(/images/sub_background_1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 0px;
  margin: 0px;
`;

const Content = styled.div`
  padding: 250px 0px 180px;
  h1 {
    color: #fff;
    font-weight: 700;
    line-height: 50px;
  }

  p {
    margin: 20px 0px;
    color: #eee;
    font-size: 18px;
    line-height: 30px;
  }
`;
