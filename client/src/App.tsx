import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import Header from './Components/Header';
import WaitingComp from "./Pages/WaitingComp";

function App() {
    const isReady = false
    return (
        <BrowserRouter>
            {
                isReady ? (
                    <>
                        <Header />
                        <AppRouter />
                    </>
                ) : (
                    <>
                        <WaitingComp />
                    </>
                )
            }
        </BrowserRouter>
    )
}

export default App;
