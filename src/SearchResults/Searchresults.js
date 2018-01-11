import React from 'react';
import './Searchresults.css';
import { Tracklist } from '../Tracklist/Tracklist.js';

export class SearchResults extends React.Component {
  render() {
    return(
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist onAdd={this.props.onAdd} tracks={this.props.results} />
      </div>
    );
  }
}
