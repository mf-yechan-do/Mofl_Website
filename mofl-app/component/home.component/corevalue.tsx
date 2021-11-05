import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { IStore } from "../../store";

type Props = {
  store?: IStore;
};
@inject("store")
@observer
export default class Banner extends Component<Props> {
  render() {
    return (
      <Background>
        <Content>
          <h5>CORE VALUE</h5>
          <h4>
          Improving Client’s Business instantly is our top priority </h4>
          <h6>
          Providing instant and unique value to users with the state-of-the-art AI is our first mission.
          <br></br>
          The better the AI, the better the business decision.
          </h6>

          <p>Perfect Fit For The Client
          Sustainable & Optimized Value Chain
          Keep Advancing, Stay Ahead Of The Market

</p>
        </Content>
      </Background>
    );
  }
}

const Video = styled.video`
display: block;
margin: 0 auto;
`;
const Background = styled.div`
  text-align: center;
  background-color: #1b305c;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  padding: 0px;
  margin: 0px;
`;
const Content = styled.div`
width: 100%;
    max-width: 1280px;
    text-align: left;
    padding: 250px 50px 0px 50px;
    margin: 0 auto;
  h4 {
    color: #eeeeee;
    font-weight: 700;
    line-height: 50px;
  }
  p {
    font-weight: 400;
    color: #fff;
    background: #D2A75D;
    display: inline-block;
    padding: 3px 8px;
    text-transform: uppercase;
  }
  h6 {
    margin: 20px 0px;
    color: #eee;
    line-height: 30px;
  }
`;
