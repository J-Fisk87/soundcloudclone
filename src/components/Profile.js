import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Tracklist from "./Tracklist";
import ProfHeader from "./ProfHeader";
// import ReactPlayer from "react-player";

const URL = "http://localHost:3000/";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
    };
  }

  // 'follow' button (put 'api/users/:id/follow_user/:follower_id', to: 'users#follow_user')

  // when looking at your own profile, fetch props.user tracks. Follow button should be off
  // when looking at another profile, fetch that user's data (incl tracks and followee status)

  componentDidMount() {
    let windowPath = window.location.pathname.split("/");
    let id = windowPath[windowPath.length - 1];
    console.log(this.props.user.id);
    if (this.props.user) {
      fetch(URL + `/api/users/${this.props.user.id}/tracks`)
        .then((r) => r.json())
        .then((json) =>
          this.setState({ tracks: json, viewedUser: this.props.user })
        );
    } else {
      // fetch a foreign profile and follower info
      fetch(URL + `/api/users/${id}`)
        .then((res) => res.json())
        .then((user) => {
          fetch(
            URL + `/api/users/${this.props.currentUser.id}/is_following/${id}`
          )
            .then((res) => res.json())
            .then((data) => {
              this.setState({
                isFollowing: data.is_following,
                viewedUser: user,
              });
            });
        });
    }
  }

  render() {
    // let { user } = this.state.viewedUser;
    return this.state.viewedUser ? (
      <Container text>
        <ProfHeader user={this.state.viewedUser} />
        <h3>Tracks:</h3>
        <Tracklist tracks={this.state.tracks} />
      </Container>
    ) : (
      <Container text content={"Loading, please wait"} />
    );
  }
}
