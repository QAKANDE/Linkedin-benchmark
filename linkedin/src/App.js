import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dropdown, Image } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Content from './components/Content'
import { Row, Col, Container } from 'react-bootstrap'
import Profile from './components/Profile'
import Footer from './components/Footer'
import SideProfile from './components/SideProfile'
import Experience from './components/Experience'
import About from './components/About'


class App extends React.Component {
  state = {
    data: '',
    search: null,
    status: true,

  }
  fetchData = async () => {
    await fetch("https://striveschool.herokuapp.com/api/profile/", {
      headers: new Headers({
        'Authorization': 'Basic ' + btoa('user19:Hxx8R4wZfCANamrj'),
        "Content-Type": "application/json",
      }),
    })
      .then(response => response.json())
      .then(respObj => this.setState({
        data: respObj,
      }))

  }
  componentDidMount() {
    this.fetchData()
  }

  searchedField = (searched) => {
    if (searched) {
      this.setState({
        search: searched,
        status: true
      });
    } else {
      this.setState({
        search: '',
        status: false
      });
    }
  }


  render() {
    return (

      <>

        <Router>
          <NavBar search={this.searchedField} status={this.state.status} users={this.state.data && this.state.search &&
            this.state.data.filter(user => user.name.toLowerCase().startsWith(this.state.search.toLowerCase())).length > 0 ?
            this.state.data
              .filter(user => user.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
              .map((user, i) =>
                <Dropdown.Item key={i} href={"/" + user.username}>{user.name} {user.surname} - {user.bio}</Dropdown.Item>
              )
            :
            <Dropdown.Item href="#/action-1">No user found</Dropdown.Item>
          }
          />
          <Route path="/:username" component={Content} />

          <Container>
            <Row className="mx-2">
              <Col lg={8}>
                <div className='profilewrap mt-5'>
                  <Profile />
                </div>
                <div className='aboutwrap mt-3'>
                  <About />
                </div>
                <div className='experiencewrap mt-3'>
                  <Experience />
                </div>
              </Col>
              <Col lg={4}>
                <div className="mt-5">
                  <SideProfile />
                </div>
              </Col>
            </Row>
          </Container>

          <Footer />

        </Router>
      </>

    );


  }
}
export default App;
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Row, Col, Container } from 'react-bootstrap'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import NavBar from './components/NavBar'
// import Profile from './components/Profile'
// import Footer from './components/Footer'
// import SideProfile from './components/SideProfile'
// import Experience from './components/Experience'
// import About from './components/About'
// import Post from './components/Post'

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Container>
//         <Post />
//         <Row className="mx-2">
//           <Col lg={8}>
//             <div className='profilewrap mt-5'>
//               <Profile />
//             </div>
//             <div className='aboutwrap mt-3'>
//               <About />
//             </div>
//             <div className='experiencewrap mt-3'>
//               <Experience />
//             </div>
//           </Col>
//           <Col lg={4}>
//             <div className="mt-5">
//               <SideProfile />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <Footer />
//     </div>


//   );
// }

// export default App;
