import React, { Component } from "react";
import { Menu, Container, Grid } from "semantic-ui-react";
import TrackCard from "./TrackCard";
// import ReactPlayer from "react-player";

const URL = "http://localHost:3000/";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
    };
  }

  componentDidMount() {
    fetch(URL + "");
  }

  render() {
    // let { user } = this.props.viewedUser;
    let { tracks } = this.state.tracks;
    return (
      <Container text>
        {tracks.map((t) => (
          <TrackCard track={t} />
        ))}
      </Container>
    );
  }
}
