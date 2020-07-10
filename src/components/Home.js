import React, { Component } from "react";
import { 
    Menu,
    Container,
    Card,
    Header,
    Divider

} from 'semantic-ui-react'
import TrackCard from "./TrackCard";

export default class Home extends Component {
   
    constructor(props) {
        super(props)       
        this.state = {
            feed: []
        }
    }

  fetchTracks() {
    fetch("http://localHost:3000/api/users/1/feed")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.feed)
        this.setState({ feed: data.feed });
      });
  }

  componentDidMount() {
      this.fetchTracks()
  }
 
    render() {
        return (
        <div>
            <Container text>
                <Header as='h3'>Hear the latest tracks from the people you’re following:</Header>
                <Card.Group itemsPerRow={1}>
                    {this.state.feed.map(track => <TrackCard isCurrentUser={track.user_id === this.props.user.id} track={track}/>)}
                </Card.Group>
            </Container>
        </div>
        );
    }
}
