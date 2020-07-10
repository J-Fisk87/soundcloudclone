import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { 
    Card
} from 'semantic-ui-react'
// import ReactPlayer from "react-player";


export default class UserCard extends Component {

    cardClicked = e => {
        this.props.history.push(`/profile/${this.props.user.id}`)
    }

    render() {
        let {username, id, email} = this.props.user;
        return (
                <Card onClick={this.cardClicked}>
                    <Card.Content>
                        <Card.Header>{username}</Card.Header>
                        <Card.Meta>{`${email.split("@")[0]}`}</Card.Meta>
                    </Card.Content>    
                </Card>

        );
    }
}