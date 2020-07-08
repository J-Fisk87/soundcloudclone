import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
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
        const {email, password} = this.state
        let user = {
            email: email,
            password: password
            }
        
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user: user})
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.logged_in) {
                    this.props.handleLogin(data)
                    this.redirect()
                } else {
                    this.setState({
                    errors: data.errors
                    })
                }
            })
            .catch(error => console.log('api errors:', error))
        };

        redirect = () => {
            fetch('http://localhost:3000/logged_in')
            .then(res => res.json())
            .then(json => {
            console.log(json)
            })
            .catch(error => console.log('api errors:', error))
            this.props.history.push('/')
          }

    render() {
        const {email, password} = this.state
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  <Image src='/logo.png' /> Log-in to your account
                </Header>
                <Form size='large' onSubmit={this.handleSubmit}>
                  <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name='email' value={email} onChange={this.handleChange}/>
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
                        {
                            this.state.errors ? this.state.errors.map(e => {
                               return  (
                                    <Message>
                                    {e}
                                    </Message>
                                )
                            }) : null
                        }
                  </Segment>
                </Form>
                <Link to='/signup'>
                    <Message>
                    New to us? Sign Up
                    </Message>
                </Link>
              </Grid.Column>
            </Grid>
          )
    }
}