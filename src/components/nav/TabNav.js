import React from 'react'
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


function TabNav() {
    return (
        <div>
            <Nav tabs="true" className="navTab">
                <NavLink className='link'
                exact 
                to="/dashboard"
                activeClassName="selected">
                <strong>Home</strong>
                </NavLink>

                <NavLink className="link" 
                to="/dashboard/passport"
                activeClassName='selected'>
                <strong>My Passport</strong> 
                </NavLink>
        
            </Nav>
        </div>
    )
}

export default TabNav
