import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
    width: 75%;
`

const Div = styled.div`
    margin: 5px;
    width: 45%;
    height: 70%;
    border: 1px solid black;
    padding: 25px;
`

function RestCard(props) {
    return (
        <Div className='restCard'>
            <Img src={props.image}/>
            <h1>{props.name}</h1>
            <p>Cuisine: {props.cuisine}</p>
            <div>
                <p>{props.phone}</p>
                <p>{props.address}</p>
            </div>
            <div>
                <h2>Hours:</h2>
                <p>Mon-Fri: {props.week}</p>
                <p>Sat-Sun: {props.weekend}</p>
            </div>
            <button>Check In</button>
        </Div>
    )
}

export default RestCard
