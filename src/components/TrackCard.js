import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import ReactPlayer from "react-player/lazy";

export default class TrackCard extends Component {
  render() {
    let { title, audio, username, user_id } = this.props.track;
    console.log(`${this.props.isCurrentUser} ${user_id}`);
    return (
      <Card>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Link
            to={`/${
              this.props.isCurrentUser ? "myprofile" : `profile/${user_id}`
            }`}
          >
            <Card.Meta>{username}</Card.Meta>
          </Link>
          <Card.Description>
            <ReactPlayer controls={true} url={audio} />
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
