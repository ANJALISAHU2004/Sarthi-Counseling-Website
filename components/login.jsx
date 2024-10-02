// import React from 'react';
import "./Login.css"; // Assuming you have a separate CSS file for styles
const Login = () => {
  return (
    <div>
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>Welcome To</h1>
            <h1 className="dark">Sarthi</h1>
            <p>This is where you can discover your passion path to life</p>
            <span>
              <p>Login with social media</p>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-google" aria-hidden="true"></i> Login with
                Google
              </a>
            </span>
          </div>
        </div>

        <div className="right">
          <h5>Login</h5>
          <p>
            Don't have an account? <a href="#">Create Your Account</a> it takes
            less than a minute
          </p>
          <div className="inputs">
            <input type="text" placeholder="Username" />
            <br />
            <input type="password" placeholder="Password" />
          </div>

          <br />
          <br />

          <div className="remember-me--forget-password">
            <label>
              <input type="checkbox" name="item" defaultChecked />
              <span className="text-checkbox">Remember me</span>
            </label>
            <p>Forget password?</p>
          </div>

          <br />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
