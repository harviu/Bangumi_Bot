const tweet = require('./tweet');
var generateText = function(m,content,index){
    var list;
    var season;
    var regex = /[0-9]{6}" class="l">.+<\/a>/g;
    list = content.match(regex);
    var itemList = list.map(x=>x.substring(0,6));
    var nameList = list.map(x=>x.substring(18,x.length-4));
    if(m ==1){
      season = '冬';  
    }else if(m==4){
        season = '春'
    }else if (m == 7){
        season = '夏';
    }else if (m == 10){
        season = '秋';
    }
    var s1 = season+"季番结束了呢，给姐姐大人们送上上一季度的补番推荐：\n";
    var s2 = [];
    for (var i =0 ;i<index ;i++){
        s2[i]=(i+1)+'. '+nameList[i]+" | "+"http://bangumi.tv/subject/"+itemList[i]+'\n';
        s1+=s2[i];
    }
    s1+="#BangumiBot\n"
    tweet(s1);
}
module.exports = generateText;