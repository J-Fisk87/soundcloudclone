import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          username: '',
          email: '',
          password: '',
          password_confirmation: '',
          errors: ''
         };
      }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      };

    handleSubmit = (event) => {
        event.preventDefault()
      };

    render() {
        const {username, email, password} = this.state
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  <Image src='/logo.png' /> Create Account
                </Header>
                <Form size='large'>
                  <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name='email' value={email} onChange={this.handleChange} />
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='username' name='username' value={username} onChange={this.handleChange} />
                    <Form.Input
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                      name='password' 
                      value={password} 
                      onChange={this.handleChange} 
                    />
          
                    <Button color='teal' fluid size='large'>
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Link to='/login'>
                    <Message>
                    Already have an account <a href='#'>Login</a>
                    </Message>
                </Link>
              </Grid.Column>
            </Grid>
          )
    }
}