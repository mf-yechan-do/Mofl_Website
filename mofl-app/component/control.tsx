import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { IStore } from "../store";

type Props = {
  store?: IStore;
};
@inject("store")
@observer
class Control extends Component<Props> {
  render() {
    const { store } = this.props;

    const delete2 = () => {
      var k = 0;
      var y = 0;
      while (k < store.content.length) {
        switch (store.content_id) {
          case k:
            store.content.splice(k, 1);
            while (y < store.content.length) {
              store.content[y].id = y;
              y = y + 1;
            }
            break;
        }
        k = k + 1;
      }
    };

    let delname = "";
    var k = 0;
    while (k < store.content.length) {
      switch (store.content_id) {
        case k:
          delname = store.content[k].name;
          break;
      }
      k = k + 1;
    }

    return (
      <div>
        <Button
          onClick={() => {
            store.onChangeMode("create");
          }}
        >
          등록
        </Button>
        <Button
          onClick={() => {
            store.onChangeMode("update");
          }}
        >
          수정
        </Button>
        <Button
          onClick={() => {
            store.onChangeMode("delete");
            if (window.confirm(` "${delname}"를 삭제하시겠습니까?`)) {
              delete2();
            }
          }}
        >
          삭제
        </Button>
      </div>
    );
  }
}

export default Control;

const Button = styled.button`
  margin: auto 10px;
  padding: 5px 15px;
`;
