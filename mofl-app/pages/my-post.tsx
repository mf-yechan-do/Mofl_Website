import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import React, { Component } from "react";
import styled from "styled-components";
import SubBanner from "../component/sub.banner";

import { NotionRenderer } from "react-notion";

export async function getStaticProps() {
  const data = await fetch(
    "https://notion-api.splitbee.io/v1/page/e9b85447e6e14000b492dc84384bbb3b"
  ).then(res => res.json());

  return {
    props: {
      blockMap: data
    }
  };
}

const Notion =  ({ blockMap })=> (
  <div>
    
    <Bg>
          <SubBanner title="Career Page" />
        </Bg>
        <div  style={{ maxWidth: "768px",margin: "0 auto" }}>
    <NotionRenderer blockMap={blockMap}  />\
    </div>
  </div>
);

export default Notion


const Bg = styled.div`
  background-image: url(/images/background.png);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-color: #1b305c;

`;