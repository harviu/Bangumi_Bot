// listen on port so now.sh likes it
const http = require('http');
const getTopBangumi = require('./getTopBangumi');
const generateText = require('./generateText');
const tweet = require('./tweet');


console.log('Bot starting...');

var welcome = "姐姐大人们好~这里是Bangumi Bot，会在每一季新番结束的时候根据Bangumi.tv上的口碑给大家提供补番推荐，虽然一年只能见四次，但是Bot会珍惜的！\n#BangumiBot"

var d =new Date();
d.setMonth(7);
d.setDate(1);
d.setFullYear(2018);

tweet(welcome);
getTopBangumi(generateText,d);

setInterval(()=>{getTopBangumi(generateText);},1000*60*60*24);



// This will allow the bot to run on now.sh
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    Location: `https://twitter.com/${config.twitterConfig.username}`
  })
  res.end()
})
server.listen(3000)
