import React from 'react';
import './style.css'; // Make sure to adjust the path based on your project structure

const IndustryLoginForm = () => {
  return (
    <>
      <section className="login" id="login">
        <div className="head">
          <h1 className="company">Campus Innovation</h1>
        </div>
        <p className="msg">Welcome back</p>
        <div className="form">
          <form>
            <input type="text" placeholder="AISHE-Id" className="text" id="username" required /><br />
            <input type="password" placeholder="••••••••••••••" className="password" /><br />
            <a href="#" className="btn-login" id="do-login">Login</a>
            <a href="#" className="forgot">Forgot?</a>
          </form>
        </div>
      </section>
      <footer>
        <p>Made with <span className="heart">&hearts;</span> by Bridges(<a href='https://github.com/pxntxs'>@pxntxs</a>)</p>
        <p>Gradient: <a href='https://uigradients.com/#Turquoiseflow'>https://uigradients.com/#Turquoiseflow</a></p>
      </footer>
    </>
  );
};

export default IndustryLoginForm;
