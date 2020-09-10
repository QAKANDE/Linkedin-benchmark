import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';
import NewsFeedPage from './components/NewsFeedPage'
import NetworkP from './components/NetworkP'
import Messages from './components/Messages'
import SignIn from './components/SignIn'
import register from './components/Register'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' exact component={SignIn}/>
      <Route path='/register' exact component={register}/>
      <Route path='/profile/:userId' exact component={App}></Route>
      <Route path='/home/' exact component={NewsFeedPage}></Route>
      <Route path='/NetworkP' exact component= {NetworkP}></Route>
      <Route path="/messages" exact component = {Messages}></Route>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
