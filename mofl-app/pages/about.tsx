import React, { Component } from "react";
import styled from "styled-components";
import SubBanner from "../component/sub.banner";

export default function About() {
  return (
    <>
      <Bg>
        <SubBanner title="About Page" />
      </Bg>
      <div style={{ height: "1000px" }}></div>
    </>
  );
}

const Bg = styled.div`
  background-image: url(/images/sub_background_1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;
