import React from 'react'
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


function TabNav() {
    return (
        <div>
            <Nav tabs="true" className="navTab">
                
                <NavLink className='link' 
                to="/dashboard/austin"
                exact 
                activeClassName="selected">
                Austin
                </NavLink>

                <NavLink className="link" 
                to="#" activeClassName='selected'>
                San Francisco *Coming Soon*
                </NavLink>
            
            
                <NavLink className="link" 
                to="#" activeClassName='selected'>
                Denver *Coming Soon*
                </NavLink>
            
            
                <NavLink to="#" className="link">
                <span>&oplus;</span>
                </NavLink>
            </Nav>
        </div>
    )
}

export default TabNav
