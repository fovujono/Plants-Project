import React from "react";
import "./style.css";
import { Button, Image, Modal } from "semantic-ui-react";

 class ModalModalExample extends React.Component{

    render(){
        return <Modal trigger={<Button>About Us</Button>}>
    <Modal.Header>About Toledo's Plants</Modal.Header>
    <Modal.Content image>
      <Image
        wrapped
        size="large"
        src="https://i.ibb.co/ZJHNSHL/20190312-190934.jpg"
      />
      <Modal.Description>
        <div className="login-page">
          <div className="form">
          
           
          </div>

        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
         }
    }



export default ModalModalExample;
