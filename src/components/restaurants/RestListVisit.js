import React, { useState, useEffect } from "react";
import axiosWithAuth from '../../helpers/axiosWithAuth'
import RestCardVisit from './RestCardVisit'
import styled from "styled-components";

const Div = styled.div`
  margin: 15px auto;
  position: relative;
`;

function RestListVisit(props) {

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
			src={require("../../img/austin-downtown2.png")}
			alt="downtown austin"
			/>
			<h1 className="cityImageText">Austin Texas</h1>
			<strong className="cityImageText1">20 restaurants</strong>

      
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

export default RestListVisit;
