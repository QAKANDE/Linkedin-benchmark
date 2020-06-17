import React, { Component } from 'react';
import './Feed.css'
import Post from './Post'
class Feed extends Component {
    state = { 
        posts:[]
     }
     componentDidMount = async () => {
         let response = await fetch("https://striveschool.herokuapp.com/api/posts/",{
            method:"GET",
            headers:new Headers({
                "content-type":"application/json",
                "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            })
         })
         let posts = await response.json()
         this.setState({
             posts
         })
     }
    render() { 
        return (   
            <>
            <div className="create-post">
            <Post />
            </div> 
            {this.state.posts.map((post,index)=>
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
            <span className="mx-2">Like</span></a>
            <a href='/'><i class="fa fa-comment"></i>
            <span className="mx-2">Comment</span></a>
            <a href='/'><i class="fa fa-share"></i>
            <span className="mx-2">Share</span></a>
            </span>
        </div> 
            )}
        </>
        );
    }
}
 
export default Feed;