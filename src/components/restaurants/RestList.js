import React, { useState, useEffect } from 'react'
import axios from "axios";
import RestCard from './RestCard'
import styled from 'styled-components'

const Div = styled.div`
		margin: 15px auto;
`


function RestList(props) {
	const [restaurant, newRestaurant] =useState([])

    useEffect(() => {
        axios
        .get('https://mhagner-rest-pass.herokuapp.com/api/users/restaurants')
        .then(res => {
					console.log(res)
          newRestaurant(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (

        <Div className='restaurant-list grid-view' >
			<img className="cityImage" src="../img/downtown-austin.jpg" alt="downtown austin"/>
            {restaurant.map((rest, index) => (
								<RestCard 
										style={{border: "1px solid red"}}
                    key={index}
                    index={index}
                    image={rest.image}
                    name={rest.name}
                    cuisine={rest.cuisine}
                    phone={rest.phone}
                    address={rest.address}
                    week={rest.week}
                    weekend={rest.weekend}
                />

            ))}
        </Div>
    )
}

export default RestList
