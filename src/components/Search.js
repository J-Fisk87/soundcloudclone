import React, { Component } from "react";
import UserCard from "./UserCard"
import TrackCard from "./TrackCard"

import { 
    Button,
    Form,
    Container,
    Header,
    Card,
    Divider 

} from 'semantic-ui-react';
// import ReactPlayer from "react-player";


export default class Search extends Component { 

    constructor(props) {
        super(props)
        this.state= {
            searchType: "tracks",
            searchResults: [],
            searchText: this.props.location.search.split("=")[1]
        }
    }

    componentDidMount() {
        fetch(`http://localHost:3000/api/${this.state.searchType}/search/${this.state.searchText}`).then(res => res.json()).then(json => this.setState({searchResults: json[this.state.searchType]}))
        this.unlisten = this.props.history.listen((location, action) => {
            fetch(`http://localHost:3000/api/${this.state.searchType}/search/${location.search.split("=")[1]}`)
            .then(res => res.json())
            .then(json => this.setState({searchResults: json[this.state.searchType], searchText: location.search.split("=")[1]}))
        });
    }
    componentWillUnmount() {
        this.unlisten();
    }

    toggleSearchType = e => {
        let newSearchType = this.state.searchType == "tracks" ? "users" : "tracks";
        fetch(`http://localHost:3000/api/${newSearchType}/search/${this.state.searchText}`)
            .then(res => res.json())
            .then(json => this.setState({searchResults: json[newSearchType], searchType: newSearchType}))
            
    }

    render() {
        let {searchType, searchText, searchResults} = this.state;
        return (
            <Container text>
                <Button onClick={this.toggleSearchType} active={searchType == "tracks" ? true : false} attached='left'>Tracks</Button>
                <Button onClick={this.toggleSearchType} active={searchType == "users" ? true : false}>Users</Button>
                <Divider/>
                {searchResults.length == 0 ? <Header as="h3">No {searchType} were found for: {searchText}</Header> : null}
                <Container>
                    <Card.Group itemsPerRow={1}>
                        {searchResults.map(result => searchType == "tracks" 
                        ? <TrackCard isCurrentUser={result.user_id == this.props.user.id} track={result}/> 
                        : <UserCard {...this.props} user={result}/>)}
                    </Card.Group>
                </Container>
            </Container>
        );
    }
}