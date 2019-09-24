import React from 'react'
import EditUserCard from "./EditUserCard";
import { NavLink } from "react-router-dom";

function UserCard() {
    return (
        <>
        <main>
            <NavLink to="/login" className="logoutBtn">| &#8592;</NavLink>
            <header>
                <img 
                className="userCardImg"
                src="https://via.placeholder.com/150"
                alt="placeholder" 
                />
            </header>
            
            <h2>User Name</h2>
            <p>45 Check-Ins | 3 Passports</p>
            <EditUserCard/>
        </main>
        </>
    )
}

export default UserCard;
