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
          <p>AI-Based Economics Solving Firm</p>
          <h1>
          We optimize :<br></br>
          "The best certainty out of the extreme uncertainty“​<br></br>
          via time-series forecasting​
          </h1>
          <h6>
            Demand &amp; supply optimization<br></br>*Tackling Inefficiency :
            “Your cost will be reduced by p% if you use our product”
          </h6>
        </Content>
      </Background>
    );
  }
}

const Background = styled.div`
  height: 788px;
  text-align: center;
  background-color: #1b305c;
  background-image: url(/images/background.png);
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  padding: 0px;
  margin: 0px;
`;
const Content = styled.div`
  padding: 250px 0px 180px;
  width: 1180px;
  margin: auto;
  text-align: left;
  h1 {
    color: #fff;
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
