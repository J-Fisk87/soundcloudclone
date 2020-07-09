import React, { Component } from "react";
import { Menu, Container, Grid } from "semantic-ui-react";
import TrackCard from "./TrackCard";
import Tracklist from "./Tracklist";
import ProfHeader from "./ProfHeader";
// import ReactPlayer from "react-player";

const URL = "http://localHost:3000/";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      viewedUser: {},
    };
  }

  // profile header with username, email,
  // 'follow' button (put 'api/users/:id/follow_user/:follower_id', to: 'users#follow_user')
  // profile body is a list of track cards uploaded by the user, has title and audio player

  // fetch tracks for viewed user, also set viewedUser
  // backend needs set up to render all tracks from single user
  //   componentDidMount() {
  //     fetch(URL + "")
  //       .then((r) => r.json())
  //       .then((json) => this.setState({ tracks: json })),
  //     this.setState({viewedUser: })
  //   }

  render() {
    // let { user } = this.state.viewedUser;
    let { tracks } = this.state.tracks;
    return (<ProfHeader user={this.state.viewedUser} />), (<Tracklist tracks={tracks} />);
  }
}
