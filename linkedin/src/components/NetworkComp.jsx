import React from 'react'
import{Card,Button}  from 'react-bootstrap'


const NetworkComp = (props)=> {
    return(
        <Card style={{ width: '18rem' }} id= "card" className = 'mb-2 card'>
        <Card.Img  src={props.data.image} id= "card" />
        <Card.Body>
            <Card.Title>
                <span>{props.data.name}</span>
                <span>{props.data.surname}</span>
                 </Card.Title>
            <Card.Text>
            {props.data.title}
            </Card.Text>
            <Card.Text><small className= "lead mt-2">5 mutual connection</small></Card.Text>
            <Button variant="outline-primary" size ='lg' className= 'bg-lg'>Connect</Button>
        </Card.Body>
        </Card>
    )
}


export default NetworkComp