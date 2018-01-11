import React from 'react';
import '../Playlist/Playlist.css';
import { Tracklist } from '../Tracklist/Tracklist.js';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
  }

  changeName(e) {
    const newName = e.target.value;
    this.props.onNameChange(newName);
  }
  render() {
    return(
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.changeName}/>
        <Tracklist onRemove={this.props.onRemove} tracks={this.props.results} />
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}
