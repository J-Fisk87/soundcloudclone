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
      isFollowing: null,
    };
  }

  // 'follow' button (put 'api/users/:id/follow_user/:follower_id', to: 'users#follow_user')

  componentDidMount() {
    let windowPath = window.location.pathname.split("/");
    let id = windowPath[windowPath.length - 1];
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
              console.log(data);
              this.setState({
                isFollowing: data.is_following,
                viewedUser: user,
              });
            });
          fetch(URL + `/api/users/${id}/tracks`)
            .then((r) => r.json())
            .then((json) => this.setState({ tracks: json }));
        });
    }
  }

  // your page, following = null, viewedUser = you
  // other page, following = bool, viewedUser = them

  render() {
    // let { user } = this.state.viewedUser;
    return this.state.viewedUser ? (
      <Container text>
        <ProfHeader
          user={this.props.user}
          viewedUser={this.state.viewedUser}
          following={this.state.isFollowing}
        />
        <h3>Tracks:</h3>
        <Tracklist tracks={this.state.tracks} />
      </Container>
    ) : (
      <Container text content={"Loading, please wait"} />
    );
  }
}
