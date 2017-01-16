var request = require('request');
// var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "Kyoudron";
var GITHUB_TOKEN = "7d4bcc881a09ed0eda36b17c270c67b2b2173df3";


function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': "Github Avatar Downloader - Student Project"
  }
}

request(options, function(error, response, body){
  var parseBody = (JSON.parse(body))
    for (i = 0; i < parseBody.length; i++) {
      console.log(parseBody[i].avatar_url)
    }
  })
}



  // request.get('https://github.com/nodejs/node')
  // .on('response', function(response){
  //   console.log("working", response)
// }

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});


