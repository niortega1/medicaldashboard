import React from 'react';
import DisplayComponent from './DisplayComponent';
import PatientsContent from '../components/PatientsContent';

const PatientsPage = () => {
  return (
    <DisplayComponent title="Patients">
        <PatientsContent />
    </DisplayComponent>
  );
};


export default PatientsPage;
