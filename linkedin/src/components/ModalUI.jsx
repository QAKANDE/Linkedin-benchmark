import React, { Component } from 'react';
import {Modal} from 'react-bootstrap'
class ModalUI extends Component {
    render() { 
        return ( 
           <div>
               <Modal show={this.props.show} onHide= {()=> this.props.hideModal()}>
                <Modal.Header className="d-flex justify-content-between">
            <Modal.Title>Movie comments</Modal.Title>
            <div onClick= {()=> this.props.hideModal()}>
                X
            </div>
          </Modal.Header>
          <Modal.Body>Quadri</Modal.Body>
               </Modal>
           </div>
         );
    }
}
 
export default ModalUI;