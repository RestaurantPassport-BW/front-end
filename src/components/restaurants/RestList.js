import React, { useState } from 'react'
// import axios from "axios";
import RestCard from './RestCard'
import styled from 'styled-components'

const Div = styled.div`
		margin: 15px auto;
`


function RestList(props) {
    const [restaurant] = useState([	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'John',
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
		'name' : 'Jingle',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Shane',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Derrik',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Kevin',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Matt',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Matthew',
		'cuisine' : 'All-types', 
		'phone' : '555-555-0123',
		'address' : '123 whatever ln',
		'week' : '10am-2am',
		'weekend' : '2pm-4am'
	},
	{
		'image' : 'https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg',
		'name' : 'Emil',
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
        <Div className='restaurant-list grid-view' >
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
        </Div>
    )
}

export default RestList
