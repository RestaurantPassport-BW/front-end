import React, { useState, useEffect } from "react";
// import EditUserCard from "./EditUserCard";
import { Dropdown } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import axiosWithAuth from "../../helpers/axiosWithAuth";

function UserCard() {
  const logOut = () => {
    localStorage.clear();
    window.location.reload(true);
  };
  
  const [visited, setVisited ]=useState([])
  
  useEffect(() => {
    axiosWithAuth()
    .get('https://mhagner-rest-pass.herokuapp.com/api/users/visits')
    .then(res => {
        setVisited(res.data.visits)
       
    })
    .catch(err => console.log(err))
}, [visited])


  return (
    <>
      <main className="mainUserCard">
        <Dropdown>
          <Dropdown.Toggle
            className="logoutBtn"
            as="button"
            id="dropdown-basic"
          >
            <Icon name="cog" size="large" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              {/* <EditUserCard /> */}
            </Dropdown.Item>
            <Dropdown.Item onClick={logOut}>| &#8592; Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <img
          className="userCardImg"
          src={require('../../img/default-avatar.png')}
          alt="default"
        />

        <div className="userName">{localStorage.getItem("user")}</div>
        <span>{visited.length} Check-Ins</span>
      </main>
    </>
  );
}

export default UserCard;
