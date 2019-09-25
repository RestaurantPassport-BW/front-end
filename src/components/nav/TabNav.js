import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';


function TabNav() {
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink href="/dashboard/austin" activeclassname="selected">Austin</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" disabled >San Francisco *Coming Soon*</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" disabled >Denver *Coming Soon*</NavLink>
                </NavItem>
                <NavItem className="addPage">
                    <NavLink href="#" className="addPageBtn">
                    <span>&oplus;</span>
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default TabNav
