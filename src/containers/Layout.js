import React from 'react';
import Sidebar from './Sidebar';
import RightProfile from './RightProfile';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Sidebar />
      <main className="main-content">
        {children} 
      </main>
      <RightProfile />
    </div>
  );
};

export default Layout;
