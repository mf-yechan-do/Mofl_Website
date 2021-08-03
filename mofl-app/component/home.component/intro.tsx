import React, { Component } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Container } from "../../styles/globals";

export default class Intro extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Title as="h4" css="color: #000;">
          We provide  comprehensive AI platforms  that supports critical decisions​​<br></br>
          from demand forecast to supply optimization​
          </Title>
          <Contents>
            <Flexbox>
              <MarginTop>
                <Image
                  src="/images/why-choose.png"
                  alt="introimg"
                  width={445}
                  height={555}
                  layout="intrinsic"
                />
              </MarginTop>
            </Flexbox>
            <Right>
              <Flexbox>
                <Item>
                  <div>
                    <h4>01.</h4>
                    <h5>Management</h5>
                    <p>
                      we founded September with the goal of creating meaningful
                      digital experiences that connect with people.
                    </p>
                  </div>
                </Item>
                <Item>
                  <div>
                    <h4>02.</h4>
                    <h5>Strategy</h5>
                    <p>
                      We’re full service which means we’ve got you covered on
                      design &amp; content right through to digital.
                    </p>
                  </div>
                </Item>
                <Item>
                  <div>
                    <h4>03.</h4>
                    <h5>Experience</h5>
                    <p>
                      You’ll form a lasting relationship with us, collaboration
                      is central to we do.Digital experiences connect people.
                    </p>
                  </div>
                </Item>
                <Item>
                  <div>
                    <h4>04.</h4>
                    <h5>Build</h5>
                    <p>
                      Technology and design are the core of success for real
                      estate related businesses. Leverage our years.
                    </p>
                  </div>
                </Item>
              </Flexbox>
              <div>
                <div>
                  <div>
                    <ContactUs>
                      Still have any question on mind?{" "}
                      <ContactUs
                        black
                        as="a"
                        onClick={function (e) {
                          alert("준비중");
                          e.preventDefault();
                        }}
                        href=""
                      >
                        Contact us
                      </ContactUs>
                    </ContactUs>
                  </div>
                </div>
              </div>
            </Right>
          </Contents>
        </Container>
      </Section>
    );
  }
}

const Section = styled.section`
  padding: 90px 0px;
`;

const Title = styled.div`
  text-align: center;
  margin: 40px auto 60px;
  text-align: left;
  line-height: 40px;
`;
const Contents = styled.div`
  position: relative;
`;
const MarginTop = styled.div`
  margin-top: 45px;
`;
const Right = styled.div`
  -ms-flex: 0 0 55%;
  flex: 0 0 55%;
  max-width: 55%;
  position: absolute;
  right: 0px;
  top: 0px;
`;
const Flexbox = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;
const Item = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  > div {
    margin-top: 30px;
    position: relative;
    margin-bottom: 20px;
  }
  h4 {
    color: #635cdb;
    margin-bottom: 20px;
  }
  h5 {
    text-transform: uppercase;
    margin-bottom: 15px;
    position: relative;
    margin: 0;
    font-weight: 500;
  }
  p {
    color: #788487;
    margin: 10px 10px 10px 0px;
  }
`;
const ContactUs = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => (props.black ? "black" : "#788487")};
  margin-top: 60px;
  display: inline-block;
`;
