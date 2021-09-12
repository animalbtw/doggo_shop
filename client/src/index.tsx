import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";
// import UserStore from "./Store/UserStore";
// import FeedStore from "./Store/FeedStore";

// export const Context = React.createContext(null)

ReactDOM.render(
  // <Context.Provider value={{
  //   // user: new UserStore(),
  //   // feed: new FeedStore(),
  // }}>
    <App />
  // </Context.Provider>
,
  document.getElementById('root')
);