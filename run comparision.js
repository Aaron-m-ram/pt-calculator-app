var runScore = new Date();
runScore.setMinutes(9, 35);
minute = runScore.getMinutes();
second = runScore.getSeconds();

function compRunTime(runTime) {
  var interval1 = new Date().setMinutes(9, 13);
  var interval1End = new Date().setMinutes(9, 34);

  if (runTime < interval1) {
    return 60.0;
  }

  if (runTime >= interval1 && runTime <= interval1End) {
    //console.log("You scored a 59.5 with the time: " +minute + ":" +second);
    return 59.5;
  }

  var interval2 = new Date().setMinutes(9, 35);
  var interval2End = new Date().setMinutes(9, 45);

  if (runTime >= interval2 && runTime <= interval2End) {
    return 59.0;
  }

  var interval3 = new Date().setMinutes(9, 46);
  var interval3End = new Date().setMinutes(9, 58);

  if (runTime >= interval3 && runTime <= interval3End) {
    return 58.5;
  }

  var interval4 = new Date().setMinutes(9, 59);
  var interval4End = new Date().setMinutes(10, 10);

  if (runTime >= interval4 && runTime <= interval4End) {
    return 58.0;
  }

  var interval5 = new Date().setMinutes(10, 11);
  var interval5End = new Date().setMinutes(10, 23);

  if (runTime >= interval5 && runTime <= interval5End) {
    return 57.5;
  }

  var interval6 = new Date().setMinutes(10, 24);
  var interval6End = new Date().setMinutes(10, 37);

  if (runTime >= interval6 && runTime <= interval6End) {
    return 57.0;
  }

  var interval7 = new Date().setMinutes(10, 38);
  var interval7End = new Date().setMinutes(10, 51);

  if (runTime >= interval7 && runTime <= interval7End) {
    return 56.5;
  }

  var interval8 = new Date().setMinutes(10, 52);
  var interval8End = new Date().setMinutes(11, 06);

  if (runTime >= interval8 && runTime <= interval8End) {
    return 56.0;
  }

  var interval9 = new Date().setMinutes(11, 07);
  var interval9End = new Date().setMinutes(11, 22);

  if (runTime >= interval9 && runTime <= interval9End) {
    return 55.0;
  }

  var interval10 = new Date().setMinutes(11, 23);
  var interval10End = new Date().setMinutes(11, 38);

  var interval11 = new Date().setMinutes(11, 39);
  var interval11End = new Date().setMinutes(11, 56);

  var interval12 = new Date().setMinutes(11, 39);
  var interval12End = new Date().setMinutes(11, 56);

  var interval13 = new Date().setMinutes(11, 57);
  var interval13End = new Date().setMinutes(12, 14);

  var interval14 = new Date().setMinutes(12, 15);
  var interval14End = new Date().setMinutes(12, 33);

  var interval15 = new Date().setMinutes(12, 34);
  var interval15End = new Date().setMinutes(12, 53);

  var interval16 = new Date().setMinutes(12, 54);
  var interval16End = new Date().setMinutes(13, 14);

  var interval17 = new Date().setMinutes(13, 15);
  var interval17End = new Date().setMinutes(13, 36);

  var interval18 = new Date().setMinutes(13, 37);
  var interval18End = new Date().setMinutes(14, 00);

  var interval19 = new Date().setMinutes(14, 01);
  var interval19End = new Date().setMinutes(14, 25);

  var interval20 = new Date().setMinutes(14, 01);
  var interval20End = new Date().setMinutes(14, 25);

  var interval21 = new Date().setMinutes(14, 01);
  var interval21End = new Date().setMinutes(14, 25);

  var interval22 = new Date().setMinutes(14, 26);
  var interval22End = new Date().setMinutes(14, 52);

  var interval23 = new Date().setMinutes(14, 53);
  var interval23End = new Date().setMinutes(15, 20);

  var interval24 = new Date().setMinutes(15, 21);
  var interval24End = new Date().setMinutes(15, 50);
}

console.log(compRunTime(runScore));
