import React, { useState } from 'react';
import './UserList.css';
import UserRow from './UserRow';


const UserList = ({users, editUser }) => {

 const [selected, setSelected] = useState();  

 return ( <div className="userList">
    <div className="container-fluid">
        <div className="row user-display"> 
                           
            <div className="col-12 users-panel">
                {users.map(user => (
                   <UserRow
                        key={user}
                        user={user}
                        active={user === selected}
                        handleClick={() => { setSelected(user); editUser(user) }}
                      />      
                ))}
            </div>
        </div>
    </div>
</div> )
   
}

export default UserList