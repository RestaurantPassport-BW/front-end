import React, { useState, useEffect } from 'react'
// import axios from "axios";
import RestCard from './RestCard'
// import styled from 'styled-components'


function RestList(props) {
    const [restaurant, newRestaurant] = useState([	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Jacobs',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{	
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Jacobs',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Jacobs',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Jacobs',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Jacobs',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Jacobs',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Jacobs',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Jacobs',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Jacobs',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
    },
    {
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Jacobs',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
    }
])

    // useEffect(() => {
    //     axios
    //     .get()
    //     .then(res => {
    //         newRestaurant(res.data)
    //     })
    //     .catch(err => console.log(err))
    // }, [])

    return (
        <div className='restaurant-list grid-view'>
            {restaurant.map((rest, index) => (
                <RestCard 
                    key={index}
                    image={rest.image}
                    name={rest.name}
                    cuisine={rest.cuisine}
                    phone={rest.phone}
                    address={rest.address}
                    week={rest.week}
                    weekend={rest.weekend}
                />

            ))}
        </div>
    )
}

export default RestList
