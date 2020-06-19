import React, { Component } from 'react';
import './Feed.css'
import {Form,Row,Col} from 'react-bootstrap'
import Post from './Post'
import { FaCamera, FaVideo, FaStickyNote, FaPenSquare } from 'react-icons/fa'
class Feed extends Component {
    state = {
        posts: []
        // newpost:{
        //     text:""
        // }
    }
  
    componentDidMount = async () => {
        let response = await fetch("https://striveschool.herokuapp.com/api/posts/", {
            method: "GET",
            headers: new Headers({
                "content-type": "application/json",
                "Authorization": "Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            })
        })
        let posts = await response.json()
        this.setState({
            posts
        })
    }
    // handleNewPost = (e) => {
    //     let newpost = this.state.newpost
    //     let id  = e.currentTarget.id;
    //     newpost[id] = e.currentTarget.value
    //     this.setState({
    //         newpost
    //     })
    // }
    render() {
        return (
            <>
                <div className="create-post">
               <div id='start-a-post-wrapper'>
                  <Row className="container">
                <Col xl={5} id='start-a-post-col1'>
               <a type="button" id="feed-start-a-post">
               <i class="fa mt- fa-1x fa-edit"></i> Start a post
               </a>
                </Col>
              <Col xl={2} id='start-a-post-col2'>
                  <a>
              <i className="mx-3 mt-3"><FaCamera style={{ color: "#666666" }} size={25} /></i>
                  </a>
                </Col> 
              <Col xl={2} id='start-a-post-col3'>
              <i className="mx-3"><FaVideo style={{ color: "#666666" }} size={25} /></i>
                </Col> 
              <Col xl={2} id='start-a-post-col4'>
              <i className="mx-3"><FaStickyNote style={{ color: "#666666" }} size={25} /></i>
                </Col>    
                </Row> 
               </div>
               <div>
                   <div>
                       <span className="mx-1" >
                       <small>
                        Write an article 
                        </small>
                        <small className="mx-2">on Linkedin</small>
                       </span>
                   </div>
               </div>
                </div>
                {this.state.posts.splice(2,6).map((post, index) =>
                    <div className='feedwrapper mt-2' key={index}>
                        <div className="d-flex justify-content-between container">
                            <span><a href="/">Quadri Akande Omofolarin</a><small className="mx-1">likes this</small></span>
                            <i className="fa fa-ellipsis-v fa-2x  mt-1 mr-1"></i>
                        </div>
                        <hr></hr>
                        <div className="d-flex flex-row">
                            <img className="profilePic mx-1" src={post.user.image} alt="Profile pic" />
                            <ul id="experience-list">
                                <li id="job">{post.user.name} {post.user.surname}</li>
                                <li>{post.user.bio}</li>
                                <li id="experience-date">{post.user.title}</li>
                            </ul>
                        </div>
                        <span className="container">{post.text}</span>
                        <div>
                            <img src="https://via.placeholder.com/540" className="feedimage"></img>
                        </div>
                        <span className="container"><i class="fa fa-thumbs-up" aria-hidden="true"></i>
                            <a href='/' className="mx-2"><small>41 - 1 comments</small></a>
                        </span>
                        <hr></hr>
                        <span className="container feed-footer-icons mb-4">
                            <a href='/'><i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                <span className="mx-2 feed-footer">Like</span></a>
                            <a href='/'><i class="fa fa-comment"></i>
                                <span className="mx-2 feed-footer">Comment</span></a>
                            <a href='/'><i class="fa fa-share"></i>
                                <span className="mx-2 feed-footer">Share</span></a>
                        </span>
                    </div>
                )}
            </>
        );
    }
}

export default Feed;