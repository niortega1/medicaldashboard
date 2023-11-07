import React, { useState } from 'react';

const AddPatientForm = ({ onFormSubmit }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [condition, setCondition] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [lastVisit, setLastVisit] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleConditionChange = (event) => {
        setCondition(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleLastVisitChange = (event) => {
        setLastVisit(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPatient = {
            id: Date.now(),
            name,
            age,
            condition,
            email,
            phone,
            lastVisit: new Date().toLocaleDateString()
        };
        console.log('New Patient: ', newPatient);
        onFormSubmit(newPatient);
    };

    return (
        <div className='add-patient-form' >
            <form onSubmit={handleSubmit} >
                <label>
                    Patient Name:
                    <input type="text" value={name} onChange={handleNameChange} required />
                </label>
                <label>
                    Patient age:
                    <input type='number' value={age} onChange={handleAgeChange} required />
                </label>
                <label>
                    Patient condition:
                    <input type="text" value={condition} onChange={handleConditionChange} required />
                </label>
                <label>
                    Patient email:
                    <input type="email" value={email} onChange={handleEmailChange} required />
                </label>
                <label>
                    Patient phone:
                    <input type="tel" value={phone} onChange={handlePhoneChange} required />
                </label>
                <label>
                    Patient last visit:
                    <input type="date" value={lastVisit} onChange={handleLastVisitChange} required />
                </label>
                <button type="submit">Add Patient</button>
            </form>
        </div>
    );
};

export default AddPatientForm;
