import React, { Component } from 'react';
import HomepageLayout from './components/WelcomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile'
import Upload from './components/Upload'
import NavBar from './components/NavBar'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, useLocation} from 'react-router-dom'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {},
     };
  }

  componentDidMount() {
    this.loginStatus()
    fetch('http://localHost:3000/api/users/1').then(res => res.json()).then(user => {
      console.log(user)
      this.setState({user: user})
    })
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
    let {user} = this.state;
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/home' render={props => <Home user={user}/>}/>
            <Route exact path='/profile/:id' render={props => <Profile currentUser={user} />}/>
            <Route exact path='/myprofile' render={props => <Profile user={user}/>}/>
            <Route exact path='/upload' render={props => <Upload {...props} user={user}/>}/>
            <Route exact path='/' render={props =>  this.state.isLoggedIn ? <div></div> : <HomepageLayout {...props} loggedInStatus={this.state.isLoggedIn}/>}/>
            <Route exact path='/login' render={props => <Login {...props} loggedInStatus={this.state.isLoggedIn} handleLogin={this.handleLogin}/>}/>
            <Route exact path='/signup' render={props => <Signup {...props} loggedInStatus={this.state.isLoggedIn} handleLogin={this.handleLogin}/>}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
