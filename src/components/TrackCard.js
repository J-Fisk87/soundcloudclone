import React, { Component } from "react";
import { 
    Card
} from 'semantic-ui-react'
// import ReactPlayer from "react-player";


export default class TrackCard extends Component {

    render() {
        let {title, audio, username} = this.props.track;
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>{username}</Card.Meta>
                    <Card.Description>
                        audio player goes here
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}