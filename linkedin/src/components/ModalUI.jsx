import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Modal, Form, Col, Button, FormGroup, FormControl } from 'react-bootstrap'
class ModalUI extends Component {
    constructor(props) {
        super(props)
   console.log(this.props.match)
    }
 state = {
     newexperience:{
        role:"",
       company:"",
       startDate:"",
       endDate:null,
    description:"",
        area:""
     }
    }

    submitExperience =  async (e) => {
        e.preventDefault()
        const userID = this.props.match.params.userId;
      
        let response = await fetch ("https://striveschool.herokuapp.com/api/profile/userName/experiences",{
            method:"POST",
            body: JSON.stringify(this.state.newexperience),
            headers:{
                'Content-Type' : 'Application/json',
                "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            }  
        })

       
        if (response.ok){
            let newexperience = await response.json()
            console.log(response)
            alert("success")
            // this.setState({
            //     newexperience:{
            //         role:"",
            //         description:"",
            //         company:"",
            //         area:""
            //      }
            // })
        }
        else{
        alert("err")
        }
    }
     updateExperience = (event) => {
        
         let newexperience = this.state.newexperience;
         let id = event.currentTarget.id;
         newexperience[id] = event.currentTarget.value;
         this.setState({
             newexperience
         })
         console.log("bla bla", this.state)
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
          <Form onSubmit={this.submitExperience}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label htmlFor="role">Role</Form.Label>
                                    <Form.Control 
                                    type="text"
                                    placeholder="Ex: CEO"
                                    id="role"
                                    value={this.state.newexperience.role}
                                    onChange={(e) =>this.updateExperience(e)}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label htmlFor="company">Company </Form.Label>
                                    <Form.Control 
                                    placeholder="Ex: STRIVE School" 
                                    type="text"
                                       id="company"
                                       value={this.state.newexperience.company}
                                       onChange={this.updateExperience}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label htmlFor="description">Description</Form.Label>
                                    <Form.Control 
                                    placeholder="Ex: Living the life!" 
                                    type="text"
                                       id="description"
                                       value={this.state.newexperience.description}
                                       onChange={this.updateExperience}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <FormGroup>
                                    <Form.Label htmlFor="date">Start Date</Form.Label>
                                    <FormControl
                                           id="startDate"
                                           value={this.state.newexperience.startDate}
                                           onChange={this.updateExperience}
                                        type="date"
                                    />
                                </FormGroup>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label htmlFor="area">Area</Form.Label>
                                    <Form.Control 
                                    placeholder="Ex: London, United Kingdom" 
                                    id="area"
                                    type="text"
                                    value={this.state.newexperience.area}
                                    onChange={this.updateExperience}/>
                                </Form.Group>
                            </Form.Row>
                            <Button id="experience-button" style={{ backgroundColor:"#0073B1" }} type="submit">
                            Post new experience
                        </Button>
                        </Form>            
          </Modal.Body>
               </Modal>
           </div>
         );
    }
}
 
export default withRouter(ModalUI);