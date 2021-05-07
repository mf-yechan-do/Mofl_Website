import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("store")
class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form name="createform" method="get">
          <p>
            <input type="text" name="title" placeholder="제목" />
          </p>
          <p>
            <textarea name="desc" placeholder="내용" />
          </p>
          <p>
            <input
              type="submit"
              value="등록"
              onClick={(e) => e.preventDefault()}
            />
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
