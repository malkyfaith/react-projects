import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is expense dashboard
    </div>
)

const AddExpensePage = () => (
    <div>
        This is expense create page
    </div>
)
const EditExpensePage = () => (
    <div>
        This is expense Edit page
    </div>
)
const HelpExpensePage = () => (
    <div>
        This is expense Help page
    </div>
)
const NotFoundPage = () => (
    <div>
        This is 404
    </div>
)
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}  />
            <Route path="/edit" component={EditExpensePage}  />
            <Route path="/help" component={HelpExpensePage}  />
            <Route component={NotFoundPage}  />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));

