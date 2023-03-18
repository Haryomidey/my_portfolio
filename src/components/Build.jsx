import React from 'react';
import '../styles/Build.css';

function Build({darkMode}) {
  return (
    <div className={darkMode ? 'build active' : 'build'} id='contact'>
      <div className="n-web">
        Build Your Website
        <div className="slider">
            <div className="spans">TODAY</div>
            <div className="spans">ANYTIME</div>
            <div className="spans">NOW</div>
        </div>
      </div>
    </div>
  )
}

export default Build;
