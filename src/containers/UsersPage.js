import React from 'react';
import DisplayComponent from './DisplayComponent';
import UsersContent from '../components/UsersContent';

const UsersPage = () => {
  return (
    <DisplayComponent title="Users">
      <UsersContent />
    </DisplayComponent>
  );
};


export default UsersPage;
