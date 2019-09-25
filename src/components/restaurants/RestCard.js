import React, { useState } from "react";
import styled from "styled-components";

const SDiv = styled.div`
  margin: 10px 2.5px;
  border: 1px solid black;
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
`;

const SImg = styled.img`
    width: 273px;
    height: 176px;

    &:hover {
        cursor: pointer;
      }
`;

const H1 = styled.h1`
  margin: 0;
`
const Bdiv = styled.div`
  margin-left: 435px;
`



function RestCard(props) {
  const [cName, setCname] = useState(true);
  const [check, setCheck] = useState('Check In')

  const changeState = () => {
    console.log(cName);
    setCname(!cName);
  };

  const changeCheckin = () => {
    setCheck(!check)
  }

  return (
    <SDiv className={cName ? "restCard" : "expandedCard"} >
      <SImg src={props.image} onClick={changeState}/>
      <H1>{props.name}</H1>
      <p>Cuisine: {props.cuisine}</p>
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
        <Button className={cName ? "hidden" : "show"} onClick={changeCheckin}>{check? 'Check In': <span role='img' aria-label='breifcase'>&#10004;</span>}</Button>
      </Bdiv>
    </SDiv>
  );
}

export default RestCard;
