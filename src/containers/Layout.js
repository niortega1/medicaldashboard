import React from 'react';
import Sidebar from './Sidebar';
import RightProfile from './RightProfile';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Sidebar />
      <main className="main-content">
        {children} // This is where the content of each page will go
      </main>
      <RightProfile />
    </div>
  );
};

export default Layout;
