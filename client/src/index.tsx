import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./Store";

import './Assets/styles/index.css'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);