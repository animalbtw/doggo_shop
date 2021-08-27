import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import UserStore from "./Store/UserStore";
import FeedStore from "./Store/FeedStore";

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    feeds: new FeedStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);