import React, { Component } from "react";
import Image from "next/image";
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
          <H6>CORE VALUE</H6>
          <h4>
          Improving client’s business instantly is our top priority. </h4>
          <h6 style={{fontSize: "15px"}}>
          Providing instant and unique value to users with the state-of-the-art AI is our first mission.
          <br></br>
          The better the AI, the better the business decision.
          </h6>
<Ul>
<li>
                    <Image
                      src="/images/list_check2.svg"
                      alt="mofl logo"
                      width={16}
                      height={16}
                    />
                    <h6>Perfect Fit For The Client</h6>
                  </li>
                  <li>
                    <Image
                      src="/images/list_check2.svg"
                      alt="mofl logo"
                      width={16}
                      height={16}
                    />
                    <h6>Sustainable & Optimized Value Chain</h6>
                  </li>
                  <li>
                    <Image
                      src="/images/list_check2.svg"
                      alt="mofl logo"
                      width={16}
                      height={16}
                    />
                    <h6>Keep Advancing, Stay Ahead Of The Market</h6>
                  </li>
                  </Ul>
        </Content>
      </Background>
    );
  }
}

const Background = styled.div`
  text-align: center;
  background-color: #1b305c;
  background-position: right bottom;
  background-image: url(/images/background2.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  padding: 0px;
  margin: 0px;
`;
const Ul = styled.ul`
  list-style:none;
  line-height: 40px;
  h6 {
    color: #eeeeee;
    padding: 10px;
    margin: 0px;
    display: inline-block;
    font-weight: 400;
    display: inline;
  }
  li > div {
    margin-bottom: -3px !important;
  }
  `;

const H6= styled.h6`
  margin: 0px;
  text-transform: uppercase;
  line-height: 24px !important;
  color: rgb(210,167,93) !important;
  `;

const Content = styled.div`
max-width: 1240px;
padding 110px 30px;
width: 100%;
text-align: left;
margin: 0 auto;
@media screen and (max-width: 1000px) { 
padding 100px 30px 160px 30px;
}
  h4 {
    color: #eeeeee;
    line-height: 40px;
    font-weight: 700;
    margin-bottom: 0px;
    margin-top: 20px;
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
