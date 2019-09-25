import React, { useState } from 'react'
import styled from 'styled-components'

const SImg = styled.img`
    width: 75%;
`

const SDiv = styled.div`
    margin: 10px 2.5px;
    width: 45%;
    border: 1px solid black;
    border-radius: 25px;
    padding: 25px;

    &:hover {
        cursor: pointer;
    };
`



function RestCard(props) {
    const [cName, setCname] = useState(true)

    const changeState = () => {
        console.log(cName)
        setCname(!cName)
    }

    return (
        <SDiv className='restCard' onClick={changeState}>
            <SImg src={props.image} />
            <h1>{props.name}</h1>
            <p>Cuisine: {props.cuisine}</p>
            <div className={cName? 'hidden' : 'show' }>
                <p>{props.phone}</p>
                <p>{props.address}</p>
            </div>
            <div className={cName? 'hidden' : 'show' }>
                <h2>Hours:</h2>
                <p>Mon-Fri: {props.week}</p>
                <p>Sat-Sun: {props.weekend}</p>
            </div>
            <button className={cName? 'hidden' : 'show' }>Check In</button>
        </SDiv>
    )
}

export default RestCard
