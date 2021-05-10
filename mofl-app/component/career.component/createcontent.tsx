import React, { Component } from "react";
import { inject } from "mobx-react";
import { IStore } from "../../store";

type Props = {
  store?: IStore;
};
@inject("store")
class CreateContent extends Component<Props> {
  render() {
    const { store } = this.props;

    return (
      <article>
        <h2>등록</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            store.content.push({
              desc: event.target[1].value,
              id: store.content.length,
              name: event.target[0].value,
            });
            store.onChangeMode("welcome");
          }}
        >
          <p>
            <input type="text" placeholder="제목" />
          </p>
          <p>
            <textarea name="desc" placeholder="내용" />
          </p>
          <p>
            <input type="submit" value="확인" />
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
