import React from 'react'
import styled from 'styled-components'

const SImg = styled.img`
    width: 75%;
`

const SDiv = styled.div`
    margin: 5px;
    width: 45%;
    height: 70%;
    border: 1px solid black;
    border-radius: 25px;
    padding: 25px;

    &:hover {
        cursor: pointer;
    };
`

function RestCard(props) {
    return (
        <SDiv className='restCard'>
            <SImg src={props.image}/>
            <h1>{props.name}</h1>
            <p>Cuisine: {props.cuisine}</p>
            <div className='hidden'>
                <p>{props.phone}</p>
                <p>{props.address}</p>
            </div>
            <div className='hidden'>
                <h2>Hours:</h2>
                <p>Mon-Fri: {props.week}</p>
                <p>Sat-Sun: {props.weekend}</p>
            </div>
            <button className='hidden'>Check In</button>
        </SDiv>
    )
}

export default RestCard
