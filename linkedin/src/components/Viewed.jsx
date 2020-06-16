import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap'
import './Viewed.css'

class Viewed extends Component {
    state = {
      details:[]
    }
     componentDidMount = async () => {
        let response = await fetch("https://striveschool.herokuapp.com/api/profile/" , {
            method:"GET",
            headers:new Headers({
                "content-type":"application/json",
                "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            })
        })
     let details = await response.json()
     this.setState({
         details
     })
     console.log(this.state.details) 
     }
    render() { 
        return (
            <div>
                {this.state.details.slice(0,6).map((detail,index) =>   
                <Row key={index}>
                    <Col>
                    <img className='logo mx-5' alt='' src="https://lh3.googleusercontent.com/8YxVXk8qc-a7YXIrZ9eaqNY4NNkDR6kjooHE5Weg_Pz6R5yd1I2QwZ9vSjfK0aiFkLbdhQ=s85"></img>
                    </Col>
                    <Col>
                    <Row>
                        <Col>
                        <ul className="detailList">
                <li><p>{detail.name}<small className="mx-1">{detail.surname}</small></p></li> 
                <li>{detail.area}</li> 
                        </ul>
                        </Col>
                    </Row>
                    </Col>
                    <Col><i className="fa fa-sticky-note mx-1"></i></Col>
                </Row>
                )}
            </div>
       );
    }
}
 
export default Viewed;