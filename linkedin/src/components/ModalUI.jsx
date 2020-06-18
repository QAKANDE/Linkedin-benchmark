import React, { Component } from 'react';
import { Modal, Form, Col, Button, FormGroup, FormControl } from 'react-bootstrap'
class ModalUI extends Component {
 state = {

    }
    render() { 
        return ( 
           <div>
               <Modal show={this.props.show} onHide= {()=> this.props.hideModal()}>
                <Modal.Header className="d-flex justify-content-between">
            <Modal.Title>Add Experience</Modal.Title>
            <div onClick= {()=> this.props.hideModal()}>
                X
            </div>
          </Modal.Header>
          <Modal.Body>
          <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridRole">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control placeholder="Ex: CEO" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCompany">
                                    <Form.Label>Company </Form.Label>
                                    <Form.Control placeholder="Ex: STRIVE School" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control placeholder="Ex: Living the life!" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <FormGroup controlId="date" bsSize="normal">
                                    <Form.Label>Start Date</Form.Label>
                                    <FormControl
                                        type="date"
                                    />
                                </FormGroup>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridArea">
                                    <Form.Label>Area</Form.Label>
                                    <Form.Control placeholder="Ex: London, Unined Kingdom" />
                                </Form.Group>
                            </Form.Row>
                            <Button id="experience-button" style={{ backgroundColor:"#0073B1" }} type="save">
                                Save
                        </Button>
                        </Form>            
          </Modal.Body>
               </Modal>
           </div>
         );
    }
}
 
export default ModalUI;