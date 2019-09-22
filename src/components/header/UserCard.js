import React from 'react'


function UserCard() {
    return (
        <main>
            <header>
                <img 
                className="userCardImg"
                src="https://via.placeholder.com/150"
                alt="placeholder" 
                />
            </header>
            <h2>User Name</h2>
            <p>45 Check-Ins | 3 Passports</p>
        </main>
    )
}

export default UserCard
