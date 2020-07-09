import React, { Component } from "react";
import { Card } from "semantic-ui-react";
// import ReactPlayer from "react-player";

export default class TrackCard extends Component {
  render() {
    let { title, audio, username, user_id } = this.props.track;
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span>{username}</span>
            <span className="hidden">{user_id}</span>
          </Card.Meta>
          <Card.Description>audio player goes here</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
