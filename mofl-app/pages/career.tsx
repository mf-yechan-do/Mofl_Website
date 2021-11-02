import React, { Component } from "react";
import styled from "styled-components";
import SubBanner from "../component/sub.banner";



class Career extends Component {
  render() {
    return (
      <>
        <Bg>
          <SubBanner title="Career Page" />
        </Bg>
      </>
    );
  }
}


export default Career;

const Bg = styled.div`
  background-image: url(/images/background.png);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-color: #1b305c;

`;
