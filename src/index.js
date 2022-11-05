import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

// TODO LineChart tooltip not showing label
// TODO Make the app more responsive
// TODO Get rid of unexpected resize
// TODO Connect real API to the template
// TODO Add auth capabilities
// TODO Add search functionality
// TODO Add notification functionality
// TODO Add settings functionality
// TODO Implement download report
// TODO Dashboard -> Sales Quantity resize because of the Sidebar
