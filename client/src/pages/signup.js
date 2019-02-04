import React from "react";

const Signup =() =>{
    return(
 

        
        <div className="signup-container">
        <div className="signup-header"></div>
              <div className="signup-page">
          <div className="form">
            <form className="register-form">
              <input type="text" placeholder="name" />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="email address" />
              <button>create</button>
              <p className="message">
                Already registered? <a href="/#">Sign In</a>
              </p>
            </form>
            <form className="login-form">
              <input type="text" placeholder="email" />
              <input type="password" placeholder="password" />
              <button>Register</button>
            </form>
          </div>
        </div>
        </div>
       
    )
};

export default Signup;

