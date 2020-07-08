import React, { Component } from "react";
import { 
    Menu,
    Container,
    Card,
    Header

} from 'semantic-ui-react'
import TrackCard from "./TrackCard";
// import ReactPlayer from "react-player";


export default class Home extends Component {
   
    constructor(props) {
        super(props)       
        this.state = {
            user: props.user,
            feed: []
        }
    }

    componentDidMount() {
        this.fetchTracks()
    }

    fetchTracks() {
        fetch('http://localHost:3000/api/users/1/feed').then(res => res.json()).then(data => {
            this.setState({feed: data.feed})
        })
    }
 
    render() {
        return (
        <div>
            <Container text>
            <Header as='h3'>Hear the latest tracks from the people you’re following:</Header>
            <Card.Group itemsPerRow={1}>
                {this.state.feed.map(track => <TrackCard track={track}/>)}
            </Card.Group>
            </Container>
        </div>
        );
    }
}