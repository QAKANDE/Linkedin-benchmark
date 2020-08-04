import React from 'react'
import './Profile.css'
import NetworkComp from './NetworkComp'
import NewsFeedWelcome from './NewsFeedWelcome'
import { Spinner } from 'react-bootstrap'


class NetworkP extends React.Component{

    state = {
        persons:[],
        loading:true
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
            this.setState({persons:persons,loading:false})
            console.log(this.state.persons)
    }

   

    componentDidMount = async ()=>{
        await this.getNetwork()
    }

    render(){
       
        return(
            <>
            <div>No pending Invitations</div>
            <div className="container mt-4  py-5">
                <div className="row text-center ">
                    <div className="col-lg-2">
                        <NewsFeedWelcome/>
                    </div>
                    <div className="col-lg-8">
                    <div className="row">
       
            {this.state.persons.map(person =>{
                
                return(
                    <div className = "col-lg-3 mb-2">
                    <NetworkComp key = {person.id} data = {person}/>
                    </div>
                  
                    
                )
               
            })}
            </div>
              </div>
             </div>
            </div>
            </>
        )
    }

   
}



export default NetworkP