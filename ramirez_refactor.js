var format = 'mm:ss' //format for moments

function returningScore(myRun){
    let score = 0
    for(var i = 0; i<= boundariesArr.length; i++){      
        if(myRun.isBefore(boundariesArr[i])){
            score = (listOfScores[i]);
            break;
        }
    }
    return score;
};

var boundariesArr = [
    moment('09:13', format), //59.5 w
    moment('09:35', format), //59   w
    moment('09:46', format), //58.5 w
    moment('09:59', format), //58   w
    moment('10:11', format), //57.5 w
    moment('10:24', format), //57   w
    moment('10:38', format), //56.5 w
    moment('10:52', format), //56   w
    moment('11:07', format), //55.5 w
    moment('11:23', format), //55  w
    moment('11:39', format), //54.5w
    moment('11:57', format), //54  w
    moment('12:15', format), //53.5w
    moment('12:34', format), //52  w
    moment('12:54', format), //50.5w
    moment('13:15', format), //49.0w
    moment('13:37', format), //46.5w
    moment('14:01', format), //44.0w
    moment('14:26', format), //41.0w
    moment('14:53', format), //38.0
    moment('15:21', format), //35.0
    moment('15:51', format)  //0
]; //the boundaries for  17-24

var listOfScores = [60,59.5,59.0,58.5,58.0,57.5,57.0,56.5,56.0,55.5,55.0,54.5,54.0,53.5,52,50.5,49.0,46.5,44.0,41.0,38.0,35.0, 0]; //scores for 17-24