import React from 'react';
import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.datas);
  }

  removeTrack() {
    this.props.onRemove(this.props.datas);
  }

  render() {
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.datas.name}</h3>
          <p>{this.props.datas.artist} | {this.props.datas.album}</p>
        </div>
        {this.props.add ? <a className="Track-action" onClick={this.addTrack}>+</a> : <a className="Track-action" onClick={this.removeTrack}>-</a>}
      </div>
    );
  }
}
