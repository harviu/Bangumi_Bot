const request = require('request');
const getTopBangumi = (dosth,date) => {
    if(!date)
        var d = new Date();    
    else 
        d = date;
    if(d.getDate()==1&&(d.getMonth()==1||d.getMonth()==4||d.getMonth()==7||d.getMonth()==10)){
        console.log("New Season...Fetching List...\n")
        year = d.getFullYear();
        month = d.getMonth();
        questString = "http://bangumi.tv/anime/browser/tv/airtime/"+year+"-"+month+"?sort=rank";
        request(questString, function(error,response,body){
            if(!error&&response.statusCode==200){
                console.log("Feching Success.");
                dosth(month,body,3);
            }else{
                console.log(error);
            }
        });
    }
};

module.exports = getTopBangumi;