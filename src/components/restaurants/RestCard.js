import React, { useState } from "react";
import styled from "styled-components";
import axiosWithAuth from "../../helpers/axiosWithAuth";

const SDiv = styled.div`
  margin: 10px 2.5px;
  border: 1px solid black;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const IDiv = styled.div`
  text-align: left;
  margin: 15px;
`;

const Button = styled.button`
  width: 119px;
  height: 39px;
  border-radius: 4px;
  background-color: #6f52ed;
  align-self: flex-end;
  color: white;
  &:hover {
    background-color: #ffffff;
    color: #6f52ed;
  }
`;

const SImg = styled.img`
  width: 273px;
  height: 176px;
  border-radius: 5px;
`;

const H1 = styled.h1`
  margin: 0;
`;
const Bdiv = styled.div`
  // margin-left: 435px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Span = styled.span`
  position: absolute;
  top: 85%;
  left: 85%;
`;

function RestCard(props) {
  const [cName, setCname] = useState(true);
  const [iCheck, setICheck] = useState(true);
  const [bName, setBname] = useState(true);

  const changeState = e => {
    setCname(!cName);
    if (iCheck === true) {
      if (cName === true) {
        setBname(false);
      } else {
        setBname(true);
      }
    }
  };

  const changeCheckin = e => {
    e.stopPropagation();
    setICheck(!iCheck);
    setBname(!bName);

    axiosWithAuth(props)
      .post(
        `https://mhagner-rest-pass.herokuapp.com/api/users/visit/${props.id}`
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        alert("You've Already Visited This Place!");
        console.log(err)
        
      });
  };

  return (
    <SDiv
      className={
        cName
          ? "restCard"
          : props.index % 2 === 0
          ? "expandedCardEven"
          : "expandedCardOdd"
      }
      onClick={changeState}
    >
      <SImg src={props.image} />
      <H1>{props.name}</H1>
      <p>Cuisine: {props.cuisine}</p>
      <Span className={iCheck ? "hidden" : "checkShow"}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 1H5C3.9 1 3.01 1.9 3.01 3L3 15.93C3 16.62 3.35 17.23 3.88 17.59L12 23L20.11 17.59C20.64 17.23 20.99 16.62 20.99 15.93L21 3C21 1.9 20.1 1 19 1ZM10 16L5 11L6.41 9.59L10 13.17L17.59 5.58L19 7L10 16Z"
            fill="#6F52ED"
          />
        </svg>
      </Span>
      <IDiv className={cName ? "hidden" : "show"}>
        <h4>Contact Us:</h4>
        <p>{props.phone}</p>
        <p>{props.address}</p>
      </IDiv>
      <IDiv className={cName ? "hidden" : "show"}>
        <h4>Hours:</h4>
        <p>Mon-Fri: {props.week}</p>
        <p>Sat-Sun: {props.weekend}</p>
      </IDiv>
      <Bdiv>
        <Button className={bName ? "hidden" : "show"} onClick={changeCheckin}>
          Check In
        </Button>
      </Bdiv>
    </SDiv>
  );
}

export default RestCard;
