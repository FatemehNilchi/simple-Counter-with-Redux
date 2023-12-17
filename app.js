import { kahesh, afzayesh, tamiz } from "./Redux/actionsTypes.js";
import {
  tamizAction,
  afzayeshAction,
  kaheshAction,
} from "./Redux/actionCreators.js";

const kamBtn = document.querySelector(".kam");
const pakBtn = document.querySelector(".pak");
const porBtn = document.querySelector(".por");
const num = document.querySelector(".number");

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case kahesh: {
      return state - 1;
    }
    case tamiz: {
      return 0;
    }
    case afzayesh: {
      return state + 1;
    }
    default: {
      return state;
    }
  }
};

const store = Redux.createStore(counterReducer);

kamBtn.addEventListener("click", () => {
  store.dispatch(kaheshAction());
  let newValue = store.getState();
  console.log(store.getState());

  num.innerHTML = newValue;
});

pakBtn.addEventListener("click", () => {
  store.dispatch(tamizAction());
  let newValue = store.getState();
  console.log(store.getState());

  num.innerHTML = newValue;
});

porBtn.addEventListener("click", () => {
  store.dispatch(afzayeshAction());
  let newValue = store.getState();
  console.log(store.getState());

  num.innerHTML = newValue;
});
