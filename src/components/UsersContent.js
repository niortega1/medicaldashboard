import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUsers, removeUsers } from "../slices/usersSlice";
import AddUserForm from '../components/AddUserForm'; // Import the form component

const UsersContent = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const [showAddUserForm, setShowAddUserForm] = useState(false); // State to toggle the form display

    const handleAddUserClick = () => {
        setShowAddUserForm(true); // Show the form when button is clicked
    };

    const handleRemoveUser = (userId) => {
        dispatch(removeUsers({ id: userId })); // Dispatch the action to remove user
    };

    const handleFormSubmit = (newUser) => {
        dispatch(addUsers(newUser)); // Dispatch the action to add user
        setShowAddUserForm(false); // Hide the form after submitting
    };

    return (
        <div className="new-users">
            <Link to="/users">
                <div className="user-list">
                    {users.map(user => (
                        <div className="user" key={user.id}>
                            {/* Display user image */}
                            <div>
                                <img src={user.profilePic} alt={user.name} />
                            </div>
                            <div className="user-details">
                                <h2>{user.name}</h2>
                                <p>{user.isOnline ? 'Online' : `Last online: ${user.lastOnline}`}</p>
                            </div>
                            <button onClick={() => handleRemoveUser(user.id)}>Remove User</button>
                        </div>
                    ))}
                    {!showAddUserForm && (
                        <button className="add-user" onClick={handleAddUserClick}>Add User</button>
                    )}
                </div>
            </Link>
            {showAddUserForm && <AddUserForm onFormSubmit={handleFormSubmit} />}
        </div>
    );
};

export default UsersContent;
