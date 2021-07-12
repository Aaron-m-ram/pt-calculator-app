import _ from "lodash";

function genderGetter(genderInput) {
  return genderInput ? "male" : "female";
}

function ageGetter(ageInput) {
  let ageRange;

  const ageRangeMap = [
    { ageArray: [17, 25], ageRangeString: "17-24" },
    { ageArray: [25, 30], ageRangeString: "25-29" },
    { ageArray: [30, 35], ageRangeString: "30-34" },
    { ageArray: [35, 40], ageRangeString: "35-39" },
    { ageArray: [40, 45], ageRangeString: "40-44" },
    { ageArray: [45, 50], ageRangeString: "45-49" },
    { ageArray: [50, 55], ageRangeString: "50-54" },
    { ageArray: [55, 60], ageRangeString: "55-59" },
    { ageArray: [60, 100], ageRangeString: "60+" },
  ];

  ageRange = ageRangeMap.find((obj) =>
    _.inRange(ageInput, obj.ageArray[0], obj.ageArray[1])
  ).ageRangeString;

  return ageRange;
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

function SitUpsGetter(sitUpInput, SitUpWaiver) {
  let sitUpsScore;
  if (SitUpWaiver) {
    return 0;
  }
  const sitUpCountToScore = [
    { count: 39, score: 3.0 },
    { count: 40, score: 6.0 },
    { count: 41, score: 9.0 },
    { count: 42, score: 12.0 },
    { count: 43, score: 12.6 },
    { count: 44, score: 13.0 },
    { count: 45, score: 14.0 },
    { count: 46, score: 15.0 },
    { count: 47, score: 16.0 },
    { count: 48, score: 16.6 },
    { count: 49, score: 17.0 },
    { count: 50, score: 17.4 },
    { count: 51, score: 17.6 },
    { count: 52, score: 18.0 },
    { count: 53, score: 18.4 },
    { count: 54, score: 18.8 },
    { count: 55, score: 19.0 },
    { count: 56, score: 19.4 },
    { count: 57, score: 19.7 },
    { count: 58, score: 20.0 },
  ];
  if (
    sitUpInput < 39 ||
    sitUpInput === undefined ||
    sitUpInput == null ||
    SitUpWaiver
  ) {
    sitUpsScore = 0;
  } else if (sitUpInput >= 58) {
    sitUpsScore = 20;
  } else {
    sitUpsScore = sitUpCountToScore.find(
      (obj) => obj.count === sitUpInput
    ).score;
  }
  return sitUpsScore;
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
  if (handlePushUpWaiver && handleSitUpWaiver && handleRunWaiver) {
    TotalScore = 100;
  } else if (handlePushUpWaiver && handleSitUpWaiver) {
    TotalScore = (TotalScore / 60) * 100;
  } else if (handlePushUpWaiver && handleRunWaiver) {
    TotalScore = (TotalScore / 20) * 100;
  } else if (handleRunWaiver && handleSitUpWaiver) {
    TotalScore = (TotalScore / 20) * 100;
  } else if (handleRunWaiver) {
    TotalScore = (TotalScore / 40) * 100;
  } else if (handlePushUpWaiver) {
    TotalScore = (TotalScore / 80) * 100;
  } else if (handleSitUpWaiver) {
    TotalScore = (TotalScore / 80) * 100;
  }
  return TotalScore;
}

export {
  ageGetter,
  genderGetter,
  pushUpsGetter,
  SitUpsGetter,
  RunTimeGetter,
  FinalScore,
};