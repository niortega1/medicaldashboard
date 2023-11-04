import React from 'react';
import Sidebar from './Sidebar'; // Your Sidebar component

const Layout = ({ children }) => {
  return (
    <div className="main-content">
      <main className="main-content">
        {children} // This is where the content of each page will go
      </main>
      <Sidebar />
    </div>
  );
};

export default Layout;
