import React from 'react'
import './Profile.css'
import NetworkComp from './NetworkComp'


class NetworkP extends React.Component{

    state = {
        persons:[]
    }

  getNetwork = async () => {
        let response = await fetch("https://striveschool.herokuapp.com/api/profile/",{
            method: "GET",
            headers:{
                Authorization: "Basic "+ btoa("user30:E6tYs6PBzufRfsVP"),
            }
        });

            let persons= await response.json()
            console.log(persons)
            this.setState({persons:persons})
            console.log(this.state.persons)
    }

   

    componentDidMount = async ()=>{
        await this.getNetwork()
    }

    render(){
       
        return(
            <>
            <div className="container mt-4 d-flex py-5">
                <div className="row text-center ">
                    
            {this.state.persons.map(person =>{

                return(
                    <div className="col" className = "col-lg-3 mr-3">
                    <NetworkComp key = {person.id} data = {person}/>
                    </div>
                    
                )
            })}
            
             </div>
            </div>
            </>
        )
    }

   
}



export default NetworkP