import React from 'react';
import './UserList.css';

const UserRow = ({ active, user, handleClick }) => {
    return (
        <div onClick={handleClick} className={active ? "row user-selected" : "row user-row"}>
            <div className="users-photos">
                <img
                    src={user.photo}
                    alt="users-photos" />
            </div>
            <div className="userInfo">
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
            </div>

        </div>
    );
};

export default UserRow