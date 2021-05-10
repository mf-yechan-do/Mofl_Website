import { useMemo } from "react";
import { types, applySnapshot, Instance } from "mobx-state-tree";

let store;

const Content = types.model({
  id: types.number,
  name: types.string,
  desc: types.string

})
const Welcome = types.model({
  title: types.string,
  sub: types.string

})
const Subject = types.model({
  title: types.string,
  sub: types.string

})
const Store = types
  .model({
    count: types.number,
    mode: types.string,
    title: types.string,
    name: types.string,
    desc: types.string,
    subject: types.array(Subject),
    welcome: types.array(Welcome),
    content: types.array(Content),
    content_id: types.number
  })
  .actions((self) => {
    function plus() {
      self.count++;
      console.log("count++");
    }

    function del() {
      self.count--
      console.log("count--");
    }

    const onChangeMode = (_mode: string) => {
      self.mode = _mode;
    };
    const Content_id = (_id: number) => {
      self.content_id = _id;
    };
  

    return { plus, del, onChangeMode, Content_id};
  });

  export type IStore = Instance<typeof Store>
  
export function initializeStore(snapshot = null) {
  const _store = store ?? Store.create({
    count: 0,
    content_id: 0,
      mode: "welcome",
      title: "mofl",
      name: "reswr",
      desc: "desc",
      subject:[
        {title:"WEB", sub:"World Wide Web!"}
      ],
      welcome: [{title:"Welcome", sub:"Hello, React!!"}],
      content: [
        {id:0, name:"HTML", desc:"HyperText Markup Language"},
        {id:1, name:"CSS", desc:"Cascading Style Sheets"},
        {id:2, name:"JavaScript", desc:"객체(object) 기반의 스크립트 언어입니다"}
      ]
      
    });

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return store;
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
