import React from 'react';

const CanvasLayout = ({ children }) => {
  return (
    <div className="height-100" style={{ margin: "auto auto auto auto", minWidth: 1200, maxWidth: "90%", backgroundColor: "#1F263B" }}>
      <div className = "padding-10 height-100" style = {{backgroundColor: "#2D3247" }}>
        {children}
      </div>
    </div>
  )
}

export default CanvasLayout;