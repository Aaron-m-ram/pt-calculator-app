
var name, age, time, score;
var age = 18;
var score = 40;

var runScore = new Date();
runScore.setMinutes(9,23);
minute = runScore.getMinutes();
second = runScore.getSeconds();

if(minute < 10){
    minute = '0'+minute;
}
if(second < 10){
    second = '0'+second;
}
//****************Testing comparison **********//

//9:13 - 9:34
var interval1 = new Date().setMinutes(9,13);
var interval1End = new Date().setMinutes(9,34);
//i1 = interval1.setMinutes(9,13);
//i1E = interval1End.setMinutes(9,34);

/* if(runScore > interval1 ){
    console.log("your time is greater than 9:13");
}
if(runScore < interval1End){
    console.log("your time is slower than 9:34");
} */

if(runScore > interval1 && runScore < interval1End){
    console.log("You scored a 59.5 with the time: " +minute + ":" +second);
}


//var personArr = [name, age, time, score];

/* console.log("hello")
console.log(minute + ":" + second); */

