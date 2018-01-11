/*
const clientId = 'c9a8e8bbbf82457cae993d5fddcda0be';
const accessToken = '';
const redirect_uri = 'localhost:3000';

const url = ('https://accounts.spotify.com/authorize' + '?response_type=code' + '&client_id=' + clientId + '&redirect_uri=' + redirect_uri);

export const Spotify = {
  getAccessToken() {
    if(accessToken) {
      return accessToken;
    }else {
      window.location.href = url;
    }
  }
};

Spotify.getAccessToken();
*/

const clientId = 'c9a8e8bbbf82457cae993d5fddcda0be';
const redirectUri = 'localhost:3000';
let accessToken;
let expiresIn;

const Spotify = {

  getAccessToken()
  {
    if(accessToken)
      return accessToken;

    else if(window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/))
    {
      accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];

      window.setTimeout(() => accessToken = '', expiresIn*1000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    }
    else
    {
      let url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = url;
    }
  },

  search(term) {
    ///v1/tracks?ids={ids}
    const url = 'https://api.spotify.com/v1/search?type=track&q=' + term;

    fetch(url,
    {
      headers: {
           'Authorization': 'Bearer ' + accessToken
       }
    }
    ).then(function(response) {
      console.log(response.json());
    	return response.json();
    }).then(function(returnedValue) {
    	console.log(returnedValue);
    }).catch(function(err) {
    	console.log(err);
    });

  },
};

export default Spotify;
