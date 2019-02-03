import React from "react";
import "./style.css";
import { Button, Image, Modal } from "semantic-ui-react";

 class ModalModalExample extends React.Component{

    render(){
        return <Modal trigger={<Button>Sign In</Button>}>
    <Modal.Header>Sign in Page</Modal.Header>
    <Modal.Content image>
      <Image
        wrapped
        size="large"
        src="https://images.pexels.com/photos/1313807/pexels-photo-1313807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1200"
      />
      <Modal.Description>
        <div className="login-page">
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
              <button>login</button>
              <p className="message">
                Not registered? <a href="/signup">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
         }
    }



export default ModalModalExample;
