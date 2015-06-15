'use strict';

var curl = require('easy-get');

module.exports = {
  // Makes a request to the OMDBapi to get JSON object about a movie specified
  request: function OMDBApiRequest(movieTitle, callback) {
    curl('http://www.omdbapi.com/?t=' + safaEncodeURIComponent(movieTitle) + '&y=&plot=short&r=json', function (err, res) {
      if (err) {
        callback(err);
      } else {
        var movieParsed = JSON.parse(res.text);
        callback(null, movieParsed);
      }
    });
  }
};

function safaEncodeURIComponent(text) {
  try {
    return encodeURIComponent(text);
  } catch (e) {
    return text;
  }
}
