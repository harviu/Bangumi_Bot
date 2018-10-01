const request = require('request');
const getTopBangumi = (dosth,date) => {
    if(!date)
        var d = new Date();
    else 
        d = date;
    if(d.getDate()==1&&(d.getMonth()==0||d.getMonth()==3||d.getMonth()==6||d.getMonth()==9)){
        console.log("New Season...Fetching List...")
        year = d.getFullYear();
        month = (d.getMonth()+9)%12+1;
        questString = "http://bangumi.tv/anime/browser/tv/airtime/"+year+"-"+month+"?sort=rank";
        request(questString, function(error,response,body){
            if(!error&&response.statusCode==200){
                console.log("Fetching Success.");
                dosth(month,body,3);
            }else{
                console.log(error);
            }
        });
    }else{
        console.log("Season on going...");
        
    }
};

module.exports = getTopBangumi;
