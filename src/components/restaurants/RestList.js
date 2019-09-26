import React, { useState, useEffect } from "react";
import axiosWithAuth from '../../helpers/axiosWithAuth'
import RestCard from "./RestCard";
import styled from "styled-components";

const Div = styled.div`
  margin: 15px auto;
`;

function RestList(props) {

  const [restaurant, newRestaurant] =useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('https://mhagner-rest-pass.herokuapp.com/api/users/restaurants')
        .then(res => {
  				console.log(res)
          newRestaurant(res.data)
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <Div className="restaurant-list grid-view">
      {
        <img
          className="cityImage"
          src="https://i.pinimg.com/originals/bc/0c/cd/bc0ccd2662956d19089ddc94ebd5ca7e.jpg"
          alt="downtown austin"
        />
      }
      {restaurant.map((rest, index) => (
        <RestCard
          style={{ border: "1px solid red" }}
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
  );
}

export default RestList;
