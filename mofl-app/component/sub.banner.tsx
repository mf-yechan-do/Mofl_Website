import React, { Component } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

type Props = {
  title: string;
};

@observer
export default class SubBanner extends Component<Props> {
  render() {
    return (
      <Banner>
        <Content>
          <h1>{this.props.title}</h1>
          <p>text</p>
        </Content>
      </Banner>
    );
  }
}

const Banner = styled.div`
  height: 540px;
  text-align: center;
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
