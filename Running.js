

let Age = AgeGetter;
let Gender = GenderGetter;
let PushUps = PushUpsGetter;
let SitUps = SitUpsGetter;
let RunTime = RunTimeGetter;

function AgeGetter(Age) {
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
}

function GenderGetter(Gender) {
    if (Gender === true) {
        return 'Male';
    } else if (Gender === false) {
        return 'Female';
    }
}

function PushUpsGetter(PushUps, PushUpWaiver) {
    if (PushUpWaiver == true){
        console.log('Push up Waiver');
        return 0.0;
    } else if (PushUps < 30) {
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
    }
};

function SitUpsGetter(SitUps, SitUpWaiver){
    if (SitUpWaiver == true){
        console.log('Sit up Waiver');
        return 0.0;
    } else if (SitUps < 39) {
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
    }
}

function RunTimeGetter(RunTime, RunWaiver){
    if (RunWaiver == true){
        console.log('Run Waiver');
        return 0.0;
    } else if (RunTime > '1551') {
        console.log('Auto Fail Run ');
    } else if (RunTime == '0912') {
        return 60.0;
    }
}

function FinalScore(PushUpsGetter, PushUpWaiver, SitUpsGetter, SitUpWaiver, RunTimeGetter, RunWaiver){
    var TotalScore = PushUpsGetter + SitUpsGetter + RunTimeGetter;
    if (SitUpWaiver == true && PushUpWaiver == false && RunWaiver == false) {
        TotalScore = (TotalScore/ 80) * 100
        return TotalScore;
    } else if (SitUpWaiver == true && PushUpWaiver == true && RunWaiver == false) {
        TotalScore = (TotalScore / 60) * 100
        return TotalScore;
    } else if (SitUpWaiver == true && PushUpWaiver == true && RunWaiver == true) {
        TotalScore = (TotalScore / 0) * 100
        return TotalScore;
    } else if (SitUpWaiver == true && PushUpWaiver == false && RunWaiver == true) {
        TotalScore = (TotalScore / 20) * 100
        return TotalScore;
    } else if (SitUpWaiver == false && PushUpWaiver == true && RunWaiver == false) {
        TotalScore = (TotalScore / 80) * 100
        return TotalScore;
    } else if (SitUpWaiver == false && PushUpWaiver == true && RunWaiver == true) {
        TotalScore = (TotalScore / 20) * 100
        return TotalScore;
    } else if (SitUpWaiver == false && PushUpWaiver == false && RunWaiver == true) {
        TotalScore = (TotalScore / 40) * 100
        return TotalScore;
    }
    return TotalScore;
};

console.log(AgeGetter(21))
console.log(GenderGetter(true))
console.log(FinalScore(PushUpsGetter(50, false), false, SitUpsGetter(0,true), true, RunTimeGetter("0912", false), false));

export {
    AgeGetter,
    GenderGetter,
    PushUpsGetter,
    SitUpsGetter,
    RunTimeGetter,
    FinalScore
};