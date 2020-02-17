import React, { useState, useEffect } from 'react';
import './UserForm.css';

const UserForm = props => {
  const [ user, setUser ] = useState(props.selectedUser)
 
    useEffect(
      () => {
        setUser(props.selectedUser)
      },
      [ props ]
    )
      
   
    const [disableButton, setDisableButton] = useState(true);
    const [hideButton, setHideButton] = useState(true);
  
    const handleInputChange = event => {
      const { name, value } = event.target
      //console.log(event);
      setUser({ ...user, [name]: value })
      setDisableButton(false)
      setHideButton(false)
    }
    
   
    return (  <form onSubmit={event => {
            event.preventDefault()
    
            props.updateUser(user.id, user)
          }}>
               <h3 className="form-field-title">Name</h3>
               <label htmlFor="name">
                <input type="text" name="name" id="name" value={user.name} onChange={handleInputChange}/>
              </label>
            <h3 className="form-field-title">Email adress</h3>
            <label htmlFor="email">
                <input type="email" name="email" id="email" value={user.email} onChange={handleInputChange}/>
            </label>
            <h3 className="form-field-title">Phone</h3>
            <label htmlFor="phone">
                <input type="tel" name="phone" id="phone" value={user.phone} onChange={handleInputChange}/>
            </label>
            <h3 className="form-field-title">Adress</h3>
            <label htmlFor="adress">
                <input type="text" name="adress" id="adress" value={user.adress} onChange={handleInputChange}/>
            </label>
            <h3 className="form-field-title">Company</h3>
            <label htmlFor="company">
                <input type="text" name="company" id="company" value={user.company} onChange={handleInputChange}/>
            </label>
            <div className="buttons">
          <button onClick={() => props.setEditing(false)} disabled={disableButton} type="button" hidden={hideButton} className="btn button-cancel">Cancel</button>
            <button type="submit" disabled={disableButton} className="btn button-submit">Save</button>
            </div>
        </form>
    )


}

export default UserForm
