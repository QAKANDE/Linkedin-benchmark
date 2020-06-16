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
            <div className="mt-4">
                <span>People Also Viewed</span>
                {this.state.details.slice(0,6).map((detail,index) =>   
                <Row key={index}>
                    <Col>
                    <img className='logo mx-2' alt='' src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg"></img>
                    </Col>
                    <Col>
                    <Row>
                        <Col>
                        <ul className="detailList">
                <li><p>{detail.name}<small className="mx-1">{detail.surname}</small></p></li> 
                {/* <li>{detail.area}</li>  */}
                        </ul>
                        </Col>
                    </Row>
                    </Col>
                    <Col></Col>
                </Row>
                )}
            </div>
       );
    }
}
 
export default Viewed;