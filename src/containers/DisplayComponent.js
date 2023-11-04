import React from "react";
const DisplayComponent = ({ title, children }) => {
    return (
      <div className="display-component">
        {title && <h2>{title}</h2>}
        <div className="content">
          {children}
        </div>
      </div>
    );
};

export default DisplayComponent;