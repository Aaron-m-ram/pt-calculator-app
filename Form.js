/* VARIABLES */
var format = 'mm:ss' //format for moments
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

/* Submit button listener */
var inputBTN = document.getElementById("SubmitBtn");
inputBTN.addEventListener('click', myfunction);

// takes input for runtime, situps and pushups then adds them to array // 
function myfunction(){

    /****** Gets the inputs from the HTML format including waiver and the array variables ******/
    var getInputs = document.getElementsByClassName('input');
    var getWaiver = document.getElementsByClassName("waiver");
    //console.log(getInputs.length);
    var gridValues = [];
    var waiverValue = [];

    /****** Parse the inputs and changed them into correct types ******/
    for(var i = 0; i<getInputs.length; i++){
        gridValues.push(getInputs[i].value)
    }
    //console.log(gridValues);
    var age =parseInt(gridValues[1]);
    var minutes = parseInt(gridValues[2]);
    var seconds = parseInt(gridValues[3]);
    var sitUps = parseInt(gridValues[4]);
    var pushUps = parseInt(gridValues[5]);

    /****** have the fixes for the time for correct input ******/
    if(minutes.length === 1){
        minutes = '0' + minutes;
    }
    if(seconds.length === 1){
        seconds = '0'+ seconds;
    }
    var runTime = minutes +":" + seconds;
    var newRunTime = moment(runTime,format);
    
    
    /****** runs each function to get the score and age ******/
    console.log(ageGetter(age));
    var runScore = returningScore(newRunTime);
    var pushUpsScore = PushUpsGetter(pushUps);
    var sitUpsScore = SitUpsGetter(sitUps);

    //console.log("runscore: "+ runScore+ "\npushupscore: " + pushUpsScore+ "\nsitupscore: " + sitUpsScore);
    /****** Goes through the waiver and checks if it is true or false ******/ 
    for(var i = 0; i<getWaiver.length; i++){
        waiverValue.push(getWaiver[i].checked)
    }
    console.log(waiverValue);

    console.log(finalScore(pushUpsScore,sitUpsScore, runScore, waiverValue));

}



//run/walk waiver === true makes run time go gray
var exemptClick = document.getElementById("Exempt");
var walkTimeClick = document.getElementById("WalkTime");
var runTimeClick = document.getElementById("RunTime");
exemptClick.addEventListener('click', exemptRadioChanged);
walkTimeClick.addEventListener('click',walkRadioChanged);
runTimeClick.addEventListener('click', runRadioChanged);
//checks waiver if checked removes old class(walkTime) adds new class(runWaiver)
// if not checked removes new class(runWaiver) adds old class(walkTime)
function exemptRadioChanged(){
    if(exemptClick.click){
        var removeExemptMinsOldClass = document.getElementById("minutesInput8").classList.remove('inputTime');
        var removeExemptSecsOldClass = document.getElementById("secondsInput8").classList.remove('inputTime');
        var disableTime = document.getElementById("minutesInput8").disabled = true;
        var disableTime = document.getElementById("secondsInput8").disabled = true;
        addNewRunWalkClassFunc();
    } else {
        return null;
    }
};
function walkRadioChanged(){
    if (walkTimeClick.click){
        var removeWalkMinsNewClass = document.getElementById("minutesInput8").classList.remove('walkTime');
        var removeWalkSecsNewClass = document.getElementById("secondsInput8").classList.remove('walkTime');
        var enableWalkMins = document.getElementById("minutesInput8").disabled = false;
        var enableWalkSecs = document.getElementById("secondsInput8").disabled = false;
        returnOldRunWalkClass();
    } else {
        return null;
    }
};
function runRadioChanged(){
    if (runTimeClick.click){
        var removeRunMinsNewClass = document.getElementById("minutesInput8").classList.remove('walkTime');
        var removeRunSecsNewClass = document.getElementById("secondsInput8").classList.remove('walkTime');
        var enableRunMins = document.getElementById("minutesInput8").disabled = false;
        var enableRunSecs = document.getElementById("secondsInput8").disabled = false;
        returnOldRunWalkClass();
    } else{
        return null;
    }
}
function addNewRunWalkClassFunc(){
    var addRunWalkMinsNewClass = document.getElementById("minutesInput8").classList.add('walkTime');
    var addRunWalkSecsNewClass = document.getElementById("secondsInput8").classList.add('walkTime');
};
function returnOldRunWalkClass(){
    var addRunWalkMinsOldClass = document.getElementById("minutesInput8").classList.add('inputTime');
    var addRunWalkSecsOldClass = document.getElementById("secondsInput8").classList.add('inputTime');
};

