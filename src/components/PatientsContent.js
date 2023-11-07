import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addPatient, removePatient } from '../slices/patientsSlice';
import AddPatientForm from '../components/AddPatientForm';
import BillingPage from '../containers/BillingPage';

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
            <Link to='/patients'>
                <div className="recent-patients">
                    <table className="patients-table">
                        <thead>
                        <tr className="patients-table-header">
                            <th className="header-name">Name</th>
                            <th className="header-age">Age</th>
                            <th className="header-condition">Condition</th>
                            <th className="header-email">Email</th>
                            <th className="header-phone">Phone</th>
                            <th className="header-last-visit">Last Visit</th>
                            <th className="header-actions">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                            <tr key={patient.id} className="patient-row">
                                <td className="patient-name">{patient.name}</td>
                                <td className="patient-age">{patient.age}</td>
                                <td className="patient-condition">{patient.condition}</td>
                                <td className="patient-email">{patient.email}</td>
                                <td className="patient-phone">{patient.phone}</td>
                                <td className="patient-last-visit">{patient.lastVisit}</td>
                                <td className="patient-actions">
                                <button 
                                    onClick={() => handleRemovePatient(patient.id)}
                                    className="remove-patient-button"
                                >
                                    Remove
                                </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>      
                </Link>
                {!showAddPatientForm ? (
                    <button onClick={handleAddPatientClick}>Add Patient</button>
                ) : (
                    <AddPatientForm onFormSubmit={handleFormSubmit} />
                )}
            <BillingPage />
        </div>
      );
      };

export default PatientsContent;
