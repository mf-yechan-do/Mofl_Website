import { useMemo } from "react";
import { types, applySnapshot } from "mobx-state-tree";
import { observable } from "mobx";

const Store = observable({
  title: "mofl",
});
export default Store;
