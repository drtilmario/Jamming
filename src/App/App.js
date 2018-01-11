import React, { Component } from 'react';
import './App.css';
import { SearchBar } from '../Searchbar/Searchbar.js';
import { SearchResults } from '../SearchResults/Searchresults.js';
import { Playlist } from '../Playlist/Playlist.js';
import Spotify from '../util/Spotify.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults : [
        {
          uri    : 3256,
          id     : 0,
          name   : 'name',
          album  : 'album',
          artist : 'artist'
        },
        {
          uri    : 9924,
          id     : 2,
          name   : 'name2',
          album  : 'album2',
          artist : 'artist2'
        }
      ],

      playlistName : 'new Playlist',

      playlistTracks : [
        {
          uri    : 4354,
          id     : 3,
          name   : 'Playlist Item',
          album  : 'album pl',
          artist : 'artist jj'
        },
        {
          uri    : 1644,
          id     : 4,
          name   : 'Playlist Item 2',
          album  : 'album pls 2',
          artist : 'artist2 ss'
        }
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

    Spotify.getAccessToken();
    Spotify.search('smells');
  }



  addTrack(track) {
    let newId = true;

    this.state.playlistTracks.forEach(function(el) {
      if(track.id === el.id) {
        newId = false;
      }
    });

    if(newId) {
      const playlist = this.state.playlistTracks;
      playlist.push(track);

      this.setState({
        playlistTracks : playlist
      });
    } else {
      return 'Track already added';
    }
  }

  removeTrack(track) {
    let trackRemoveAble = false;

    this.state.playlistTracks.forEach(function(el) {
      if(track.id === el.id) {
        trackRemoveAble = true;
      }
    });

    if(trackRemoveAble) {
      const playlist = this.state.playlistTracks;
      playlist.splice(track,1);

      this.setState({
        playlistTracks : playlist
      });
    } else {
      return 'Track not listed';
    }
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName : name
    });
    console.log(this.state.playlistName);
  }

  savePlaylist() {
    const trackURIs = [];
    const playlist = this.state.playlistTracks;

    playlist.forEach(track => {
      console.log('each track uri' + track.uri);
      trackURIs.push(track.uri);
    });

    console.log(trackURIs);
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        {
          Spotify.test
        }
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
             <SearchResults onAdd={this.addTrack} results={ this.state.searchResults } />
             <Playlist onSave={this.savePlaylist} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} name={this.state.playlistName} results={ this.state.playlistTracks } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
