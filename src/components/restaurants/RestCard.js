import React from 'react'
import styled from 'styled-components'
const Div = styled.div`
    margin: 5px;
    width: 400px;
    height: 400px;
`
const Img = styled.img`
    height: 30%;
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
