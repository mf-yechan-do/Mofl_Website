import React, { Component } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Container } from "../../styles/globals";

export default class Intro extends Component {
  render() {
    return (
      <div>
        
        
      <Section>
        <Container>
                <H6>SERVICE</H6>
          <Title as="h4" css="color: #000;">
          We provide comprehensive AI solutions that supports critical<br></br>
           decisions​​ from demand forecast to supply optimization​
          </Title>
          <Contents>
            <Flexbox>
              <MarginTop>
                <div>
                <Image
                  src="/images/why-choose.png"
                  alt="mockup"
                  width={448}
                  height={337}
                  layout="intrinsic"
                />
                </div>
              </MarginTop>
            </Flexbox> 
            <Right>
              <Flexbox>
                <Item>
                  <div>
                    <h4>01.</h4>
                    <h5>Structure</h5>
                    <p>
                    We provide full-service from data organization to external data
                    integration for advanced analysis
                    </p>
                  </div>
                </Item>
                <Item>
                  <div>
                    <h4>02.</h4>
                    <h5>Preciseness</h5>
                    <p>
                    Running data consistency check thoroughly and cleanse &amp; 
                    impute data based on the client’s goal.
                    </p>
                  </div>
                </Item>
                <Item>
                  <div>
                    <h4>03.</h4>
                    <h5>Forecasting</h5>
                    <p>
                    Our unique value comes from the most precise forecasting service based on cutting-edge AI.
                    </p>
                  </div>
                </Item>
                <Item>
                  <div>
                    <h4>04.</h4>
                    <h5>Application</h5>
                    <p>
                    We suggest the best fit demand-supply optimization for our 
                    clients ; From inventory to promotion.
                    </p>
                  </div>
                </Item>
              </Flexbox>
              <div>
                <div>
                  <div>
                    {/*<ContactUs>
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
                      </ContactUs>*/}
                  </div>
                </div>
              </div>
            </Right>
          </Contents>
        </Container>
      </Section>
      </div>
    );
  }
}

const H6 = styled.h6`
text-align: center;
  margin: 0px;
  text-transform: uppercase;
  line-height: 24px;
  color: rgb(210,167,93);
  font-size: 18px;
  `;

const Section = styled.section`
  padding: 100px 0px 140px 0px;
`;

const Title = styled.div`
  text-align: center;
  margin: 20px auto 60px;
  line-height: 40px;
  font-size:30px;
`;
const Contents = styled.div`
  position: relative;
`;
const MarginTop = styled.div`
  margin-top: 25px;
  
  @media screen and (max-width: 1180px) { 
    margin-top: 0px;
}
  div {
    padding-top: 15px;
}

`;
const Right = styled.div`
  -ms-flex: 0 0 55%;
  flex: 0 0 55%;
  max-width: 55%;
  position: absolute;
  right: 0px;
  top: 0px;

  @media screen and (max-width: 1180px) { 
    max-width: 100%;
    position: unset;
}
`;
const Flexbox = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  
@media screen and (max-width: 1180px) { 
    justify-content: center;
}
`;
const Item = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  @media screen and (max-width: 1180px) { 
    flex: 0 0 50%;
    max-width: 50%;
}
@media screen and (max-width: 600px) { 
  flex: 0 0 100%;
  max-width: 100%;
}
  > div {
    margin-top: 30px;
    position: relative;
    margin-bottom: 20px;
    margin-left: 10px;
  }

  > div h5:before {
    position: absolute;
    left: 0px;
    top: 17px;
    content: "";
    bottom: 0px;
    background: #000;
    width: 50px;
    height: 2px;
  }
  
  h4 {
    color: rgb(210, 167, 93);
    margin-bottom: 5px;
  }
  h5 {
    text-transform: uppercase;
    margin-bottom: 15px;
    position: relative;
    margin: 0;
    font-weight: 700;
    padding-left: 60px;
    margin-bottom: 15px;
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
