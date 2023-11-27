const dayel=document.querySelector(".days");
const hourel=document.querySelector(".hours");
const minuteel=document.querySelector(".minutes");
const secondel=document.querySelector(".seconds");
const heading=document.querySelector("h1");
const counter=document.querySelector(".counter");


const second=1000,minute=60*second,hour=60*minute,day = 24*hour;


const timerfunc=()=>{

    const now=new Date();
    let dd=String(now.getDate()).padStart(2,"0"),
    mm=String(now.getMonth()).padStart(2,"0"),
    yyyy=now.getFullYear();
    
    const enteredday=prompt("enter day").padStart(2,"0");
    const enteredmonth=prompt("enter month").padStart(2,"0");
    const enteredyear=prompt("enter year").padStart(4,"20");

    
    const targetDate=`${enteredmonth}/${enteredday}/${enteredyear}`;

    const intervalId=setInterval(()=>{
    const timer=new Date(targetDate).getTime();
    const today=new Date().getTime();
    const diff=timer-today;

    const leftday=Math.floor(diff/day);
    const lefthour=Math.floor((diff%day)/hour);
    const leftminute=Math.floor((diff%hour)/minute);
    const leftsecond=Math.floor((diff%minute)/second);

    dayel.innerText=leftday;
    hourel.innerText=lefthour;
    minuteel.innerText=leftminute;
    secondel.innerText=leftsecond;

    if(diff<0){
        counter.style.display="none";
        heading.innerText="Time's Up";
        clearInterval(intervalId);
    }

    },0);
}




timerfunc();