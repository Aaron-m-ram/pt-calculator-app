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

const pushUpsGetter = (pushUpsInput, pushUpScoreSheet) => {
  let pushUpsScore;

  

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
    pushUpsScore = pushUpScoreSheet.find(
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



let mPuScoreSheet17_24 = [
  {count: 30, points: 1}, {count: 31, points: 4}, {count: 32, points: 7}, {count: 33, points: 10}, {count: 34, points: 10.6}, {count: 35, points: 11}, {count: 36, points: 11.6}, {count: 37, points: 12}, {count: 38, points: 12.6}, {count: 39, points: 13}, {count: 40, points: 13.6}, {count: 41, points: 14}, {count: 42, points: 14.4}, {count: 43, points: 14.6}, {count: 44, points: 15}, {count: 45, points: 15.4}, {count: 46, points: 15.6}, {count: 47, points: 16}, {count: 48, points: 16.2}, {count: 49, points: 16.6}, {count: 50, points: 16.8}, {count: 51, points: 17}, {count: 52, points: 17.2}, {count: 53, points: 17.4}, {count: 54, points: 17.6}, {count: 55, points: 17.7}, {count: 56, points: 17.8}, {count: 57, points: 18}, {count: 58, points: 18.2}, {count: 59, points: 18.4}, {count: 60, points: 18.6}, {count: 61, points: 18.8}, {count: 62, points: 19}, {count: 63, points: 19.2}, {count: 64, points: 19.4}, {count: 65, points: 19.6}, {count: 66, points: 19.8}, {count: 67, points: 20},
];

let mSuScoreSheet17_24 = [
  {count: 39, points: 3}, {count: 40, points: 6}, {count: 41, points: 9}, {count: 42, points: 12}, {count: 43, points: 12.6}, {count: 44, points: 13}, {count: 45, points: 14}, {count: 46, points: 15}, {count: 47, points: 16}, {count: 48, points: 16.6}, {count: 49, points: 17}, {count: 50, points: 17.4}, {count: 51, points: 17.6}, {count: 52, points: 18}, {count: 53, points: 18.4}, {count: 54, points: 18.8}, {count: 55, points: 19}, {count: 56, points: 19.4}, {count: 57, points: 19.7}, {count: 58, points: 20},
 ];

let mRtScoreSheet17_24 = [
 moment('09:13', format), moment('09:35', format), moment('09:46', format), moment('09:59', format), moment('10:11', format), moment('10:24', format), moment('10:38', format), moment('10:52', format), moment('11:07', format), moment('11:23', format), moment('11:39', format), moment('11:57', format), moment('12:15', format), moment('12:34', format), moment('12:54', format), moment('13:15', format), moment('13:37', format), moment('14:01', format), moment('14:26', format), moment('14:53', format), moment('15:21', format), moment('15:51', format)
 ];

let mPuScoreSheet25_29 = [
  {count: 27, points: 1},
  {count: 28, points: 4},
  {count: 29, points: 7},
  {count: 30, points: 10},
  {count: 31, points: 10.6},
  {count: 32, points: 11},
  {count: 33, points: 11.6},
  {count: 34, points: 12},
  {count: 35, points: 12.6},
  {count: 36, points: 13},
  {count: 37, points: 13.6},
  {count: 38, points: 14},
  {count: 39, points: 14.4},
  {count: 40, points: 14.6},
  {count: 41, points: 15},
  {count: 42, points: 15.4},
  {count: 43, points: 15.6},
  {count: 44, points: 16},
  {count: 45, points: 16.2},
  {count: 46, points: 16.6},
  {count: 47, points: 16.8},
  {count: 48, points: 17},
  {count: 49, points: 17.2},
  {count: 50, points: 17.4},
  {count: 51, points: 17.5},
  {count: 52, points: 17.6},
  {count: 53, points: 17.8},
  {count: 54, points: 18},
  {count: 55, points: 18.2},
  {count: 56, points: 18.4},
  {count: 57, points: 18.6},
  {count: 58, points: 18.8},
  {count: 59, points: 19},
  {count: 60, points: 19.4},
  {count: 61, points: 19.7},
  {count: 62, points: 20},

];

let mSuScoreSheet25_29 = [
  {count: 38, points: 3},
  {count: 39, points: 6},
  {count: 40, points: 9},
  {count: 41, points: 12},
  {count: 42, points: 12.6},
  {count: 43, points: 13},
  {count: 44, points: 14},
  {count: 45, points: 15},
  {count: 46, points: 16},
  {count: 47, points: 16.6},
  {count: 48, points: 17},
  {count: 49, points: 17.4},
  {count: 50, points: 17.6},
  {count: 51, points: 18},
  {count: 52, points: 18.4},
  {count: 53, points: 18.8},
  {count: 54, points: 19},
  {count: 55, points: 19.5},
  {count: 56, points: 20},
];

let mRtScoreSheet25_29 = [
moment('09:23', format),
moment('09:46', format),
moment('09:59', format),
moment('10:11', format),
moment('10:24', format),
moment('10:38', format),
moment('10:52', format),
moment('11:07', format),
moment('11:23', format),
moment('11:39', format),
moment('11:57', format),
moment('12:15', format),
moment('12:34', format),
moment('12:54', format),
moment('13:15', format),
moment('13:37', format),
moment('14:01', format),
moment('14:26', format),
moment('14:53', format),
moment('15:21', format),
moment('15:51', format)
];

let mPuScoreSheet30_34 = [
  {count: 24, points: 1},
  {count: 25, points: 4},
  {count: 26, points: 7},
  {count: 27, points: 10},
  {count: 28, points: 10.6},
  {count: 29, points: 11},
  {count: 30, points: 12},
  {count: 31, points: 13},
  {count: 32, points: 13.4},
  {count: 33, points: 13.6},
  {count: 34, points: 14},
  {count: 35, points: 14.6},
  {count: 36, points: 15},
  {count: 37, points: 15.4},
  {count: 38, points: 15.6},
  {count: 39, points: 16},
  {count: 40, points: 16.6},
  {count: 41, points: 17},
  {count: 42, points: 17.2},
  {count: 43, points: 17.4},
  {count: 44, points: 17.6},
  {count: 45, points: 17.8},
  {count: 46, points: 18},
  {count: 47, points: 18.2},
  {count: 48, points: 18.4},
  {count: 49, points: 18.5},
  {count: 50, points: 18.6},
  {count: 51, points: 18.8},
  {count: 52, points: 19},
  {count: 53, points: 19.2},
  {count: 54, points: 19.4},
  {count: 55, points: 19.6},
  {count: 56, points: 19.8},
  {count: 57, points: 20},

];

let mSuScoreSheet30_34 = [
  {count: 36, points: 3},
  {count: 37, points: 6},
  {count: 38, points: 9},
  {count: 39, points: 12},
  {count: 40, points: 13},
  {count: 41, points: 14},
  {count: 42, points: 15},
  {count: 43, points: 16},
  {count: 44, points: 16.6},
  {count: 45, points: 17},
  {count: 46, points: 17.4},
  {count: 47, points: 17.6},
  {count: 48, points: 18},
  {count: 49, points: 18.4},
  {count: 50, points: 18.8},
  {count: 51, points: 19},
  {count: 52, points: 19.4},
  {count: 53, points: 19.7},
  {count: 54, points: 20},

];

let mRtScoreSheet30_34 = [
  moment('09:35', format),
  moment('09:59', format),
  moment('10:11', format),
  moment('10:24', format),
  moment('10:38', format),
  moment('10:52', format),
  moment('11:07', format),
  moment('11:23', format),
  moment('11:39', format),
  moment('11:57', format),
  moment('12:15', format),
  moment('12:34', format),
  moment('12:54', format),
  moment('13:15', format),
  moment('13:37', format),
  moment('14:01', format),
  moment('14:26', format),
  moment('14:53', format),
  moment('15:21', format),
  moment('15:51', format),
  moment('16:23', format)
 
];

let mPuScoreSheet35_39 = [
  {count: 21, points: 1},
  {count: 22, points: 4},
  {count: 23, points: 7},
  {count: 24, points: 10},
  {count: 25, points: 10.6},
  {count: 26, points: 11},
  {count: 27, points: 12},
  {count: 28, points: 13},
  {count: 29, points: 13.4},
  {count: 30, points: 13.6},
  {count: 31, points: 14},
  {count: 32, points: 14.6},
  {count: 33, points: 15},
  {count: 34, points: 15.4},
  {count: 35, points: 15.6},
  {count: 36, points: 16},
  {count: 37, points: 16.6},
  {count: 38, points: 17},
  {count: 39, points: 17.2},
  {count: 40, points: 17.4},
  {count: 41, points: 17.6},
  {count: 42, points: 17.8},
  {count: 43, points: 18},
  {count: 44, points: 18.2},
  {count: 45, points: 18.4},
  {count: 46, points: 18.5},
  {count: 47, points: 18.6},
  {count: 48, points: 18.8},
  {count: 49, points: 19},
  {count: 50, points: 19.5},
  {count: 51, points: 20},

];

let mSuScoreSheet35_39 = [
  {count: 34, points: 3},
  {count: 35, points: 6},
  {count: 36, points: 9},
  {count: 37, points: 12},
  {count: 38, points: 13},
  {count: 39, points: 14},
  {count: 40, points: 15},
  {count: 41, points: 16},
  {count: 42, points: 16.6},
  {count: 43, points: 17},
  {count: 44, points: 17.4},
  {count: 45, points: 17.6},
  {count: 46, points: 18},
  {count: 47, points: 18.4},
  {count: 48, points: 18.8},
  {count: 49, points: 19},
  {count: 50, points: 19.4},
  {count: 51, points: 19.7},
  {count: 52, points: 20},

];

let mRtScoreSheet35_39 = [
  moment('09:46', format),
  moment('10:11', format),
  moment('10:24', format),
  moment('10:38', format),
  moment('10:52', format),
  moment('11:07', format),
  moment('11:23', format),
  moment('11:39', format),
  moment('11:57', format),
  moment('12:15', format),
  moment('12:34', format),
  moment('12:54', format),
  moment('13:15', format),
  moment('13:37', format),
  moment('14:01', format),
  moment('14:26', format),
  moment('14:53', format),
  moment('15:21', format),
  moment('15:51', format),
  moment('16:23', format),
  moment('16:58', format)
 
];

let mPuScoreSheet40_44 = [
  {count: 18, points: 1},
  {count: 19, points: 4},
  {count: 20, points: 7},
  {count: 21, points: 10},
  {count: 22, points: 11},
  {count: 23, points: 11.6},
  {count: 24, points: 12},
  {count: 25, points: 13},
  {count: 26, points: 14},
  {count: 27, points: 14.4},
  {count: 28, points: 14.6},
  {count: 29, points: 15},
  {count: 30, points: 16},
  {count: 31, points: 16.2},
  {count: 32, points: 16.6},
  {count: 33, points: 16.8},
  {count: 34, points: 17},
  {count: 35, points: 17.6},
  {count: 36, points: 18},
  {count: 37, points: 18.2},
  {count: 38, points: 18.4},
  {count: 39, points: 18.8},
  {count: 40, points: 19},
  {count: 41, points: 19.2},
  {count: 42, points: 19.4},
  {count: 43, points: 19.7},
  {count: 44, points: 20},

];

let mSuScoreSheet40_44 = [
  {count: 31, points: 3},
  {count: 32, points: 6},
  {count: 33, points: 9},
  {count: 34, points: 12},
  {count: 35, points: 13},
  {count: 36, points: 14},
  {count: 37, points: 15},
  {count: 38, points: 15.6},
  {count: 39, points: 16},
  {count: 40, points: 17},
  {count: 41, points: 17.4},
  {count: 42, points: 17.6},
  {count: 43, points: 18},
  {count: 44, points: 18.2},
  {count: 45, points: 18.4},
  {count: 46, points: 18.8},
  {count: 47, points: 19},
  {count: 48, points: 19.4},
  {count: 49, points: 19.7},
  {count: 50, points: 20}

];

let mRtScoreSheet40_44 = [
  moment('09:59', format),
  moment('10:24', format),
  moment('10:38', format),
  moment('10:52', format),
  moment('11:07', format),
  moment('11:23', format),
  moment('11:39', format),
  moment('11:57', format),
  moment('12:15', format),
  moment('12:34', format),
  moment('12:54', format),
  moment('13:15', format),
  moment('13:37', format),
  moment('14:01', format),
  moment('14:26', format),
  moment('14:53', format),
  moment('15:21', format),
  moment('15:51', format),
  moment('16:23', format),
  moment('16:58', format),
  moment('17:35', format)
 
];

let mPuScoreSheet45_49 = [
  {count: 15, points: 1},
  {count: 16, points: 4},
  {count: 17, points: 7},
  {count: 18, points: 10},
  {count: 19, points: 10.6},
  {count: 20, points: 11},
  {count: 21, points: 11.6},
  {count: 22, points: 12},
  {count: 23, points: 12.6},
  {count: 24, points: 13},
  {count: 25, points: 14},
  {count: 26, points: 14.4},
  {count: 27, points: 14.6},
  {count: 28, points: 15},
  {count: 29, points: 16},
  {count: 30, points: 16.2},
  {count: 31, points: 16.6},
  {count: 32, points: 16.8},
  {count: 33, points: 17},
  {count: 34, points: 17.6},
  {count: 35, points: 18},
  {count: 36, points: 18.2},
  {count: 37, points: 18.4},
  {count: 38, points: 18.8},
  {count: 39, points: 19},
  {count: 40, points: 19.2},
  {count: 41, points: 19.4},
  {count: 42, points: 19.6},
  {count: 43, points: 19.8},
  {count: 44, points: 20},

];

let mSuScoreSheet45_49 = [
  {count: 28, points: 3},
  {count: 29, points: 6},
  {count: 30, points: 9},
  {count: 31, points: 12},
  {count: 32, points: 13},
  {count: 33, points: 14},
  {count: 34, points: 15},
  {count: 35, points: 15.6},
  {count: 36, points: 16},
  {count: 37, points: 16.6},
  {count: 38, points: 17},
  {count: 39, points: 17.4},
  {count: 40, points: 17.6},
  {count: 41, points: 18},
  {count: 42, points: 18.4},
  {count: 43, points: 18.8},
  {count: 44, points: 19},
  {count: 45, points: 19.2},
  {count: 46, points: 19.4},
  {count: 47, points: 19.7},
  {count: 48, points: 20}

];

let mRtScoreSheet45_49 = [
  moment('10:11', format),
  moment('10:38', format),
  moment('10:52', format),
  moment('11:07', format),
  moment('11:23', format),
  moment('11:39', format),
  moment('11:57', format),
  moment('12:15', format),
  moment('12:34', format),
  moment('12:54', format),
  moment('13:15', format),
  moment('13:37', format),
  moment('14:01', format),
  moment('14:26', format),
  moment('14:53', format),
  moment('15:21', format),
  moment('15:51', format),
  moment('16:23', format),
  moment('16:58', format),
  moment('17:35', format),
  moment('18:15', format)
 
];

let mPuScoreSheet50_54 = [
  {count: 12, points: 1},
  {count: 13, points: 4},
  {count: 14, points: 7},
  {count: 15, points: 10},
  {count: 16, points: 10.6},
  {count: 17, points: 11},
  {count: 18, points: 11.6},
  {count: 19, points: 12},
  {count: 20, points: 12.6},
  {count: 21, points: 13},
  {count: 22, points: 14},
  {count: 23, points: 15},
  {count: 24, points: 16},
  {count: 25, points: 16.6},
  {count: 26, points: 17},
  {count: 27, points: 17.4},
  {count: 28, points: 17.6},
  {count: 29, points: 18},
  {count: 30, points: 18.2},
  {count: 31, points: 18.4},
  {count: 32, points: 18.8},
  {count: 33, points: 19},
  {count: 34, points: 19.4},
  {count: 35, points: 19.7},
  {count: 36, points: 20},

];

let mSuScoreSheet50_54 = [
  {count: 25, points: 3},
  {count: 26, points: 6},
  {count: 27, points: 9},
  {count: 28, points: 12},
  {count: 29, points: 12.6},
  {count: 30, points: 13},
  {count: 31, points: 14},
  {count: 32, points: 14.6},
  {count: 33, points: 15},
  {count: 34, points: 15.6},
  {count: 35, points: 16},
  {count: 36, points: 17},
  {count: 37, points: 17.4},
  {count: 38, points: 17.6},
  {count: 39, points: 18},
  {count: 40, points: 18.2},
  {count: 41, points: 18.4},
  {count: 42, points: 18.8},
  {count: 43, points: 19},
  {count: 44, points: 19.4},
  {count: 45, points: 19.7},
  {count: 46, points: 20}

];

let mRtScoreSheet50_54 = [
  moment('10:38', format),
  moment('11:07', format),
  moment('11:23', format),
  moment('11:39', format),
  moment('11:57', format),
  moment('12:15', format),
  moment('12:34', format),
  moment('12:54', format),
  moment('13:15', format),
  moment('13:37', format),
  moment('14:01', format),
  moment('14:26', format),
  moment('14:53', format),
  moment('15:21', format),
  moment('15:51', format),
  moment('16:23', format),
  moment('16:58', format),
  moment('17:35', format),
  moment('18:15', format),
  moment('18:57', format),
  moment('19:44', format)
 
];

let mPuScoreSheet55_59 = [
  {count: 12, points: 1},
  {count: 13, points: 4},
  {count: 14, points: 7},
  {count: 15, points: 10},
  {count: 16, points: 10.8},
  {count: 17, points: 11.4},
  {count: 18, points: 11.8},
  {count: 19, points: 12.4},
  {count: 20, points: 13},
  {count: 21, points: 14},
  {count: 22, points: 14.8},
  {count: 23, points: 15.8},
  {count: 24, points: 16.8},
  {count: 25, points: 17},
  {count: 26, points: 17.4},
  {count: 27, points: 17.8},
  {count: 28, points: 18},
  {count: 29, points: 18.4},
  {count: 30, points: 19},
  {count: 31, points: 19.4},
  {count: 32, points: 19.8},
  {count: 33, points: 20}

];

let mSuScoreSheet55_59 = [
  {count: 22, points: 3},
  {count: 23, points: 6},
  {count: 24, points: 9},
  {count: 25, points: 12},
  {count: 26, points: 12.6},
  {count: 27, points: 13},
  {count: 28, points: 13.6},
  {count: 29, points: 14},
  {count: 30, points: 14.6},
  {count: 31, points: 15},
  {count: 32, points: 15.6},
  {count: 33, points: 16},
  {count: 34, points: 17},
  {count: 35, points: 17.4},
  {count: 36, points: 17.6},
  {count: 37, points: 18},
  {count: 38, points: 18.2},
  {count: 39, points: 18.4},
  {count: 40, points: 18.8},
  {count: 41, points: 19},
  {count: 42, points: 19.4},
  {count: 43, points: 19.7},
  {count: 44, points: 20}

];

let mRtScoreSheet55_59 = [
  {count: moment('10:52', format), score: 59.5},
  {count: moment('11:23', format), score: 59},
  {count: moment('11:39', format), score: 58.5},
  {count: moment('11:57', format), score: 58},
  {count: moment('12:15', format), score: 57.5},
  {count: moment('12:34', format), score: 57},
  {count: moment('12:54', format), score: 56.5},
  {count: moment('13:15', format), score: 56},
  {count: moment('13:37', format), score: 55.5},
  {count: moment('14:01', format), score: 55},
  {count: moment('14:26', format), score: 54.5},
  {count: moment('14:53', format), score: 54},
  {count: moment('15:21', format), score: 53.5},
  {count: moment('15:51', format), score: 52},
  {count: moment('16:23', format), score: 50.5},
  {count: moment('16:58', format), score: 48},
  {count: moment('17:35', format), score: 45.5},
  {count: moment('18:15', format), score: 43},
  {count: moment('18:57', format), score: 40.5},
  {count: moment('19:44', format), score: 38},
  {count: moment('20:34', format), score: 35},
 
];

let mPuScoreSheet60 = [
  {count: 11, points: 1},
  {count: 12, points: 4},
  {count: 13, points: 7},
  {count: 14, points: 10},
  {count: 15, points: 10.6},
  {count: 16, points: 11},
  {count: 17, points: 11.6},
  {count: 18, points: 12},
  {count: 19, points: 12.6},
  {count: 20, points: 13},
  {count: 21, points: 14},
  {count: 22, points: 15},
  {count: 23, points: 16},
  {count: 24, points: 17},
  {count: 25, points: 17.6},
  {count: 26, points: 18},
  {count: 27, points: 18.6},
  {count: 28, points: 19},
  {count: 29, points: 19.5},
  {count: 30, points: 20}

];

let mSuScoreSheet60 = [
  {count: 19, points: 3},
  {count: 20, points: 6},
  {count: 21, points: 9},
  {count: 22, points: 12},
  {count: 23, points: 12.6},
  {count: 24, points: 13},
  {count: 25, points: 13.6},
  {count: 26, points: 14},
  {count: 27, points: 14.6},
  {count: 28, points: 15},
  {count: 29, points: 15.6},
  {count: 30, points: 16},
  {count: 31, points: 17},
  {count: 32, points: 17.2},
  {count: 33, points: 17.6},
  {count: 34, points: 17.8},
  {count: 35, points: 18},
  {count: 36, points: 18.2},
  {count: 37, points: 18.4},
  {count: 38, points: 18.8},
  {count: 39, points: 19},
  {count: 40, points: 19.4},
  {count: 41, points: 19.7},
  {count: 42, points: 20}

];

let mRtScoreSheet60 = [
  {count: moment('11:23', format), score: 59.5},
  {count: moment('11:57', format), score: 59},
  {count: moment('12:15', format),score: 58.5},
  {count: moment('12:34', format), score: 58},
  {count: moment('12:54', format), score: 57.5},
  {count: moment('13:15', format), score: 57},
  {count: moment('13:37', format), score: 56.5},
  {count: moment('14:01', format), score: 56},
  {count: moment('14:26', format), score: 55.5},
  {count: moment('14:53', format), score: 55},
  {count: moment('15:21', format), score: 54.5},
  {count: moment('15:51', format), score: 54},
  {count: moment('16:23', format), score: 52.5},
  {count: moment('16:58', format), score: 51},
  {count: moment('17:35', format), score: 49.5},
  {count: moment('18:15', format), score: 47},
  {count: moment('18:57', format), score: 44.5},
  {count: moment('19:44', format), score: 41.5},
  {count: moment('20:34', format), score: 38.5},
  {count: moment('21:29', format), score: 35},
 
];