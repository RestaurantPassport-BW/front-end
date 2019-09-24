import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

function TabNav() {
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink href="#" exact activeClassName="selected">Austin</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" disabled >San Francisco *coming soon</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" disabled >Denver *coming soon</NavLink>
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
