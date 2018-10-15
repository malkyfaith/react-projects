import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
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
        This is 404 - <Link to="/"> Go Home</Link>
    </div>
);
const Header = () => (
    <div>
    <h2>
        Expensify App
    </h2>
    <NavLink to="/create" exact={true} activceClassName="is-active"> Create</NavLink>
    <NavLink to="/edit" activceClassName="is-active"> Edit</NavLink>
    <NavLink to="/help" activceClassName="is-active"> Help</NavLink>
    </div>
);
const routes = (
    <BrowserRouter>
    <div>
        <Header></Header>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}  />
            <Route path="/edit" component={EditExpensePage}  />
            <Route path="/help" component={HelpExpensePage}  />
            <Route component={NotFoundPage}  />
        </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));

