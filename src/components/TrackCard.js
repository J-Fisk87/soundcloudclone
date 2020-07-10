import React, { Component } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { Card } from "semantic-ui-react";
import ReactPlayer from "react-player/lazy";

export default function TrackCard(props) {
    let { title, audio, username, user_id } = props.track;
    let history = useHistory()

    return (
      <Card>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
            <Card.Meta onClick={() => !props.isCurrentUser ? history.push(`profile/${user_id}`) : null}>{username}</Card.Meta>
          <Card.Description>
            <ReactPlayer controls={true} url={audio} height="75px"/>
          </Card.Description>
        </Card.Content>
      </Card>
    );
}