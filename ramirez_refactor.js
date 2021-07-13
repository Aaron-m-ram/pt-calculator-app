var format = 'mm:ss' //format for moments


var mRtScoreSheet17_24 = [
    {timeR: moment('09:13', format), points: 60},
    {timeR: moment('09:35', format), points: 59.5},
    {timeR: moment('09:46', format), points: 59},
    {timeR: moment('09:59', format), points: 58.5},
    {timeR: moment('10:11', format), points: 58},
    {timeR: moment('10:24', format), points: 57.5},
    {timeR: moment('10:38', format), points: 57},
    {timeR: moment('10:52', format), points: 56.5},
    {timeR: moment('11:07', format), points: 56},
    {timeR: moment('11:23', format), points: 55.5},
    {timeR: moment('11:39', format), points: 55},
    {timeR: moment('11:57', format), points: 54.5},
    {timeR: moment('12:15', format), points: 54},
    {timeR: moment('12:34', format), points: 53.5},
    {timeR: moment('12:54', format), points: 52},
    {timeR: moment('13:15', format), points: 50.5},
    {timeR: moment('13:37', format), points: 49},
    {timeR: moment('14:01', format), points: 46.5},
    {timeR: moment('14:26', format), points: 44},
    {timeR: moment('14:53', format), points: 41},
    {timeR: moment('15:21', format), points: 38},
    {timeR: moment('15:51', format), points: 35},
    {timeR: moment('59:59', format), points: 0}
]

function returningScore(runScore, runScoreSheet){
    let score = 0;
    for(var i = 0; i <= runScoreSheet.length; i++){
        if(runScore.isBefore(runScoreSheet[i].timeR)){
            score = runScoreSheet[i].points;
            break;
        }
    }
    return score;
};

var testInput = moment("15:51", format);
// console.log("testing new thing: " +returningScore(testInput, mRtScoreSheet17_24 ));

