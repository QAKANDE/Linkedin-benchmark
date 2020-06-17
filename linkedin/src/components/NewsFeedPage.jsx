import React, { Component } from 'react';
import {Row,Col,Container} from 'react-bootstrap'
import NewsFeedWelcome from './NewsFeedWelcome'
import './NewsFeed.css'
import TodayNews from './TodayNews';
import Feed from './Feed'
class NewsFeedPage extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
         <Row className="mt-5">
             <Col className="welcome" xl={2}>
                 <NewsFeedWelcome/>
             </Col>
             <Col className="feed mx-1"xl={6}>
                 <Feed/>
             </Col>
             <Col className="todayNews " xl={3}>
                <TodayNews/>
             </Col>
         </Row>
            </Container>
        );
    }
}
 
export default NewsFeedPage;