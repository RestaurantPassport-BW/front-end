import React from 'react'
// import EditUserCard from "./EditUserCard";
import { Button } from "react-bootstrap"

function UserCard() {

  const logOut = () => { 
      localStorage.clear();
      window.location.reload(true)
  };
    return (
        <>
        <main className="userCard">
            <Button variant="link" color='violet' size="sm" onClick={logOut} className="logoutBtn" type="submit">| &#8592;</Button>
            <section>
                <img className="userCardImg" 
                src="https://via.placeholder.com/140"
                alt="placeholder" 
                />
            </section>
            <h2 className="userName">{localStorage.getItem('user')}</h2>
            <span>45 Check-Ins | 3 Passports</span>
            {/* <EditUserCard/> */}
        </main>
        </>
    )
}

export default UserCard;
