import React, { Component } from 'react';
import axios from 'axios';
import SongList from './SongList';
import CreateSongForm from './CreateSongForm'
import { Grid } from 'semantic-ui-react';

class SongContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      songs: []
    }
  }
  componentDidMount(){
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
  
  addSong = (e, song) => {  
    console.log(song);
  };

  render(){
    return (
        <Grid columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
          <Grid.Row>
            <Grid.Column>
              <SongList songs={this.state.songs}/>
            </Grid.Column>
            <Grid.Column>
            <CreateSongForm addDog={this.addSong}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
  }
}

export default SongContainer
