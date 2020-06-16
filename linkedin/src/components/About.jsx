import React, { Component } from 'react';
import './About.css'
class About extends Component {
    state = {  }
    render() { 
        return (
          <div className="container">
              <div className="d-flex justify-content-between">
                  <h3 className="mt-2">About</h3>
                  <i class="fa mt-2 fa-2x fa-edit"></i>
              </div>
              <span>I'm very intelligent</span>
          </div>
          );
    }
}
 
export default About;