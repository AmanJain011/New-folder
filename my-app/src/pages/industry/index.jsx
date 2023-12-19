import React from 'react';
import './style.css'; // Make sure to adjust the path based on your project structure
import { Link } from 'react-router-dom';

const IndustryLoginForm = () => {
  return (
    <div className='body3'>
        <section className="login" id="login">
        <div className="head">
          <h1 className="company">Campus Innovation</h1>
        </div>
        <p className="msg">Welcome back</p>
        <div className="form">
          <form>
            <input type="text" placeholder="AISHE-Id" className="text" id="username" required /><br />
            <input type="password" placeholder="••••••••••••••" className="password" /><br />
            <Link to="/company-dashboard" className="btn-login" id="do-login">Login</Link>
            <a href="#" className="forgot">Forgot?</a>
          </form>
        </div>
      </section>
    </div>
  );
};

export default IndustryLoginForm;
