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
      viewedUser: {},
    };
  }

  // 'follow' button (put 'api/users/:id/follow_user/:follower_id', to: 'users#follow_user')

  // when looking at your own profile, fetch props.user tracks. Follow button should be off
  // when looking at another profile, fetch that user's data (incl tracks and followee status)

  componentDidMount() {
    if(this.props.user){
        fetch(`/api/users/`)
    }


      // fetch a foreign profile and follower info
    if (this.props.user_id != this.props.user.id) {
      fetch(`/api/users/${this.props.user_id}`)
        .then((res) => res.json())
        .then((user) => {
          fetch(`/api/users/${this.props.user.id}/is_following/${user.id}`)
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
    return (
      <Container text>
        <ProfHeader
          user={this.props.user}
        />{" "}
        <br />
        Tracks:
        <Tracklist tracks={this.state.tracks} />
      </Container>
    );
  }
}
