import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPatient, removePatient } from '../slices/patientsSlice';
import AddPatientForm from '../components/AddPatientForm';

const PatientsContent = () => {
    const dispatch = useDispatch();
    const patients = useSelector((state) => state.patients.patients);
    const [showAddPatientForm, setShowAddPatientForm] = useState(false);

    const handleAddPatientClick = () => {
        setShowAddPatientForm(true);
    };

    const handleRemovePatient = (patientId) => {
        dispatch(removePatient({ id: patientId }));
    };

    const handleFormSubmit = (newPatient) => {
        dispatch(addPatient(newPatient));
        setShowAddPatientForm(false);
    };

    return (
        <div>
            <h2>Patients</h2>
            <div className="patient-list">
                {patients.map((patient) => (
                    <div className="patient" key={patient.id}>
                        <h3>{patient.name}</h3>
                        <p>{patient.condition}</p>
                        {/* Assuming you want to display patient's age, email, and phone as well */}
                        <p>Age: {patient.age}</p>
                        <p>Email: {patient.email}</p>
                        <p>Phone: {patient.phone}</p>
                        <p>Last Visit: {patient.lastVisit}</p>
                        <button onClick={() => handleRemovePatient(patient.id)}>
                            Remove Patient
                        </button>
                    </div>
                ))}
            </div>
            {!showAddPatientForm ? (
                <button onClick={handleAddPatientClick}>Add Patient</button>
            ) : (
                <AddPatientForm onFormSubmit={handleFormSubmit} />
            )}
        </div>
    );
};

export default PatientsContent;
