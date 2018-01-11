import React from 'react';
import './Tracklist.css';
import { Track } from '../Track/Track.js';

export class Tracklist extends React.Component {
  render() {
    return(
      <div className="TrackList">
        {
          this.props.tracks.map((track, id) => {
            return <Track key={track.id} add={true} datas={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} />;
          })
        }
      </div>
    );
  }
}
