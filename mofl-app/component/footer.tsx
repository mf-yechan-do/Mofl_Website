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
            <Image
              src="/mofl_logo.png"
              alt="mofl logo"
              width={78}
              height={70}
            />
          </div>
          <div>
            <div>
              <p>
                A214, 17, Techno 4-ro, Yuseong-gu,
                <br />
                Daejeon, Republic of Korea
              </p>
              <p>©2019 mofl Inc. All rights reserved</p>
            </div>
          </div>
        </Level>
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
  padding: 40px;
  width: 100%;
  p {
    line-height: 19px;
  }
  img {
    padding-top: 20px !important;
  }
`;
