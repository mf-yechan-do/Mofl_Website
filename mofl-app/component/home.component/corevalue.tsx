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
          <H5>CORE VALUE</H5>
          <h4>
          Improving Client’s Business instantly is our top priority </h4>
          <h6>
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
                    <h5>Perfect Fit For The Client</h5>
                  </li>
                  <li>
                    <Image
                      src="/images/list_check2.svg"
                      alt="mofl logo"
                      width={16}
                      height={16}
                    />
                    <h5>Sustainable & Optimized Value Chain</h5>
                  </li>
                  <li>
                    <Image
                      src="/images/list_check2.svg"
                      alt="mofl logo"
                      width={16}
                      height={16}
                    />
                    <h5>Keep Advancing, Stay Ahead Of The Market</h5>
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
  h5 {
    color: #eeeeee;
    padding: 10px;
    margin: 0px;
    display: inline-block;
    font-weight: 400;
    display: inline;
  }
  `;

const H5 = styled.h5`
  margin: 0px;
  text-transform: uppercase;
  line-height: 24px;
  color: rgb(210,167,93);
  `;

const Content = styled.div`
max-width: 1240px;
padding 100px 30px;
width: 100%;
    text-align: left;
    margin: 0 auto;
  h4 {
    color: #eeeeee;
    font-weight: 700;
    line-height: 50px;
    margin-bottom: 0px;
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