//pushup waiver === true makes pushup go gray
var pushUpWaiverClick = document.getElementById("PushUpWaiver");
pushUpWaiverClick.addEventListener('change', pushUpWaiverChanged);
//checks waiver if checked removes old class(walkTime) adds new class(runWaiver)
// if not checked removes new class(runWaiver) adds old class(walkTime)
function pushUpWaiverChanged(){
    if(pushUpWaiverClick.checked === true){
        var removePushUpOldClass = document.getElementById("pushUpInput").classList.remove('input');
        var disablePushUp = document.getElementById("pushUpInput").disabled = true;
        addNewPushUpClassFunc();
    } else{
        var removePushUpNewClass = document.getElementById("pushUpInput").classList.remove('waiverCheckedInput');
        var enableSecs = document.getElementById("pushUpInput").disabled = false;
        returnOldPushUpClass();
    }
};
function addNewPushUpClassFunc(){
    var addPushUpNewClass = document.getElementById("pushUpInput").classList.add('waiverCheckedInput');
}
function returnOldPushUpClass(){
    var addPushUpOldClass = document.getElementById("pushUpInput").classList.add('input');
}
//situp waiver === true makes situp go gray
var sitUpWaiverClick = document.getElementById("SitUpWaiver");
sitUpWaiverClick.addEventListener('change', sitUpWaiverChanged);
//checks waiver if checked removes old class(walkTime) adds new class(runWaiver)
// if not checked removes new class(runWaiver) adds old class(walkTime)
function sitUpWaiverChanged(){
    if(sitUpWaiverClick.checked === true){
        var removeSitUpOldClass = document.getElementById("sitUpsInput").classList.remove('input');
        var disableSitUps = document.getElementById("sitUpsInput").disabled = true;
        addNewSitUpClassFunc();
    } else{
        var removeSitUpNewClass = document.getElementById("sitUpsInput").classList.remove('waiverCheckedInput');
        var enableSecs = document.getElementById("sitUpsInput").disabled = false;
        returnOldSitUpClass();
    }
};
function addNewSitUpClassFunc(){
    var addSitUpNewClass = document.getElementById("sitUpsInput").classList.add('waiverCheckedInput');
}
function returnOldSitUpClass(){
    var addSitUpOldClass = document.getElementById("sitUpsInput").classList.add('input');
}












// Puts age into age group //
function ageGetter(inputAge) {
    if (inputAge < 25) {
        return '17_24';
    } else if (inputAge <= 29 && inputAge >= 25) {
        return '25_29';
    } else if (inputAge <= 34 && inputAge >= 30) {
        return '30_34';
    } else if (inputAge <= 39 && inputAge >= 35) {
        return '35_39';
    } else if (inputAge <= 44 && inputAge >= 40) {
        return '40_44';
    } else if (inputAge <= 49 && inputAge >= 45) {
        return '45_49';
    } else if (inputAge <= 54 && inputAge >= 50) {
        return '50_54';
    } else if (inputAge <= 59 && inputAge >= 55) {
        return '55_59';
    } else if (inputAge >= 60) {
        return '60+';
    } 
};

