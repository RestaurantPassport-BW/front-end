import React, { useState, useEffect } from "react";
import axiosWithAuth from '../../helpers/axiosWithAuth'
// import RestCard from "./RestCard";
import RestCardVisit from './RestCardVisit'
import styled from "styled-components";

const Div = styled.div`
  margin: 15px auto;
`;

function RestList(props) {

  const [restaurant, newRestaurant] =useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('https://mhagner-rest-pass.herokuapp.com/api/users/visits')
        .then(res => {
          newRestaurant(res.data.visits)
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <Div className="restaurant-list grid-view">
      
        <img
          className="cityImage"
          src="https://i.pinimg.com/originals/bc/0c/cd/bc0ccd2662956d19089ddc94ebd5ca7e.jpg"
          alt="downtown austin"
        />
      
      {restaurant.map((rest, index) => (
        <RestCardVisit
          key={index}
          id={rest.id}
          index={index}
          image={rest.image}
          name={rest.name}
          cuisine={rest.category}
          phone={rest.phone}
          address={rest.address}
          week={rest.week}
          weekend={rest.weekend}
        />
      ))}
    </Div>
  );
}

export default RestList;
