import * as React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;