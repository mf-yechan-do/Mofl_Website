import Image from "next/image";
import Link from "next/link";
import { Container } from "../styles/globals";
import styled from "styled-components";

export default function Top() {
  return (
    <Header>
      <Container>
        <Link href="/">
          <a>
            <Image
              priority
              src="/mofl_logo.png"
              alt="mofl logo"
              width={50}
              height={50}
            />
          </a>
        </Link>
        <Nav>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/service">SERVICE</Link>
            </li>
            <li>
              <Link href="/career">CAREER</Link>
            </li>
            <li
              onClick={function (e) {
                alert("준비중");
                e.preventDefault();
              }}
            >
              <Link href="/">BLOG</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </Nav>
      </Container>
    </Header>
  );
}

const Header = styled.header`
  height: 90px;
  padding: 20px 0px 20px 0px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: #1b305c;
`;
const Nav = styled.nav`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  height: 50px;
  align-items: center;
  li {
    list-style: none;
    display: inline-block;
    padding-left: 25px;
    color: #fff;
    line-height: 1;
  }
`;
