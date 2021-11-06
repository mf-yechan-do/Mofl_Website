import Image from "next/image";
import Link from "next/link";
import { Container } from "../styles/globals";
import styled from "styled-components";

  function ontoggle() {
    console.log('The link was clicked.');
    document.getElementById("hiring").style.display ="none";
  }

export default function HomeTop() {
  return (
    <>
    <Header>
      <Container>
        <Link href="/">
          <a>
            <Image
              priority
              src="/mofl_logo.png"
              alt="mofl logo"
              width={64} 
              height={57}
            />
          </a>
        </Link>
        <Nav>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            {/*<li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/service">SERVICE</Link>
            </li>*/}
            <li>
              <Link href="/notion">CAREER</Link>
            </li>
            {/*<li
              onClick={function (e) {
                alert("준비중");
                e.preventDefault();
              }}
            >
              <Link href="/">BLOG</Link>
            </li>*/}
            {/*<li>
              <Link href="/contact">CONTACT</Link>
            </li>*/}
          </ul>
        </Nav>
      </Container>
    </Header>
      
      
  </>
  );
}

const Blank = styled.div`
  padding: 0px 30px;
`;

 const Hiring = styled.section`
position: absolute;
top: 97px;
left: 0;
width: 100%;
background-color: #49597d;
padding: 20px 0px; 

z-index: 100;
div {
  max-width: 1240px;
  margin: 0 auto;
  position: relative;
}

span {
  display: inline-block;
  color: #fff;
  font-size: 1.6em;
  top: 13px;
  position: absolute;
  right: 30px;
  font-weight: 300;
  cursor: pointer;
}

h1 {
  color: rgb(40,242,245);
  margin: 0px;
  font-weight: bold;
  font-size: 1.25em;
}
p {
  color: #fff;
  margin: 0px;
  font-size: 1.2em;
}
`;

const Header = styled.header`
  height: 97px;
  padding: 20px 0px 20px 0px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: #1b305c;
`;
const Nav = styled.nav`
  position: absolute;
  right: 30px;
  top: 0;
  display: flex;
  height: 57px;
  align-items: center;
  li {
    list-style: none;
    display: inline-block;
    padding-left: 25px;
    color: #fff;
    line-height: 1;
  }
`;
