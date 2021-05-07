import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

@observer
class ReadContent extends Component {
  render() {
    return (
      <>
        <H3>{this.props.title}</H3>
        <P>{this.props.desc}</P>
      </>
    );
  }
}

export default ReadContent;

const H3 = styled.h3`
  font-size: 36px;
  margin: 0px;
  line-height: 1;
`;

const P = styled.p`
  font-size: 16px;
  line-height: 28px;
`;
