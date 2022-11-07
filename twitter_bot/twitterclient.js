require("dotenv").config();
console.log("the twitter bot is starting");
const t = require("./twit");
const twit = require("./twit");
// const twit = require("twit");
var Stream = t.stream('statuses/filter', { track: '@<your_twitter_username>' })
Stream.on('tweet', tweetevent)

function tweetevent (eventMsg){
    var fs = require('fs')
      var json = JSON.stringify(eventMsg,null,2)
      fs.writeFile("tweet.json", json)
}
const tweetit=(txt)=>{
    var tweet ={
        status:txt
    }
    t.post("statuses/update", tweet, tweeted)
    function tweeted(err, data, response){
        if(err){console.log("something went wrong");}
        else{console.log("it worked");}
    }
}

setInterval(tweetit, 60 * 1000);