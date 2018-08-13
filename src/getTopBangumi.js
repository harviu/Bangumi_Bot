const request = require('request');
const getTopBangumi = (dosth,date) => {
    if(!date)
        var d = new Date();    
    else 
        d = date;
    console.log("Today is " + d);
    if(d.getDate()==1&&(d.getMonth()==1||d.getMonth()==4||d.getMonth()==7||d.getMonth()==10)){
        year = d.getFullYear();
        month = d.getMonth();
        questString = "http://bangumi.tv/anime/browser/tv/airtime/"+year+"-"+month+"?sort=rank";
        request(questString, function(error,response,body){
            if(!error&&response.statusCode==200){
                dosth(month,body,3);
            }else{
                console.log(error);
            }
        });
    }
};

module.exports = getTopBangumi;