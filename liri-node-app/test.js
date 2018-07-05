var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id:'e6ad0b1fb05d4fcaa8de839a331cd10d',
  secret:'39abd8c2bc1a42a1b93e59c35717ec39'
});
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })