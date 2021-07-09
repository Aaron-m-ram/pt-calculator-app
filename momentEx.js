/* // 2020-05-08T22:57:42+05:30
console.log(moment().format());
  
// May 8th 2020, 10:56:31 pm
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  
// Friday
console.log(moment().format('dddd'));
  
// May 8th 20
console.log(moment().format("MMM Do YY"));
  
// 2020 escaped 2020 
console.log(moment().format('YYYY [escaped] YYYY')); */

var format = "mm:ss";
var running = moment("15:41", format);

var int1,
  int2,
  int3,
  int4,
  int5,
  int6,
  int7,
  int8,
  int9,
  int10,
  int11,
  int12,
  int13,
  int14,
  int15,
  int16,
  int17,
  int18,
  int19,
  int20,
  int21,
  int22,
  int23;

var boundariesArr = [
  (int1 = moment("09:13", format)),
  (int2 = moment("09:34", format)),
  (int3 = moment("09:45", format)),
  (int4 = moment("09:58", format)),
  (int5 = moment("10:10", format)),
  (int6 = moment("10:23", format)),
  (int7 = moment("10:37", format)),
  (int8 = moment("10:51", format)),
  (int9 = moment("11:06", format)),
  (int10 = moment("11:22", format)),
  (int11 = moment("11:38", format)),
  (int12 = moment("11:56", format)),
  (int13 = moment("12:14", format)),
  (int14 = moment("12:33", format)),
  (int15 = moment("12:53", format)),
  (int16 = moment("13:14", format)),
  (int17 = moment("13:36", format)),
  (int18 = moment("14:00", format)),
  (int19 = moment("14:25", format)),
  (int20 = moment("14:52", format)),
  (int21 = moment("15:20", format)),
  (int22 = moment("15:50", format)),
];
//console.log('before for loop');

var listOfScores = [
  60, 59.5, 59.0, 58.5, 58.0, 57.5, 57.0, 56.5, 55.5, 55.0, 54.5, 54.0, 53.5,
  52, 50.5, 49.0, 46.5, 44.0, 41.0, 38.0, 35.0, 0,
];

//console.log(score.length);
console.log(boundariesArr.length);

/* function returningScore(myRun){ 
    for(var i = 0; i<boundariesArr.length; i++){
        //console.log("my number: "+ myRun);
        //console.log("lower bound:" +boundariesArr[i]+"upper bound:"+boundariesArr[i+1]);
        if(i == 0 && myRun.isBefore(boundariesArr[i])){
            console.log('it is a perfect score');
            return console.log(60);
        }
        else if(myRun.isBetween(boundariesArr[i],boundariesArr[i+1])){
            //console.log(i+1);
            console.log('it worked');
            return console.log(score[i-1]);
        }
        else if(i == 20 && myRun.isAfter(boundariesArr[i])){
            console.log("your slow AF");
            return console.log(0);

        }
        else{
            //console.log("didnt work on attempt: "+ i);
            i++;
        }
    }
} */

function returningScore(myRun) {
  let score = 0;
  for (var i = 0; i < boundariesArr.length; i++) {
    const myRunConst = BigInt.valueOf(myRun.valueOf());
    const boundariesArrConst = BigInt.valueOf(boundariesArr[i].valueOf());
    console.log("myRun: " + BigInt(myRun.valueOf()));
    console.log("boundariesArr: " + BigInt(boundariesArr[i].valueOf()));
    console.log(
      "myRun is less than boundries Score ? " + BigInt(myRun.valueOf()) <
        BigInt(boundariesArr[i].valueOf())
    );
    // console.log("boundriesArr: " + boundariesArr[i].valueOf())
    // console.log(boundariesArr[i].minutes() + ":" + boundariesArr[i].seconds())

    if (myRun.isSameOrBefore(boundariesArr[i])) {
      score = listOfScores[i];
      break;
    }
  }
  return score;
}
// boundariesArr.forEach(time =>{
//     console.log(returningScore(time))
// })
console.log(returningScore(running));

console.log("reached the end of code");

/* if(myRun.isBetween(int1, int2) || myRun.isSame(int1)){
    console.log("You scores a 59.5")
} */

//console.log(int1.input);

//var format = 'hh:mm:ss'
