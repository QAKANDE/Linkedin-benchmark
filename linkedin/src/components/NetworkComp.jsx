import React from 'react'
import{Card,Button,Row, CardDeck,Container}  from 'react-bootstrap'
import './Networkc.css'
const NetworkComp = (props)=> {
    return(
        <Container>
        <CardDeck className='h-100'>
        <Card>
          <Card.Img variant="top" src={props.data.image} className="card-image-top"/>
          <Card.Body>
          <Card.Title>
             <span>{props.data.name}</span>
                 <span>{props.data.surname}</span>
          </Card.Title>
            <Card.Text>
            {props.data.title}
            Mutual connection
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button variant="outline-primary" size ='lg' className= 'bg-lg'>Connect</Button>
          </Card.Footer>
        </Card>
            </CardDeck>
             {/* <div className="row  row-cols-1 row-cols-sm-2 row-cols-lg-6">
             <div className="col mb-4">
             <div className="card my-3 mx-3" >
                 <div className="card-body">
                  <img src={props.data.image} class="card-img-top"></img>   
                </div> 
                <span className="card-title">
                {props.data.name}
                {props.data.surname}
                </span> 
                <span className="card-text">
                {props.data.title}
                </span>
            </div> 
            </div>
             </div> */}
        </Container>
    )
}


export default NetworkComp