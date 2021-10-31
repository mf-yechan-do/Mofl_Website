import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Container } from "../styles/globals";

export default function Footer() {
  return (
    <FooterBox>
      <Container>
        <h1>Contact</h1>
        <h6>
          We are open to any kind of suggestions!
          <br />
          <br />
          Please send us an email to:
          <br />
          <i>
            <Link href="mailto:contact@mofl.ai">contact@mofl.ai</Link>
          </i>
        </h6>
        <Level>
          <div>
            <div>
              <p>
              <span>Daejeon, Korea</span>
              <br /><div style={{height: "10px"}}></div>
                A214, 17, Techno 4-ro, Yuseong-gu,
                <br />
                Daejeon, Republic of Korea
              </p>
              <p>
              
              <span>Daejeon, Korea(Research Institute)</span>
              <br /><div style={{height: "10px"}}></div>
              504, 99, Daehak-ro, Yuseong-gu, 
              <br />
                Daejeon, Republic of Korea
              </p>
              <p>

              <span>Seoul, Korea</span>
              <br /><div style={{height: "10px"}}></div>
                1412-3 ,16, Maeheon-ro, Seocho-gu, 
              <br />
                  Seoul, Republic of Korea
              </p>
            </div>
          </div>
          
        </Level>
          <div style={{paddingTop: "100px"}}>
            <Image
              src="/mofl_logo.png"
              alt="mofl logo"
              width={78}
              height={70}
            />
            <p style={{margin: "0px"}} >©2019 mofl Inc. All rights reserved</p>
          </div>
      </Container>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 0;
  background-color: #1b305c;
  text-align: center;
  color: #fff;
  h1 {
    font-weight: 600;
    line-height: 1.2;
  }
  h6 {
    font-weight: normal;
    margin: 40px auto 60px;
    line-height: 24px;
  }
`;

const Level = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 40px 0px;
  width: 100%;
  p {
    line-height: 19px;
  }
  img {
    padding-top: 20px !important;
  }

  div {
    display: flex;
    width: 100%;
    min-width: 1180px;
}
p {width: 33.3%;}
span {
  font-weight: 700;
}
`;
