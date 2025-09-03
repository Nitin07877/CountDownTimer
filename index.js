const endDate = new Date("3 sept, 2025 11:26:00").getTime();
const startdate=new Date().getTime();


let x=setInterval( function updatetime(){
    const now=new Date().getTime();

    const distancecovered=now-startdate;
    const distancepending=endDate-now;

    const days=Math.floor(distancepending/(24*60*60*1000));
    const hrs=Math.floor(distancepending%(24*60*60*1000)/(60*60*1000));
    const mins=Math.floor(distancepending%(60*60*1000)/(60*1000))
    const secs=Math.floor(distancepending%(60*1000)/(1000))

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML= hrs;
    document.getElementById("Minutes").innerHTML=mins;
    document.getElementById("Seconds").innerHTML=secs;

    const totaldistance=endDate-startdate;
    const percentagedistance=(distancecovered/totaldistance)*100;

    document.getElementById("Progress-bar").style.width=percentagedistance +"%";
    if(distancepending<0){
        clearInterval(x);
        document.getElementById("Countdown").innerHTML="Expired"

    }
} ,1000 );
