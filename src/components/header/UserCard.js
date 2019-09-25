import React from 'react'
// import EditUserCard from "./EditUserCard";
import { Button } from "react-bootstrap"
import { Icon } from 'semantic-ui-react'

function UserCard() {

  const logOut = () => { 
      localStorage.clear();
      window.location.reload(true)
  };
    return (
        <>
        <main className="userCard">
            <Button variant="link"
             color='violet' 
             size="sm"
             onClick={logOut} 
             className="logoutBtn"
             type="submit">
            <Icon name="cog" size="big"/>
             </Button>

            <img className="userCardImg" 
            src="https://via.placeholder.com/140"
            alt="placeholder" 
            />
        
            <div className="userName">{localStorage.getItem('user')}</div>
            <span>45 Check-Ins | 3 Passports</span>
            {/* <EditUserCard/> */}
        </main>
        </>
    )
}

export default UserCard;
