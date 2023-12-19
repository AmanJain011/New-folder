import React from 'react';
import './style.css'; // Make sure to adjust the path accordingly
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="main2">
      <div className="card2">
        <div className="card-border-top2"></div>
        <span>College/University</span>
        <p className="job2">
        <Link to='/univiersity-login-form' className='link'><button>Log In</button></Link> 
        </p>
      </div>
      <div className="card2">
        <div className="card-border-top2"></div>
        <span>Industry</span>
        <p className="job2">
        <Link to='/industry-login-form' className='link'><button>Log In</button></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
