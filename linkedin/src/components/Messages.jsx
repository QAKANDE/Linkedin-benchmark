import React from 'react';
import io from 'socket.io-client';


class Messages extends React.Component{

    socket = null;

    state= {
        username:null,
        messages:[],
        message:{
        recUsername:null,
        message: "",
        
        },
        users:[]

    };

    componentDidMount(){
        const connOpt ={
            transports:["websocket"],
        };
        this.socket = io(
            `https://striveschool-test.herokuapp.com/api/messages/${this.state.username}`, connOpt,{
                method:"GET",
                headers:{
                    Authorization:"Basic" + btoa("user30:E6tYs6PBzufRfsVP")
                }
            });
            this.socket.on("bmsg", (msg) =>
              this.setState({messages:this.state.messages.concat(msg)})
            );
    };

    render(){
        return(
            <h1>Hello</h1>

        )
    }
}


export default Messages