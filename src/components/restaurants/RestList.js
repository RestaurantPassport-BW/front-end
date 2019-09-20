
import React, { useState, useEffect } from 'react'
import axios from "axios";
import RestCard from './RestCard'

function RestList(props) {
    const [restaurant, newRestaurant] = useState([])

    useEffect(() => {
        axios
        .get()
        .then(res => {
            newRestaurant(res.data)
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <div className='restaurant-list grid-view'>
            {restaurant.map((rest, index) => (
                <RestCard 
                    key={index}
                    image={rest.image}
                    cuisine={rest.cuisine}
                    phone={rest.phone}
                    address={rest.address}
                    hoursweek={rest.week}
                    hoursweekend={rest.weekend}
                />

            ))}
        </div>
    )
}

export default RestList
