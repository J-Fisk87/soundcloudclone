import React, { Component } from "react";
import { 
    Button,
    Form,
    Container 

} from 'semantic-ui-react'
// import ReactPlayer from "react-player";


export default class Upload extends Component {

    onSubmit = (e) => {
        e.preventDefault()
        let formObj = {
            user_id: this.props.user.id,
            title: e.target.title.value,
            audio_data: e.target.audio_data.files[0]
        }
        const data = new FormData()
        Object.keys(formObj).forEach((key, value) => {
            data.append(key, formObj[key])
        })
        fetch('http://localHost:3000/api/tracks/new', {
            method: 'POST',
            body: data
        }).then(res => res.json()).then((json) => {
            this.props.history.push('/home/1')
        })
    }
 
    render() {
        return (
            <Container text>
                <Form encType="multipart/form-data" onSubmit={this.onSubmit}>
                    <Form.Field>
                    <label>Title</label>
                    <input name="title" placeholder='Title' />
                    </Form.Field>
                    <Form.Field>
                        <input type="file" name="audio_data" accept=".mp3,audio/*" />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
        );
    }
}