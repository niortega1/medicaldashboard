import React, { useState } from 'react';

const AddUserForm = ({ onFormSubmit }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleImageChange = (event) => {
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            id: Date.now(), // Simple unique id generation based on timestamp
            name,
            image, // This will be a data URL from handleImageChange
            isOnline: true,
            lastOnline: new Date().toLocaleTimeString() // You may want to format this or use a proper date library
        };
        onFormSubmit(newUser);
    };

    return (
        <div className='add-user-form'>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} required />
                </label>
                <label>
                    Profile Image:
                    <input type="file" onChange={handleImageChange} />
                </label>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUserForm;
