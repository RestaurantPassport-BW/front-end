import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

function TabNav() {
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink href="#" activeclassname="selected">Austin</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">San Francisco</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Denver</NavLink>
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
