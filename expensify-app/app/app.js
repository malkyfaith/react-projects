import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is expense dashboard
    </div>
)

const routes = (
    <BrowserRouter>
        <Route path="/" component={ExpenseDashboardPage}/>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));

