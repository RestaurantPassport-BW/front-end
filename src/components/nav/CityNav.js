import React from 'react'
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const Div = styled.div`
    border-top: 1px solid black;
`


function TabNav() {
    return (
        <Div>
            <Nav tabs="true" className="navTab">
                <NavLink className='link'
                exact 
                to="/dashboard/passport/austin"
                activeClassName="selected">
                <strong>Austin</strong>
                </NavLink>

                {/* <NavLink className="link" 
                to="#"
                activeClassName='disabled' disabled>
                <strong>Add More Cities!</strong> 
                </NavLink> */}
        
                <NavLink to="/dashboard/passport/NYI" className="addPage">
                <strong>&oplus;</strong>
                </NavLink>
            </Nav>
        </Div>
    )
}

export default TabNav
