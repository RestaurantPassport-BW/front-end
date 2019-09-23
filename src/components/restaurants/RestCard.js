import React from 'react'

function RestCard(props) {
    return (
        <div className='restCard'>
            <img src={props.image}/>
            <h1>{props.name}</h1>
            <p>{props.cuisine}</p>
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
        </div>
    )
}

export default RestCard
