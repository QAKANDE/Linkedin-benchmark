import React from 'react'
import{Card,Button}  from 'react-bootstrap'
import {Link} from 'react-router-dom'


const NetworkComp = (props)=> {
    return(
        <Card  id= "card" className = ' '>
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
           <Link to={'Profile' + props.data.username}><Button variant="outline-primary" size ='lg' className= 'bg-lg'>Connect</Button></Link> 
        </Card.Body>
        </Card>
    )
}


export default NetworkComp