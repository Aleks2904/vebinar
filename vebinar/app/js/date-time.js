$(function(){
    const CALL_FREQUENCY = 1000;

    const OPTIONS = {
        day: 'numeric'
    };

    const london = {
        timeZone: 'UTC',
        hour: 'numeric'
    };

    const krasnoyarsk = {
        timeZone: 'Asia/Krasnoyarsk',
        hour: 'numeric'
    }


    function ticTac(){
        var data = new Date();
        var day = data.toLocaleString('ru', OPTIONS);
        var month = data.toLocaleString('ru', {month: 'numeric'});
        var year = data.getFullYear();
        var hour = data.toLocaleString('ru', krasnoyarsk);
        var minute = data.getMinutes().toString();

        month.toString();
        hour.toString();

        if (minute.length < 2){
            minute = '0' + minute
        };

        if (month.length<2){
            month = '0' + month
        }

        const fullData = day + "-" + month + "-" + year ;
        const FullTime = hour +  ' : ' + minute;

        $('#js-krasnoyarsk-date').html(fullData);
        $('#js-krasnoyarsk-time').html(FullTime);
    };

    setInterval (ticTac,CALL_FREQUENCY);

    function ticTac2(){
        var data = new Date();
        var day = data.toLocaleString('en-US',  OPTIONS);
        var month = data.toLocaleString('en-US', {month: 'numeric'});
        var year = data.getFullYear();
        var hour = data.toLocaleString('en-US', london);
        var minute = data.getMinutes().toString();

        month.toString();

        if (minute.length < 2){
            minute = '0' + minute
        };

        if (month.length<2){
            month = '0' + month
        }

        const fullData = day + "-" + month + "-" + year ;
        const FullTime = minute +  ' : ' + hour;

        $('#js-london-date').html(fullData);
        $('#js-london-time').html(FullTime);
    };
        
    setInterval (ticTac2,CALL_FREQUENCY);

    function declOfNum(number, titles) {
        cases = [2, 0, 1, 1, 1, 2];
      
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];    
    };   
});
