import React, { useState } from "react";
import styled from "styled-components";

const SDiv = styled.div`
  margin: 10px 2.5px;
  border: 1px solid black;
  position: relative;
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
`;
const Bdiv = styled.div`
  margin-left: 435px;
`;

const Span = styled.span`
  position: absolute;
  top: 83%;
  left: 86%;
`;

function RestCard(props) {
  const [cName, setCname] = useState(true);
  const [check, setCheck] = useState("Check In");
  const [iCheck, setICheck] = useState(true);

  const changeState = () => {
    setCname(!cName);
  };

  const changeCheckin = e => {
    e.stopPropagation();
    setCheck(!check);
    setICheck(!iCheck);
  };

  return (
    <SDiv className={cName ? "restCard" : "expandedCard"} onClick={changeState}>
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
        <Button className={cName ? "hidden" : "show"} onClick={changeCheckin}>
          {check ? (
            "Check In"
          ) : (
            <span role="img" aria-label="check">
              &#10004;
            </span>
          )}
        </Button>
      </Bdiv>
    </SDiv>
  );
}

export default RestCard;
