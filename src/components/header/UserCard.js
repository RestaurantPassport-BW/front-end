import React from 'react'
import EditUserCard from "./EditUserCard";
import { Button } from "react-bootstrap"

function UserCard() {

  const logOut = () => { 
      localStorage.clear();
      window.location.reload(true)
  };
    return (
        <>
        <main>
            <Button variant="link" size="sm" onClick={logOut} className="logoutBtn" type="submit">| &#8592;</Button>
            <header>
                <img 
                className="userCardImg"
                src="https://via.placeholder.com/150"
                alt="placeholder" 
                />
            </header>
            
            <h2>{localStorage.getItem('user')}</h2>
            <p>45 Check-Ins | 3 Passports</p>
            <EditUserCard/>
        </main>
        </>
    )
}

export default UserCard;
