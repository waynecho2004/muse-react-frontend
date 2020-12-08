import React, { Component } from 'react';
import axios from 'axios';
import SongList from './SongList';
import CreateSongForm from './CreateSongForm'
import { Grid } from 'semantic-ui-react';

class SongContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    }
  }
  componentDidMount() {
    this.getSongs();
  }
  getSongs = async () => {
    try {
      const parsedSongs = await axios(
        process.env.REACT_APP_FLASK_API_URL + '/api/v1/songs/'
      );
      console.log(parsedSongs.data.data);
      await this.setState({
        songs: parsedSongs.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // It's a good practice to make it async to enhance performance
  addSong = async (e, song) => { 
    e.preventDefault();
    console.log(song);

    try {
      // The createdSongResponse variable will store the response from the Flask API
      // source: github.com/axios/axios
      const createdSongResponse = await axios({
        method: 'POST',
        url: process.env.REACT_APP_FLASK_API_URL + '/api/v1/songs/',
        data: song,  // this is the song json object
        headers: {   // make sure the content-type is 'application/json'
          'Content-Type': 'application/json',
        },
      });

      // we are emptying all the songs that are living in state into a new array,
      // and then adding the song we just created to the end of it
      // the new song which is called parsedResponse.data
      console.log(createdSongResponse.data.data, ' this is response');

      // Following is more efficient way adding new song:
      //    adding to the state if successfully, instead of calling api to reload
      this.setState({
        songs: [...this.state.songs, createdSongResponse.data.data],
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  render() {
    return (
      <Grid columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
        <Grid.Row>
          <Grid.Column>
            <SongList songs={this.state.songs} />
          </Grid.Column>
          <Grid.Column>
            <CreateSongForm addSong={this.addSong} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default SongContainer
