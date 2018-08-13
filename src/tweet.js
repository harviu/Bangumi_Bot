const Twit = require('twit');
const config = require('./config');
const T = new Twit(config.twitterKeys);

const tweet = (content) => {
    console.log("Tweeting:"+content);
    
    // T.post('statuses/update',{status:content},
    // function(err, data, response) {
    //     if(!err)
    //         console.log('Success');
    //     else 
    //         console.log(err);
            
    // });
}
module.exports= tweet;