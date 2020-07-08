import React, { Component } from 'react';
import HomepageLayout from './components/WelcomePage';
import Login from './components/Login';
import Signup from './components/Signup'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

  componentDidMount() {
    this.loginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  loginStatus = () => {
    fetch('http://localhost:3000/logged_in')
    .then(res => res.json())
    .then(json => {
      console.log(json)
      if (json.logged_in) {
        this.handleLogin(json)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  render() {
    return (
      <div>
         <BrowserRouter>
          <Switch>
            <Route exact path='/' render={props =>  this.state.isLoggedIn ? <div></div> : <HomepageLayout {...props} loggedInStatus={this.state.isLoggedIn}/>}/>
            <Route exact path='/login' render={props => <Login {...props} loggedInStatus={this.state.isLoggedIn} handleLogin={this.handleLogin}/>}/>
            <Route exact path='/signup' render={props => <Signup {...props} loggedInStatus={this.state.isLoggedIn} handleLogin={this.handleLogin}/>}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
