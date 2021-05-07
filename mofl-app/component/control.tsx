import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Control extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <Button
          onClick={() => {
            store.onChangeMode("create");
          }}
        >
          create
        </Button>
        <Button
          onClick={() => {
            store.onChangeMode("update");
          }}
        >
          update
        </Button>
        <Button
          onClick={() => {
            store.onChangeMode("delete");
          }}
        >
          delete
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
