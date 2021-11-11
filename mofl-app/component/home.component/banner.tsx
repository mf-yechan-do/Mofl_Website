import React, { Component, useRef} from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { IStore } from "../../store";
import {BrowserView,MobileView,isMobile,isAndroid, isIOS} from "react-device-detect";





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
          <Pc>
      </Pc>
          <Mobile>
      </Mobile>
      <BrowserView>
          <Video style={{paddingBottom:"100px"}} src="/images/mofl1180.mp4"
          height="auto" autoPlay muted loop playsinline poster="/images/mofl_video.gif">
          </Video>
          </BrowserView>
      {(() => {  if (isMobile) {
          return (
          <>
          <Video
          style={{paddingBottom:"100px"}}
        loop={true}
        muted={true}
        playsInline={true}
        autoPlay={true}
        poster="/images/mofl_video.gif"
      >
        <source src="/images/mofl720.mp4" type="video/mp4" />
      </Video>
          </>
          )
        }
        
      
      })()}
      </div>
      </Background>
    );
  }
}

const Pc = styled.div`
display: block;
@media screen and (max-width: 720px) { 
display: none;
}
`;

const Mobile = styled.div`
display: none;
@media screen and (max-width: 720px) { 
display: block;
}
`;
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
  
@media screen and (max-width: 720px) { 
  h1 {
    font-size:36px;
    line-height: 40px;
  }
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
