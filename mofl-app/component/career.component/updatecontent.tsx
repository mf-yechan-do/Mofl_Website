import React, { Component } from "react";
import { inject } from "mobx-react";
import { IStore } from "../../store";

type Props = {
  store?: IStore;
};
@inject("store")
class UpdateContent extends Component<Props> {
  render() {
    const { store } = this.props;

    const content = (event) => {
      var k = 0;
      while (k < store.content.length) {
        switch (store.content_id) {
          case k:
            store.content[k].name = event.target.value;

            break;
        }
        k = k + 1;
      }
    };
    const content2 = (event) => {
      var k = 0;
      while (k < store.content.length) {
        switch (store.content_id) {
          case k:
            store.content[k].desc = event.target.value;

            break;
        }
        k = k + 1;
      }
    };

    var k = 0;
    let desccontent = "";
    let textcontent = "";
    while (k < store.content.length) {
      switch (store.content_id) {
        case k:
          textcontent = store.content[k].name;
          desccontent = store.content[k].desc;
          break;
      }
      k = k + 1;
    }

    return (
      <article>
        <h2>수정</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <p>
            <input
              type="text"
              id="name"
              onChange={content}
              value={textcontent}
            />
          </p>
          <p>
            <textarea
              name="desc"
              id="desc"
              onChange={content2}
              value={desccontent}
            />
          </p>
          <p>
            <input
              type="submit"
              value="확인"
              onClick={() => {
                store.onChangeMode("welcome");
              }}
            />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
