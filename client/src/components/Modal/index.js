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
          <div className="about-paragraph">
          <p className="let-us-know">
          Toledo's Plants is a locally ran business that specializes in delivering customers high quality plants. We have plants for any project or need. We have plants that come in all shapes, colors and sizes. Whether you need, flowers for a flower bed, hedges for privacy, or you enjoy the satisfaction of eating fruit from a home grown plant.
          </p>
        
           <p className="let-us-know"> <strong>Have a special plant in mind?</strong></p>
           <p className="let-us-know">Let us know we have connections all over the state and are more than willing to help get your project started.</p>

           <a href="mailto:toledosplants@yahoo.com" className="email-us">Email us</a>
          </div>

        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
         }
    }



export default ModalModalExample;
