import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Tracklist from "./Tracklist";
import ProfHeader from "./ProfHeader";
// import ReactPlayer from "react-player";

const URL = "http://localHost:3000/";

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      isFollowing: false,
      user: null
    };
  }

  // 'follow' button (put 'api/users/:id/follow_user/:follower_id', to: 'users#follow_user')

  componentDidMount() {
    this.fetchProfileData()
  }

  fetchProfileData() {
      fetch(URL + `/api/users/${this.props.user.id}/tracks`)
        .then((r) => r.json())
        .then((json) => {
            this.setState({ tracks: json, user: this.props.user })
        });
  }

  // your page, following = null, viewedUser = you
  // other page, following = bool, viewedUser = them

  render() {
    // let { user } = this.state.viewedUser;
    return this.state.user ? (
      <Container text>
        <ProfHeader
          isCurrentUser={true}
          user={this.props.user}
          following={false}
        />
        <h3>Tracks:</h3>
        <Tracklist isCurrentUser={true} tracks={this.state.tracks} />
      </Container>
    ) : (
      <Container text content={"Loading, please wait"} />
    );
  }
}
