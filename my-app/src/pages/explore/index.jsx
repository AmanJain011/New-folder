import React from 'react';
import { Link } from 'react-router-dom';
// import './style.css'; // Import your CSS file

const Explore = () => {
  return (
    <>
      
      <body style={{ backgroundColor: '#ABCDEF' }}>
        <div className="gargi">
          <div className="card">
            <div className="card-details">
              <p className="text-title">Innovation</p>
              <p className="text-body">"Innovation is the relentless pursuit of novel ideas and creative solutions that drive positive change and progress."</p>
            </div>
            <Link to="/inovation" className="link"><button className="card-button">More info</button></Link>
          </div> 
          <div className="card">
            <div className="card-details">
              <p className="text-title">Academic projects</p>
              <p className="text-body">
                "Academic projects: where theory meets creativity, transforming classrooms into innovation hubs."
              </p>
            </div>
            <button className="card-button">More info</button>
          </div>
          <div className="card">
            <div className="card-details">
              <p className="text-title">Industry Problems </p>
              <p className="text-body">
                "Industry problems are the raw material of innovation, waiting to be transformed into solutions that redefine the status quo."
              </p>
            </div>
            <button className="card-button">More info</button>
          </div>
        </div>
      </body>
    </>
  );
};

export default Explore;
