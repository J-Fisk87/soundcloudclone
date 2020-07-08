import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { 
    Menu,
    Container 

} from 'semantic-ui-react'
import PropTypes from "prop-types";
// import ReactPlayer from "react-player";


export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: window.location.pathname.replace("/", "")
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    }

    componentDidMount() {
        
    }
 
    render() {
        const { activeItem } = this.state
        return (
            <Menu stackable>
                <Container text>
                    <Link to='/home'>
                        <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        >
                        Home
                        </Menu.Item>
                    </Link>

                    <Link to='/profile'>
                        <Menu.Item
                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={this.handleItemClick}
                        >
                        Profile
                        </Menu.Item>
                    </Link>

                    <Link to='/upload'>
                        <Menu.Item
                        name='upload'
                        active={activeItem === 'upload'}
                        onClick={this.handleItemClick}
                        >
                        Upload
                        </Menu.Item>
                    </Link>
                </Container>
            </Menu>
        );
    }
}