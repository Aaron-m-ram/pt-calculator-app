  
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



var format = 'mm:ss'
var running = moment('15:51',format);

var int1,int2,int3,int4,int5,int6,int7,int8,int9,int10,int11,
    int12,int13,int14,int15,int16,int17,int18,int19,int20,int21,int22,int23;

var boundariesArr = [
    int1 = moment('09:13', format), //59.5 w
    int2 = moment('09:35', format), //59   w
    int3 = moment('09:46', format), //58.5 w
    int4 = moment('09:59', format), //58   w
    int5 = moment('10:11', format), //57.5 w
    int6 = moment('10:24', format), //57   w
    int7 = moment('10:38', format), //56.5 w
    int8 = moment('10:52', format), //56   w
    int9 = moment('11:07', format), //55.5 w
    int10 = moment('11:23', format), //55  w
    int11 = moment('11:39', format), //54.5w
    int12 = moment('11:57', format), //54  w
    int13 = moment('12:15', format), //53.5w
    int14 = moment('12:34', format), //52  w
    int15 = moment('12:54', format), //50.5w
    int16 = moment('13:15', format), //49.0w
    int17 = moment('13:37', format), //46.5w
    int18 = moment('14:01', format), //44.0w
    int19 = moment('14:26', format), //41.0w
    int20 = moment('14:53', format), //38.0
    int21 = moment('15:21', format), //35.0
    int22 = moment('15:51', format)  //0
];
//console.log('before for loop');

var listOfScores = [60,59.5,59.0,58.5,58.0,57.5,57.0,56.5,56.0,55.5,55.0,54.5,
             54.0,53.5,52,50.5,49.0,46.5,44.0,41.0,38.0,35.0, 0];

//console.log(score.length);
//console.log(boundariesArr.length);             


function returningScore(myRun){
    let score = 0
    for(var i = 0; i<= boundariesArr.length; i++){      
        if(myRun.isBefore(boundariesArr[i])){
            score = (listOfScores[i]);
            break;
        }
    }
    return score;
}
// boundariesArr.forEach(time =>{
//     console.log(returningScore(time))
// })
console.log(returningScore(running));

console.log('reached the end of code');




