import React, { useState, useEffect } from "react";
import axios from "axios";
import RestCard from "./RestCard";
import styled from "styled-components";

const Div = styled.div`
  margin: 15px auto;
`;

function RestList(props) {
  const [restaurant] = useState([
    {
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg",
      name: "John",
      cuisine: "All-types",
      phone: "555-555-0123",
      address: "123 whatever ln",
      week: "10am-2am",
      weekend: "2pm-4am"
    },
    {
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg",
      name: "Jacobs",
      cuisine: "All-types",
      phone: "555-555-0123",
      address: "123 whatever ln",
      week: "10am-2am",
      weekend: "2pm-4am"
    },
    {
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg",
      name: "Jingle",
      cuisine: "All-types",
      phone: "555-555-0123",
      address: "123 whatever ln",
      week: "10am-2am",
      weekend: "2pm-4am"
    },
    {
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg",
      name: "Shane",
      cuisine: "All-types",
      phone: "555-555-0123",
      address: "123 whatever ln",
      week: "10am-2am",
      weekend: "2pm-4am"
    },
    {
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg",
      name: "Derrik",
      cuisine: "All-types",
      phone: "555-555-0123",
      address: "123 whatever ln",
      week: "10am-2am",
      weekend: "2pm-4am"
    },
    {
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg",
      name: "Kevin",
      cuisine: "All-types",
      phone: "555-555-0123",
      address: "123 whatever ln",
      week: "10am-2am",
      weekend: "2pm-4am"
    },
    {
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg",
      name: "Matt",
      cuisine: "All-types",
      phone: "555-555-0123",
      address: "123 whatever ln",
      week: "10am-2am",
      weekend: "2pm-4am"
    },
    {
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg",
      name: "Matthew",
      cuisine: "All-types",
      phone: "555-555-0123",
      address: "123 whatever ln",
      week: "10am-2am",
      weekend: "2pm-4am"
    },
    {
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg",
      name: "Emil",
      cuisine: "All-types",
      phone: "555-555-0123",
      address: "123 whatever ln",
      week: "10am-2am",
      weekend: "2pm-4am"
    },
    {
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg",
      name: "Jacobs",
      cuisine: "All-types",
      phone: "555-555-0123",
      address: "123 whatever ln",
      week: "10am-2am",
      weekend: "2pm-4am"
    }
  ]);

  // const [restaurant, newRestaurant] =useState([])

  //   useEffect(() => {
  //       axios
  //       .get('https://mhagner-rest-pass.herokuapp.com/api/users/restaurants')
  //       .then(res => {
  // 				console.log(res)
  //         newRestaurant(res.data)
  //       })
  //       .catch(err => console.log(err))
  //   }, [])

  return (
    <Div className="restaurant-list grid-view">
				{<img
        className="cityImage"
        src="https://i.pinimg.com/originals/bc/0c/cd/bc0ccd2662956d19089ddc94ebd5ca7e.jpg"
        alt="downtown austin"
      />}
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
