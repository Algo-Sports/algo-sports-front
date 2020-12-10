import React from 'react';

const CanvasLayout = ({ children }) => {
  return (
    <div className="height-100 margin-auto dark-bg" style={{minWidth: 1200, maxWidth: "90%"}}>
      <div className = "padding-10 height-100 light-dark-bg">
        {children}
      </div>
    </div>
  )
}

export default CanvasLayout;