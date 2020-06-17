import React from 'react'
import{Container,Row,Col, Button} from 'react-bootstrap'
import './SideNews.css'

const SideNews = ()=>{
    return(
            <>
                <div className="col-4">
                <div className="news-feed mb-3 card" style={{width:"24rem"}}>
                <Row className = "d-flex mb-4">
                    <Col lg={10}><p className="feed">Add to your feed</p></Col>
                    <Col lg={2}><i class="fa fa-2x fa-exclamation-circle"></i></Col>
                </Row>
                <Row className = "d-flex ">
                    <Col lg={2}><i class="fa fa-3x fa-apple ml-3"></i></Col>
                    <Col  lg={6} className= "d-inline app-news"><p><strong>Apple</strong> <br/> Company Comsumer Electronics</p></Col>
                    <Col lg ={4}>
                    <span><Button variant = "outline-primary" size ="lg" className ="ml-2">Follow</Button></span>
                    <span><i class="fa fa-plus mr-5 "></i></span>
                    </Col>
                    
                </Row>
                <Row className = "d-flex mb-4 ">
                    <Col lg={2}><i class="fa fa-3x fa-hashtag ml-3"></i></Col>
                    <Col lg={6} className="news"><p>#covid19</p></Col>
                    <Col lg={4}><span><Button variant = "outline-primary" size ="lg"className ="ml-2">Follow</Button></span>
                    <span><i class="fa fa-plus mr-5 "></i></span>
                    </Col>
                </Row>
                <Row className = "d-flex mb-4 ">
                    <Col lg={2}><i class="fa fa-3x fa-hashtag ml-3"></i></Col>
                    <Col lg={6} className= "news"><p>#leadership</p></Col>
                    <Col lg={4}><span><Button variant = "outline-primary" size ="lg" className ="ml-2">Follow</Button></span>
                    <span><i class="fa fa-plus mr-5 "></i></span>
                    </Col>
                </Row>
                <div><a href="#" id= "offers">View all recommendations</a></div>
                </div>
                
                <Row className = "d-flex">
                    <Col>
                    <div class="card mb-5 cards" style={{width:"24rem"}}>
                    <div class="card-body">
                        <p class="card-text font-weight-bolder">Your dream <br/>job is closer <br/> than you <br/>think.</p>
                        <button className="bg-primary text-white">See jobs</button>
                        <img src="https://mittforetag.com/wp-content/uploads/2015/10/linkedin_ny-bild-strategier.jpg" className="card-img"alt=""/>
                    </div>
                    </div>
                    </Col>
                </Row>
                
                    <Row className = "mb-2">
                        <Col><a href="#">About</a></Col>
                        <Col> <a href="#">Accessibility</a></Col>
                        <Col> <a href="#">Help Center</a></Col>

                    </Row>
                    <Row className = "mb-2">
                        <Col lg={6}>
                        <select id="privacy">
                        <option>
                        Privacy and Terms
                         </option>
                       </select>
                        </Col>
                        <Col lg={4}><a href="#">Add Choices</a></Col>
                        <Col lg={2}> <a href="#">Advertising</a></Col>
                    </Row>
                    <Row className = "mb-2">
                        <Col lg={6}>
                        <select id="privacy">
                        <option>
                        Business Services
                         </option>
                       </select>
                        </Col>
                        <Col lg={6}><a href="#">Get the Linkedin App</a></Col>
                         </Row>
                         <Row className= "d-flex justify-content-center align-items-center">
                             <Col lg={6} className = "ml-5"><a href="#">More</a></Col>
                         </Row>

               
               
                </div>        
          </>     
    )
}

export default SideNews