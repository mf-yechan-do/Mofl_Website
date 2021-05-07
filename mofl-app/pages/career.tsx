import React, { Component } from "react";
import styled from "styled-components";
import SubBanner from "../component/sub.banner";
import Control from "../component/control";
import { inject, observer } from "mobx-react";
import { unprotect } from "mobx-state-tree";
import Link from "next/link";
import ReadContent from "../component/career.component/readcontent";
import CreateContent from "../component/career.component/createcontent";

@inject("store")
@observer
class Career extends Component {
  render() {
    const { store } = this.props;
    unprotect(store);

    const list = [];
    const list2 = [];

    var i = 0;
    var k = 0;
    while (i < store.content.length) {
      const id = store.content[i].id;
      list.push(
        <li
          key={store.content[i].id}
          onClick={() => {
            store.Content_id(id);
          }}
        >
          <Link href="">{store.content[i].name}</Link>
        </li>
      );
      i = i + 1;
    }
    const content = () => {
      if (store.content_id === 0) {
        const _title = store.welcome[0].title;
        const _sub = store.welcome[0].sub;
        const _article = (
          <ReadContent title={_title} desc={_sub}>
            {store.welcome[0].sub}
          </ReadContent>
        );
        return _article;
      }
    };
    while (k < store.content.length) {
      const _title = store.content[k].name;
      const _sub = store.content[k].desc;
      switch (store.content_id - 1) {
        case k:
          list2.push(<ReadContent title={_title} desc={_sub}></ReadContent>);
          break;
      }
      k = k + 1;
    }

    const control = () => {
      if (store.mode === "create") {
        const _article = <CreateContent></CreateContent>;
        return _article;
      }
    };

    return (
      <>
        <Bg>
          <SubBanner title="Career Page" />
        </Bg>
        <div style={{ height: "100px" }}></div>
        <Center>
          <div>
            <button onClick={store.del}>-</button>
            <span> {store.count} </span>
            <button onClick={store.plus}>+</button>
            <div style={{ height: "20px" }}></div>
            <div
              onClick={() => {
                store.Content_id(0);
              }}
            >
              <button
                onClick={() => {
                  store.content.push({
                    desc: "Grab coffee",
                    id: 4,
                    name: "test",
                  });
                }}
              >
                test
              </button>
              <Link href="">Welcome</Link>
            </div>
            <ul>
              {list}
              {list2}
            </ul>
            <div style={{ height: "20px" }}></div>
            {content()}
            <div style={{ height: "20px" }}></div>
          </div>
          <Control></Control>
          {control()}
        </Center>
        <div style={{ height: "1000px" }}></div>
      </>
    );
  }
}

export default Career;

const Bg = styled.div`
  background-image: url(/images/sub_background_3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const Center = styled.div`
  text-align: center;
`;
