import React from "react";
import NavigationContainer from "./Navigations";
import { createStore } from "redux";
import { Provider } from "react-redux";

const reducer = (
  state = {
    alert: false,
    timer: true,
    restart: false,
    quit: false,
  },
  action
) => {
  switch (action.type) {
    case "open":
      return { alert: true, timer: false };
    case "close":
      return { alert: false, timer: true };
    case "restart":
      return { restart: true };
    case "quit":
      return { quit: true };
    default:
      return state;
  }
};

const database = createStore(reducer);

const App = () => (
  <Provider store={database}>
    <NavigationContainer />
  </Provider>
);

export default App;
