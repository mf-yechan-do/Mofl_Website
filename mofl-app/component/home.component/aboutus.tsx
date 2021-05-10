import React, { Component } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Container } from "../../styles/globals";

export default class AboutUs extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Flexbox>
            <Left>
              <Content>
                <h6>About us</h6>
                <h4>
                  We are making beautiful <br />
                  design layout for your business
                </h4>
                <P theme={{ color: "#788487" }}>
                  We craft beautiful website layout from scratch.You need not to
                  worry about site design and other technial issue.We provide
                  these attractive service as a bonus.Let's have atalk together
                  for your next project.
                </P>

                <ul>
                  <li>
                    <Image
                      src="/images/list_check.svg"
                      alt="mofl logo"
                      width={16}
                      height={16}
                    />
                    <span>Responsive site</span>
                  </li>

                  <li>
                    <Image
                      src="/images/list_check.svg"
                      alt="mofl logo"
                      width={16}
                      height={16}
                    />
                    <span>Latest bootstrap 4</span>
                  </li>

                  <li>
                    <Image
                      src="/images/list_check.svg"
                      alt="mofl logo"
                      width={16}
                      height={16}
                    />
                    <span>Modern and clean design</span>
                  </li>
                  <li>
                    <Image
                      src="/images/list_check.svg"
                      alt="mofl logo"
                      width={16}
                      height={16}
                    />
                    <span>Working contact form</span>
                  </li>
                  <li>
                    <Image
                      src="/images/list_check.svg"
                      alt="mofl logo"
                      width={16}
                      height={16}
                    />
                    <span>Premium services and support</span>
                  </li>
                  <li>
                    <Image
                      src="/images/list_check.svg"
                      alt="mofl logo"
                      width={16}
                      height={16}
                    />
                    <span>Cross browser compatiabilty</span>
                  </li>
                </ul>
              </Content>
            </Left>
            <Right></Right>
          </Flexbox>
        </Container>
      </Section>
    );
  }
}

const Section = styled.section`
  position: relative;
  background-color: #f8f9fa;
`;

const Flexbox = styled.div((props) => ({
  display: "flex",
  flexWrap: "wrap",
}));

const Left = styled.div`
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  left: 0px;
  top: 0px;
`;
const Right = styled.div`
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  background: url(../images/1.jpg);
  background-size: cover;
`;
const Content = styled.div`
  margin: 50px 15px 50px 0px;
  h6 {
    margin: 20px auto 20px;
    text-transform: uppercase;
    line-height: 24px;
    color: #635cdb;
  }

  h4 {
    margin-top: 20px;
    line-height: 45px;
  }

  ul {
    display: inline-block;
    margin-top: 20px;
  }

  li {
    width: 45%;
    float: left;
    margin-bottom: 15px;
    margin-right: 15px;
    color: #888;
    display: flex;
    align-content: center;
  }
  li > span {
    padding-left: 7px;
  }
`;

const P = styled.p`
  color: ${(props) => props.theme.color};
`;
