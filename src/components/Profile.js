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
      isFollowing: false,
      user: null
    };
  }

  // 'follow' button (put 'api/users/:id/follow_user/:follower_id', to: 'users#follow_user')

  componentDidMount() {
    this.fetchProfileData()
  }

  fetchProfileData = () => {
    console.log(`current user: ${this.props.user.id}`)
    let windowPath = window.location.pathname.split("/");
    let id = windowPath[windowPath.length - 1];
      // fetch a foreign profile and follower info
      fetch(URL + `/api/users/${id}`)
        .then((res) => res.json())
        .then((user) => {
            // console.log(`${JSON.stringify(this.props.currentUser)} ${id}`)
          fetch(
            URL + `/api/users/${this.props.user.id}/is_following/${id}`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              this.setState({
                isFollowing: data.is_following,
                user: user,
              });
            });
          fetch(URL + `/api/users/${id}/tracks`)
            .then((r) => r.json())
            .then((json) => this.setState({ tracks: json }));
        });
  }

  toggleFollowingState = () => {
      let newFollowingState = this.state.isFollowing == true ? false : true;
      console.log(newFollowingState)
      this.setState({isFollowing: newFollowingState})
  }

  // your page, following = null, viewedUser = you
  // other page, following = bool, viewedUser = them

  render() {
    // let { user } = this.state.viewedUser;
    return this.state.user ? (
      <Container text>
        <ProfHeader
          user={this.state.user}
          isCurrentUser={false}
          following={this.state.isFollowing}
          toggleFollowingState={this.toggleFollowingState}
          currentUserId={this.props.user.id}
        />
        <h3>Tracks:</h3>
        <Tracklist tracks={this.state.tracks} />
      </Container>
    ) : (
      <Container text content={"Loading, please wait"} />
    );
  }
}
