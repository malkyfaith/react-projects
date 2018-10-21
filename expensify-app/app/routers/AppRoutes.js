import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRoutes = (
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
);

export default AppRoutes;