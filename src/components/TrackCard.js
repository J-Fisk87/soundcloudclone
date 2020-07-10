import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { 
    Card
} from 'semantic-ui-react'
// import ReactPlayer from "react-player";


export default class TrackCard extends Component {

    render() {
        let {title, audio, username, user_id} = this.props.track;
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Link to={`/${this.props.isCurrentUser ? "myprofile" : `profile/${user_id}`}`}>
                        <Card.Meta>{username}</Card.Meta>
                    </Link>
                    <Card.Description>
                        audio player goes here
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}