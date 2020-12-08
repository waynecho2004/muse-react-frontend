import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateSongForm extends Component {
    constructor() {
        super();
        
        this.state = {
            title: '',
            artist: '',
            album: ''
        }
    }

    // This method handles the change in the Form.Input
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }

    render() {
        return (
            <Segment>
                <h4>Create Song</h4>
                <Form onSubmit={(e) => {   // this is a Submit event
                    this.props.addSong(e, this.state);  // addSong: pass down from parent component
                    this.setState({ title: '', artist: '', album: ''})  // clear the form after adding a song record
                }}>
                    <Label>Title:</Label>
                    <Form.Input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
                    <Label>Artist:</Label>
                    <Form.Input type='text' name='artist' value={this.state.artist} onChange={this.handleChange} />
                    <Label>Album:</Label>
                    <Form.Input type='text' name='album' value={this.state.album} onChange={this.handleChange} />
                    <Button type='Submit'>Create Song</Button>
                </Form>
            </Segment>
        )
    }
}

export default CreateSongForm;