function GenderGetter(Gender) {
    if (Gender === true) {
        return 'Male';
    } else if (Gender === false) {
        return 'Female';
    }
}
function PushUpsGetter(PushUps) {
    //add PushUpWaiver as Param
    //if (PushUpWaiver == true){
    //    console.log('Push up Waiver');
    //    return 0.0;
    //}
    if (PushUps < 30) {
        console.log('Auto Fail Pushups ')
        return 0.0;
    } else if (PushUps == 30) {
        return 1.0
;    } else if (PushUps == 31) {
        return 4.0
;    } else if (PushUps == 32) {
        return 7.0
;    } else if (PushUps == 33) {
        return 10.0;
    } else if (PushUps == 34) {
        return 10.6;
    } else if (PushUps == 35) {
        return 11.0;
    } else if (PushUps == 36) {
        return 11.6;
    } else if (PushUps == 37) {
        return 12.0;
    } else if (PushUps == 38) {
        return 12.6;
    } else if (PushUps == 39) {
        return 13.0;
    } else if (PushUps == 40) {
        return 13.6;
    } else if (PushUps == 41) {
        return 14.0;
    } else if (PushUps == 42) {
        return 14.4;
    } else if (PushUps == 43) {
        return 14.6;
    } else if (PushUps == 44) {
        return 15.0;
    } else if (PushUps == 45) {
        return 15.4;
    } else if (PushUps == 46) {
        return 15.6;
    } else if (PushUps == 47) {
        return 16.0;
    } else if (PushUps == 48) {
        return 16.2;
    } else if (PushUps == 49) {
        return 16.6;
    } else if (PushUps == 50) {
        return 16.8;
    } else if (PushUps == 51) {
        return 17.0;
    } else if (PushUps == 52) {
        return 17.2;
    } else if (PushUps == 53) {
        return 17.4;
    } else if (PushUps == 54) {
        return 17.6;
    } else if (PushUps == 55) {
        return 17.7;
    } else if (PushUps == 56) {
        return 17.8;
    } else if (PushUps == 57) {
        return 18.0;
    } else if (PushUps == 58) {
        return 18.2;
    } else if (PushUps == 59) {
        return 18.4;
    } else if (PushUps == 60) {
        return 18.6;
    } else if (PushUps == 61) {
        return 18.8;
    } else if (PushUps == 62) {
        return 19.0;
    } else if (PushUps == 63) {
        return 19.2;
    } else if (PushUps == 64) {
        return 19.4;
    } else if (PushUps == 65) {
        return 19.6;
    } else if (PushUps == 65) {
        return 19.6;
    } else if (PushUps == 66) {
        return 19.8;
    } else if (PushUps >= 67) {
        return 20.0;
    } else {
        return 0.0;
    }
};
function SitUpsGetter(SitUps){
    /* Add SitUp waiver param
    if (SitUpWaiver == true){
        console.log('Sit up Waiver');
        return 0.0;
    }  */
    if (SitUps < 39) {
        console.log('Auto Fail Situps ');
        return 0.0;
    } else if (SitUps == 39) {
        return 3.0;
    } else if (SitUps == 40) {
        return 6.0;
    } else if (SitUps == 41) {
        return 9.0;
    } else if (SitUps == 42) {
        return 12.0;
    } else if (SitUps == 43) {
        return 12.6;
    } else if (SitUps == 44) {
        return 13.0;
    } else if (SitUps == 45) {
        return 14.0;
    } else if (SitUps == 46) {
        return 15.0;
    } else if (SitUps == 47) {
        return 16.0;
    } else if (SitUps == 48) {
        return 16.6;
    } else if (SitUps == 49) {
        return 17.0;
    } else if (SitUps == 50) {
        return 17.4;
    } else if (SitUps == 51) {
        return 17.6;
    } else if (SitUps == 52) {
        return 18.0;
    } else if (SitUps == 53) {
        return 18.4;
    } else if (SitUps == 54) {
        return 18.8;
    } else if (SitUps == 55) {
        return 19.0;
    } else if (SitUps == 56) {
        return 19.4;
    } else if (SitUps == 57) {
        return 19.7;
    } else if (SitUps >= 58) {
        return 20.0;
    } else{
        return 0.0;
    }
}
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

function finalScore(PushUpsGetter, SitUpsGetter, RunTimeGetter, waiver){
    var TotalScore = PushUpsGetter + SitUpsGetter + RunTimeGetter;
    if (waiver[1] == true && waiver[2] == false && waiver[0] == false) {
        TotalScore = (TotalScore/ 80) * 100
        return TotalScore;
    } else if (waiver[1] == true && waiver[2] == true && waiver[0] == false) {
        TotalScore = (TotalScore / 60) * 100
        return TotalScore;
    } else if (waiver[1] == true && waiver[2] == true && waiver[0] == true) {
        TotalScore = (TotalScore / 0) * 100
        return TotalScore;
    } else if (waiver[1] == true && waiver[2] == false && waiver[0] == true) {
        TotalScore = (TotalScore / 20) * 100
        return TotalScore;
    } else if (waiver[1] == false && waiver[2] == true && waiver[0] == false) {
        TotalScore = (TotalScore / 80) * 100
        return TotalScore;
    } else if (waiver[1] == false && waiver[2] == true && waiver[0] == true) {
        TotalScore = (TotalScore / 20) * 100
        return TotalScore;
    } else if (waiver[1] == false && waiver[2] == false && waiver[0] == true) {
        TotalScore = (TotalScore / 40) * 100
        return TotalScore;
    }
    return TotalScore;
};
