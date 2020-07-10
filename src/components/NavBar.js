import React, { Component } from "react";
import {Link, useHistory, withRouter} from 'react-router-dom'
import { 
    Menu,
    Container,
    Input,
    Form 

} from 'semantic-ui-react'

function NavBar(props) {

    // onSearchSubmit = e => {
    //     e.preventDefault()
    // }
        const { activeItem } = props
        let history = useHistory()
        return (
            <Menu stackable>
                <Container text>
                    <Link to='/home'>
                        <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        >
                        Home
                        </Menu.Item>
                    </Link>

                    <Link to='/myprofile'>
                        <Menu.Item
                        name='profile'
                        active={activeItem === 'profile'}
                        >
                        Profile
                        </Menu.Item>
                    </Link>

                    <Link to='/upload'>
                        <Menu.Item
                        name='upload'
                        active={activeItem === 'upload'}
                        >
                        Upload
                        </Menu.Item>
                    </Link>
                    <Menu.Item>
                        <Form onSubmit ={(e) => history.push(`/search/?=${e.target.searchText.value}`)}>
                            <Input name="searchText" icon='search' placeholder='Search...' />
                        </Form>
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }

    export default NavBar;