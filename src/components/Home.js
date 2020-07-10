import React, { Component } from "react";
import { 
    Menu,
    Container,
    Card,
    Header,
    Divider

} from 'semantic-ui-react'
import TrackCard from "./TrackCard";
// import ReactPlayer from "react-player";


export default class Home extends Component {
   
    constructor(props) {
        super(props)       
        this.state = {
            feed: []
        }
    }

    componentDidMount() {
        this.fetchTracks()
    }

    fetchTracks() {
        fetch(`http://localHost:3000/api/users/1/feed`).then(res => res.json()).then(data => {
            this.setState({feed: data.feed})
        })
    }
 
    render() {
        return (
        <div>
            <Container text>
                <Header as='h3'>Hear the latest tracks from the people you’re following:</Header>
                <Divider/>
                <Card.Group itemsPerRow={1}>
                    {this.state.feed.map(track => <TrackCard isCurrentUser={track.user_id == this.props.user.id} track={track}/>)}
                </Card.Group>
            </Container>
        </div>
        );
    }
}