import React, { Component } from "react";
import styled from "styled-components";
import SubBanner from "../component/sub.banner";
import Control from "../component/control";
import { inject, observer } from "mobx-react";
import { unprotect } from "mobx-state-tree";
import ReadContent from "../component/career.component/readcontent";
import CreateContent from "../component/career.component/createcontent";
import UpdateContent from "../component/career.component/updatecontent";
import { IStore } from "../store";



type Props = {
  store?: IStore;
};

@inject("store")
@observer
class Career extends Component<Props> {
  render() {
    const { store } = this.props;
    unprotect(store);

    const list = [];
    const list2 = [];

    var i = 0;
    var k = 0;
    while (i < store.content.length) {
      const id = store.content[i].id;
      const content_id = store.content_id;
      if (id !== content_id) {
        list.push(
          <li
            key={store.content[i].id}
            onClick={() => {
              store.Content_id(id);
            }}
          >
            <Pointer>{store.content[i].name}</Pointer>
          </li>
        );
      } else {
        list.push(
          <li
            key={store.content[i].id}
            onClick={() => {
              store.Content_id(id);
            }}
          >
            <Pointer2>{store.content[i].name}</Pointer2>
          </li>
        );
      }
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
      switch (store.content_id) {
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
      } else if (store.mode === "update") {
        const _article = <UpdateContent></UpdateContent>;
        return _article;
      }
    };

    return (
      <>
      <Bg>
        <SubBanner title="Career Page" />
      </Bg>
      
      <embed type="text/html" src="https://www.notion.so/Job-Description-e9b85447e6e14000b492dc84384bbb3b" width="500" height="200"></embed>

      {/* 
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
              * <Pointer>Welcome</Pointer> *
            </div>
            <ul>{list}</ul>
            <div style={{ height: "20px" }}></div>
            {list2}
            * {content()} *
            <div style={{ height: "20px" }}></div>
          </div>
          <Control></Control>
          {control()}
        </Center>
        <div style={{ height: "1000px" }}></div>
      </>*/}
           </>
    );
  }
}

export default Career;

const Bg = styled.div`
  background-image: url(/images/background.png);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-color: #1b305c;

`;

const Center = styled.div`
  text-align: center;
`;

const Pointer = styled.span`
  cursor: pointer;
`;
const Pointer2 = styled.span`
  cursor: pointer;
  font-weight: bold;
  color: #117d24;
`;
