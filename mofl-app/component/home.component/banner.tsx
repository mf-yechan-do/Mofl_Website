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
        <div>
      <Video style={{paddingBottom:"180px"}}
      height="auto" autoPlay muted loop playsinline preload poster="/images/mofl_video.gif">
         <source src="/images/mofl_video.mp4" type="video/mp4"></source>
        <source src="/images/mofl_video.webm" type="video/webm"></source>
      </Video>
      </div>
      </Background>
    );
  }
}

const Video = styled.video`
display: block;
margin: 0 auto;
width: 100%;
max-width: 1180px;
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
    max-width: 1240px;
    text-align: left;
    padding: 250px 30px 50px 30px;
    margin: 0 auto;
  h1 {
    color: #eeeeee;
    font-weight: 700;
    line-height: 60px;
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
    font-size:18px;
  }
`;
