//* action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_DIFF = "SET_DIFF";

//* actrion creator fns
export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function setDiff(diffValud) {
  return {
    type: SET_DIFF,
    diff: diffValud
  };
}
