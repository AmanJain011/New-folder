import React from 'react';
import './style.css'; // Import your stylesheet

const LoginForm = () => {
  return (
    <div className='.body3'>
        <div className="login3 " id="login3">
      <div className="head3">
        <h1 className="company3">Campus Innovation</h1>
      </div>
      <p className="msg3">Welcome back</p>
      <div className="form3">
        <form>
          <input type="text" placeholder="AISHE-Id" className="text3" id="username3" required /><br />
          <input type="password" placeholder="••••••••••••••" className="password3" /><br />
          <a href="#" className="btn-login3" id="do-login3">Login</a>
          <a href="#" className="forgot3">Forgot?</a>
        </form>
      </div>
    </div>
    </div>
  );
};


const UniversityLoginForm = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default UniversityLoginForm;
