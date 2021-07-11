// Submit button click //
var format = 'mm:ss'


var inputBTN = document.getElementById("SubmitBtn");
inputBTN.addEventListener('click', myfunction);

// Takes input for age //
function myFunc(){
    var y = document.getElementById("input age");
     var text = [];
     var j;
     for (j = 0; j < y.length ;j++) {
       text.push(y.elements[j].value);
     };

     // turns age from string to number //
    var ageNum = parseInt(text[0]);
    //console.log(ageNum);
    //return ageNum;
    console.log(ageGetter(ageNum));
};

// Puts age into age group //
function ageGetter(Age) {
    if (Age < 25) {
        return '17_24';
    } else if (Age <= 29 && Age >= 25) {
        return '25_29';
    } else if (Age <= 34 && Age >= 30) {
        return '30_34';
    } else if (Age <= 39 && Age >= 35) {
        return '35_39';
    } else if (Age <= 44 && Age >= 40) {
        return '40_44';
    } else if (Age <= 49 && Age >= 45) {
        return '45_49';
    } else if (Age <= 54 && Age >= 50) {
        return '50_54';
    } else if (Age <= 59 && Age >= 55) {
        return '55_59';
    } else if (Age >= 60) {
        return '60+';
    } 
};

// takes input for runtime, situps and pushups then adds them to array // 
function myfunction(){
   var x = document.getElementById("input name");
    var text = [];
    var i;
    for (i = 0; i < x.length -1 ;i++) {
      text.push(x.elements[i].value);
      //console.log(text[])
    };

    // calls funtion to parse the age //
    myFunc();

    // checks if waiver box is checked //
    var runBtnCheck = document.getElementById("btncheck1").checked;
    var sitBtnCheck = document.getElementById("btncheck2").checked;
    var pushBtnCheck = document.getElementById("btncheck3").checked;
    //console.log(runbtncheck);
    var waiverArr = [runBtnCheck, sitBtnCheck, pushBtnCheck];
    
    // Turns sit ups and push ups to number from string //
    console.log(text);
    //(7) [mins ="10",sec= "5",rwaiver "on", situps "49",swaiver "on",pushups "64",pwaiver "on"]
    
    console.log(waiverArr);
    //var runTime;
    var minfix = text[0];
    var secfix = text[1];
    if(minfix.length === 1){
        minfix = '0' + minfix;
    }
    if(secfix.length == 1){
        secfix = '0'+ secfix;
    }

    var totalRun = minfix  + secfix;
    var finalRun = moment(totalRun,format);
    var sitUpCount = parseInt(text[3]);
    var pushUpCount = parseInt(text[5]);
    
    var finalFinalRun = returningScore(finalRun);
    var finalPushUps = PushUpsGetter(pushUpCount);
    var finalSitUps = SitUpsGetter(sitUpCount);

    console.log(finalScore(finalPushUps, finalSitUps, finalFinalRun, waiverArr));
    
    
    // ------------- testing codes below --------- //
    //console.log(typeof(newNum), typeof(newNum2)); **
    //console.log(func2(newNum, newNum2)); // <= call functions to do input ** 
    //return text; ** 

    // Takes input of Gender //

    var inpobj = document.getElementById("inlineFormCustomSelect");
    var strUser = inpobj.value;
    
    //console.log(typeof strUser); **test**

    // checks if gender is female or male then sends output //
    
    if(strUser == 1) { 
        GenderGetter(false);
    } else if(strUser == 2) {
        GenderGetter(true);
    }
    else {
        return null;
    }
}

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

//var running = moment('15:51',format);

var int1,int2,int3,int4,int5,int6,int7,int8,int9,int10,int11,int12,int13,int14,int15,int16,int17,int18,int19,int20,int21,int22,int23;

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

var listOfScores = [60,59.5,59.0,58.5,58.0,57.5,57.0,56.5,56.0,55.5,55.0,54.5,54.0,53.5,52,50.5,49.0,46.5,44.0,41.0,38.0,35.0, 0];

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
    // ------ Test ----- //
   // sum of situps and pushups //
/*function func2(num1, num2){
    totalscore = num1 += num2;
    return totalscore;
}*/

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

//console.log(text); **test**
//document.getElementById("SubmitBtn").innerHTML = text; **test**