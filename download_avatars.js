var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "Kyoudron";
var GITHUB_TOKEN = "7d4bcc881a09ed0eda36b17c270c67b2b2173df3";

// var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

// console.log(GITHUB_TOKEN)

// console.log(requestURL)

function getRepoContributors(repoOwner, repoName, cb) {

var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

console.log(requestURL)


  // request.get('https://github.com/nodejs/node')
  // .on('response', function(response){
  //   console.log("working", response)
  }
// }

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
