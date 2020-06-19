import React from 'react'
import {Link} from 'react-router-dom'
import{Card,Button,Row, CardDeck,Container}  from 'react-bootstrap'
import './Networkc.css'
const NetworkComp = (props)=> {
    return(
        <Container>
        <Card>
        <Card.Img  src={props.data.image} id= "card" />
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

            <Card.Text><small className= "lead mt-2">5 mutual connection</small></Card.Text>
           <Link to={'Profile' + props.data.username}><Button variant="outline-primary" size ='lg' className= 'bg-lg'>Connect</Button></Link> 
        </Card> 
        </Container>
    )
}


export default NetworkComp