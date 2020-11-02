import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
