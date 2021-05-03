import React, { Component } from "react";
import styled from "styled-components";
import SubBanner from "../component/sub.banner";

export default function Career() {
  return (
    <>
      <Bg>
        <SubBanner title="Career Page" />
      </Bg>
      <div style={{ height: "1000px" }}></div>
    </>
  );
}

const Bg = styled.div`
  background-image: url(/images/sub_background_3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;
