import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components'

const Div = styled.div`
    width: 850px;
`

function TabNav() {
    return (
        <Div>
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
        </Div>
    )
}

export default TabNav
