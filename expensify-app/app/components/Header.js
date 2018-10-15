import React from 'react';
import { NavLink } from 'react-router-dom';

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

export default Header;