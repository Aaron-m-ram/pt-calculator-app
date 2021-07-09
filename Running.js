function GenderGetter(Gender) {
  if (Gender === true) {
    return "Male";
  }
  if (Gender === false) {
    return "Female";
  }
}
// let Age = AgeGetter;
// let Gender = GenderGetter;
// let PushUps = PushUpsGetter;
// let SitUps = SitUpsGetter;
// let RunTime = RunTimeGetter;
function AgeGetter(Age) {
  if (Age < 25) {
    return "17_24";
  }
  if (Age <= 29 && Age >= 25) {
    return "25_29";
  }
  if (Age <= 34 && Age >= 30) {
    return "30_34";
  }
  if (Age <= 39 && Age >= 35) {
    return "35_39";
  }
  if (Age <= 44 && Age >= 40) {
    return "40_44";
  }
  if (Age <= 49 && Age >= 45) {
    return "45_49";
  }
  if (Age <= 54 && Age >= 50) {
    return "50_54";
  }
  if (Age <= 59 && Age >= 55) {
    return "55_59";
  }
  if (Age >= 60) {
    return "60+";
  }
}

const pushUpsGetter = (pushUpsInput, pushUpWaiver) => {
  let pushUpsScore;

  const pushUpCountToScore = [
    { count: 30, score: 1 },
    { count: 31, score: 4.0 },
    { count: 32, score: 7.0 },
    { count: 33, score: 10.0 },
    { count: 34, score: 10.6 },
    { count: 35, score: 11.0 },
    { count: 36, score: 11.6 },
    { count: 37, score: 12.0 },
    { count: 38, score: 12.6 },
    { count: 39, score: 13.0 },
    { count: 40, score: 13.6 },
    { count: 41, score: 14.0 },
    { count: 42, score: 14.4 },
    { count: 43, score: 14.6 },
    { count: 44, score: 15.0 },
    { count: 45, score: 15.4 },
    { count: 46, score: 15.6 },
    { count: 47, score: 16.0 },
    { count: 48, score: 16.2 },
    { count: 49, score: 16.6 },
    { count: 50, score: 16.8 },
    { count: 51, score: 17.0 },
    { count: 52, score: 17.2 },
    { count: 53, score: 17.4 },
    { count: 54, score: 17.6 },
    { count: 55, score: 17.7 },
    { count: 56, score: 17.8 },
    { count: 57, score: 18.0 },
    { count: 58, score: 18.2 },
    { count: 59, score: 18.4 },
    { count: 60, score: 18.6 },
    { count: 61, score: 18.8 },
    { count: 62, score: 19.0 },
    { count: 63, score: 19.2 },
    { count: 64, score: 19.4 },
    { count: 65, score: 19.6 },
    { count: 66, score: 19.8 },
    { count: 67, score: 20.0 },
  ];

  // if pushup input is less than 30, or undefined/null, return 0
  if (
    pushUpsInput < 30 ||
    pushUpsInput === undefined ||
    pushUpsInput == null ||
    pushUpWaiver
  ) {
    pushUpsScore = 0;
  } else if (pushUpsInput >= 68) {
    // if the pushup input is more than max pushup input, then return max score.
    pushUpsScore = 20;
  } else {
    // declaritive programming vs imperitive programming ---
    // search for the first instance where the object {count:number score: number}
    // has the same count as pushupsInput
    pushUpsScore = pushUpCountToScore.find(
      (obj) => obj.count === pushUpsInput
    ).score;
  }
  return pushUpsScore;
};

function SitUpsGetter(SitUps, SitUpWaiver) {
  if (SitUpWaiver) {
    return 0.0;
  }
  if (SitUps < 39) {
    return 0.0;
  }
  if (SitUps === 39) {
    return 3.0;
  }
  if (SitUps === 40) {
    return 6.0;
  }
  if (SitUps === 41) {
    return 9.0;
  }
  if (SitUps === 42) {
    return 12.0;
  }
  if (SitUps === 43) {
    return 12.6;
  }
  if (SitUps === 44) {
    return 13.0;
  }
  if (SitUps === 45) {
    return 14.0;
  }
  if (SitUps === 46) {
    return 15.0;
  }
  if (SitUps === 47) {
    return 16.0;
  }
  if (SitUps === 48) {
    return 16.6;
  }
  if (SitUps === 49) {
    return 17.0;
  }
  if (SitUps === 50) {
    return 17.4;
  }
  if (SitUps === 51) {
    return 17.6;
  }
  if (SitUps === 52) {
    return 18.0;
  }
  if (SitUps === 53) {
    return 18.4;
  }
  if (SitUps === 54) {
    return 18.8;
  }
  if (SitUps === 55) {
    return 19.0;
  }
  if (SitUps === 56) {
    return 19.4;
  }
  if (SitUps === 57) {
    return 19.7;
  }
  if (SitUps >= 58) {
    return 20.0;
  }
}

function RunTimeGetter(RunTime, RunWaiver) {
  if (RunWaiver) {
    return 0.0;
  }
  if (RunTime > "1551") {
    return 0;
  }
  if (RunTime === "0912") {
    return 60.0;
  }
}

function FinalScore(
  handlePushUpsGetter,
  handlePushUpWaiver,
  handleSitUpsGetter,
  handleSitUpWaiver,
  handleRunTimeGetter,
  handleRunWaiver
) {
  let TotalScore =
    handlePushUpsGetter + handleSitUpsGetter + handleRunTimeGetter;
  if (handleSitUpWaiver && !handlePushUpWaiver && !handleRunWaiver) {
    TotalScore = (TotalScore / 80) * 100;
    return TotalScore;
  }
  if (handleSitUpWaiver && handlePushUpWaiver && !handleRunWaiver) {
    TotalScore = (TotalScore / 60) * 100;
    return TotalScore;
  }
  if (handleSitUpWaiver && handlePushUpWaiver && handleRunWaiver) {
    TotalScore = (TotalScore / 0) * 100;
    return TotalScore;
  }
  if (handleSitUpWaiver && !handlePushUpWaiver && handleRunWaiver) {
    TotalScore = (TotalScore / 20) * 100;
    return TotalScore;
  }
  if (handlePushUpWaiver && !handleSitUpWaiver && !handleRunWaiver) {
    TotalScore = (TotalScore / 80) * 100;
    return TotalScore;
  }
  if (!handleSitUpWaiver && handlePushUpWaiver && handleRunWaiver) {
    TotalScore = (TotalScore / 20) * 100;
    return TotalScore;
  }
  if (!handleSitUpWaiver && !handlePushUpWaiver && handleRunWaiver) {
    TotalScore = (TotalScore / 40) * 100;
    return TotalScore;
  }
  return TotalScore;
}

// console.log(AgeGetter(21));
// console.log(GenderGetter(true));
// console.log(
//   FinalScore(
//     PushUpsGetter(50, false),
//     false,
//     SitUpsGetter(0, true),
//     true,
//     RunTimeGetter("0912", false),
//     false
//   )
// );

export {
  AgeGetter,
  GenderGetter,
  pushUpsGetter,
  SitUpsGetter,
  RunTimeGetter,
  FinalScore,
};
