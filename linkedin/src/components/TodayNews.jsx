import React, { Component } from 'react';
import{Container,Row,Col, Button} from 'react-bootstrap'
import './TodayNews.css'
class TodayNews extends Component {
   
    render() { 
        return (
            <>
            
            <div className='sidenews '>
                <div className="container">
                    <small>Today's news and views</small>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href='/'>
                            <div>
                            <small id='newsheadline'>Jaguar LandRover to provide jobs</small><br></br>
                            <small>1 day ago - 2 Readers</small>
                            </div>
                            </a>
                        </li>
                        <li>
                        <a href='/'>
                            <div>
                            <small id='newsheadline'>UK Economy won't change</small><br></br>
                            <small>5 days ago - 134 Readers</small>
                            </div>
                            </a>
                        </li>
                        <li>
                        <a href='/'>
                            <div>
                            <small id='newsheadline'>Changes to furlough scheme</small><br></br>
                            <small>1 hour ago - 200 Readers</small>
                            </div>
                            </a>
                        </li>
                        <li>
                        <a href='/'>
                            <div>
                            <small id='newsheadline'>Black Lives Matter</small><br></br>
                            <small>3 hour ago - 240 Readers</small>
                            </div>
                            </a>
                        </li>
                        <li>
                        <a href='/'>
                            <div>
                            <small id='newsheadline'>Africa Creates New Warheads</small><br></br>
                            <small>1 hour ago - 200 Readers</small>
                            </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
                <div className='advert mt-4'>
                 <div className='discount container'>
            <div className='d-flex flex-row-reverse'>
                <i className="fa fa-ellipsis-h mx-2"></i>
                <span>Ad</span>
            </div>
            <div className="d-flex flex-column">
            <span>Quadri,invest in your future with this exclusive offer</span>
            <img className='logo mx-5' alt=''src="https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg"></img>
            </div>
            <p>Enjoy 50% off 2 months of Linkedin Premium!</p>
            <div className="d-flex justify-content-center">
            <Button variant="outline-secondary">Get 50% off today</Button>
            </div>
            </div>
                </div>
                <div id="side-profile-footer " >
               <div className = "d-flex justify-content-between container side-profile-footer">
                   <a href="#"><small>About</small></a>
                   <a href= "#"><small>Accessibility</small></a>
                   <a href="#"><small>Help Center</small></a>
               </div>
               <div  className = " d-flex justify-content-between ">
                   <a href="/">
                   <select id="privacy" style={{fontSize:"small"}}>
                        <option>
                        Privacy and Terms
                         </option>
                       </select>
                   </a>
                   <a href= "#" className="mr-4"><small>AdChoices</small></a>
                   <a href="#"><small>Advert</small></a>

               </div>
                
               <div  className =" d-flex justify-content-between">
                   <a href="#" className="mr-4"><small>
                   <select id="privacy">
                        <option>
                       Business Services
                         </option>
                       </select>
                       </small>
                   </a>
                   <a href= "#"><small>Get Linkedin app</small></a>
                   </div>
                   <div className="d-flex justify-content-center">
                       <a href="#">More</a>
                   </div>

                   <div className="mt-2 text-center">
                       LinkedInCorporation @ 2020
                   </div>
                   </div>


               </>
                
          );
    }
}
 
export default TodayNews;