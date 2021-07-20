/* VARIABLES */

//import { run } from "jest";

//import moment from 'moment';
var format = 'mm:ss' //format for moments

/************* BIG DATABASE ******************/
/* ***************************************** */
/* ***************************************** */

/* Male 17-24 */
let mPuScoreSheet17_24 = [
    {count: 30, points: 1.0},
    {count: 31, points: 4.0},
    {count: 32, points: 7.0},
    {count: 33, points: 10.0},
    {count: 34, points: 10.6},
    {count: 35, points: 11.0},
    {count: 36, points: 11.6},
    {count: 37, points: 12.0},
    {count: 38, points: 12.6},
    {count: 39, points: 13.0},
    {count: 40, points: 13.6},
    {count: 41, points: 14.0},
    {count: 42, points: 14.4},
    {count: 43, points: 14.6},
    {count: 44, points: 15.0},
    {count: 45, points: 15.4},
    {count: 46, points: 15.6},
    {count: 47, points: 16.0},
    {count: 48, points: 16.2},
    {count: 49, points: 16.6},
    {count: 50, points: 16.8},
    {count: 51, points: 17.0},
    {count: 52, points: 17.2},
    {count: 53, points: 17.4},
    {count: 54, points: 17.6},
    {count: 55, points: 17.7},
    {count: 56, points: 17.8},
    {count: 57, points: 18.0},
    {count: 58, points: 18.2},
    {count: 59, points: 18.4},
    {count: 60, points: 18.6},
    {count: 61, points: 18.8},
    {count: 62, points: 19.0},
    {count: 63, points: 19.2},
    {count: 64, points: 19.4},
    {count: 65, points: 19.6},
    {count: 66, points: 19.8},
    {count: 67, points: 20.0},
  ]; // push up scoresheet

let mSuScoreSheet17_24 = [
    {count: 39, points: 3.0},
    {count: 40, points: 6.0},
    {count: 41, points: 9.0},
    {count: 42, points: 12.0},
    {count: 43, points: 12.6},
    {count: 44, points: 13.0},
    {count: 45, points: 14.0},
    {count: 46, points: 15.0},
    {count: 47, points: 16.0},
    {count: 48, points: 16.6},
    {count: 49, points: 17.0},
    {count: 50, points: 17.4},
    {count: 51, points: 17.6},
    {count: 52, points: 18.0},
    {count: 53, points: 18.4},
    {count: 54, points: 18.8},
    {count: 55, points: 19.0},
    {count: 56, points: 19.4},
    {count: 57, points: 19.7},
    {count: 58, points: 20.0},
   ]; // sit up scoresheet

var mRtScoreSheet17_24 = [
    {timeR: moment('09:13', format), points: 60.0},
    {timeR: moment('09:35', format), points: 59.5},
    {timeR: moment('09:46', format), points: 59.0},
    {timeR: moment('09:59', format), points: 58.5},
    {timeR: moment('10:11', format), points: 58.0},
    {timeR: moment('10:24', format), points: 57.5},
    {timeR: moment('10:38', format), points: 57.0},
    {timeR: moment('10:52', format), points: 56.5},
    {timeR: moment('11:07', format), points: 56.0},
    {timeR: moment('11:23', format), points: 55.5},
    {timeR: moment('11:39', format), points: 55.0},
    {timeR: moment('11:57', format), points: 54.5},
    {timeR: moment('12:15', format), points: 54.0},
    {timeR: moment('12:34', format), points: 53.5},
    {timeR: moment('12:54', format), points: 52.0},
    {timeR: moment('13:15', format), points: 50.5},
    {timeR: moment('13:37', format), points: 49.0},
    {timeR: moment('14:01', format), points: 46.5},
    {timeR: moment('14:26', format), points: 44.0},
    {timeR: moment('14:53', format), points: 41.0},
    {timeR: moment('15:21', format), points: 38.0},
    {timeR: moment('15:51', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0},
  ]; // run time scoresheet

var mWtScoreSheet17_24 = [
  {timeW: moment('16:17', format), points: 60.0},
  {timeW: moment('59:59', format), points: 0.0}
]; //walk test Male 17-24

/* Male 25-29 */
let mPuScoreSheet25_29 = [
    {count: 27, points: 1.0},
    {count: 28, points: 4.0},
    {count: 29, points: 7.0},
    {count: 30, points: 10.0},
    {count: 31, points: 10.6},
    {count: 32, points: 11.0},
    {count: 33, points: 11.6},
    {count: 34, points: 12.0},
    {count: 35, points: 12.6},
    {count: 36, points: 13.0},
    {count: 37, points: 13.6},
    {count: 38, points: 14.0},
    {count: 39, points: 14.4},
    {count: 40, points: 14.6},
    {count: 41, points: 15.0},
    {count: 42, points: 15.4},
    {count: 43, points: 15.6},
    {count: 44, points: 16.0},
    {count: 45, points: 16.2},
    {count: 46, points: 16.6},
    {count: 47, points: 16.8},
    {count: 48, points: 17.0},
    {count: 49, points: 17.2},
    {count: 50, points: 17.4},
    {count: 51, points: 17.5},
    {count: 52, points: 17.6},
    {count: 53, points: 17.8},
    {count: 54, points: 18.0},
    {count: 55, points: 18.2},
    {count: 56, points: 18.4},
    {count: 57, points: 18.6},
    {count: 58, points: 18.8},
    {count: 59, points: 19.0},
    {count: 60, points: 19.4},
    {count: 61, points: 19.7},
    {count: 62, points: 20.0},
  
  ]; // push up scoresheet

let mSuScoreSheet25_29 = [
    {count: 38, points: 3.0},
    {count: 39, points: 6.0},
    {count: 40, points: 9.0},
    {count: 41, points: 12.0},
    {count: 42, points: 12.6},
    {count: 43, points: 13.0},
    {count: 44, points: 14.0},
    {count: 45, points: 15.0},
    {count: 46, points: 16.0},
    {count: 47, points: 16.6},
    {count: 48, points: 17.0},
    {count: 49, points: 17.4},
    {count: 50, points: 17.6},
    {count: 51, points: 18.0},
    {count: 52, points: 18.4},
    {count: 53, points: 18.8},
    {count: 54, points: 19.0},
    {count: 55, points: 19.5},
    {count: 56, points: 20.0},
  ]; //sit up scoresheet

let mRtScoreSheet25_29 = [
    {timeR: moment('09:23', format), points: 60.0},
    {timeR: moment('09:46', format), points: 59.5},
    {timeR: moment('09:59', format), points: 59.0},
    {timeR: moment('10:11', format), points: 58.5},
    {timeR: moment('10:24', format), points: 58.0},
    {timeR: moment('10:38', format), points: 57.5},
    {timeR: moment('10:52', format), points: 57.0},
    {timeR: moment('11:07', format), points: 56.5},
    {timeR: moment('11:23', format), points: 56.0},
    {timeR: moment('11:39', format), points: 55.5},
    {timeR: moment('11:57', format), points: 55.0},
    {timeR: moment('12:15', format), points: 54.5},
    {timeR: moment('12:34', format), points: 54.0},
    {timeR: moment('12:54', format), points: 53.5},
    {timeR: moment('13:15', format), points: 52.0},
    {timeR: moment('13:37', format), points: 50.5},
    {timeR: moment('14:01', format), points: 49.0},
    {timeR: moment('14:26', format), points: 46.5},
    {timeR: moment('14:53', format), points: 44.0},
    {timeR: moment('15:21', format), points: 41.0},
    {timeR: moment('15:51', format), points: 38.0},
    {timeR: moment('16:23', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
    ]; // run time scoresheet

    var mWtScoreSheet25_29 = [
      {timeW: moment('16:17', format), points: 60.0},
      {timeW: moment('59:59', format), points: 0.0}
    ]; //walk test Male 17-24

/* Male 30-34 */
let mPuScoreSheet30_34 = [
    {count: 24, points: 1.0},
    {count: 25, points: 4.0},
    {count: 26, points: 7.0},
    {count: 27, points: 10.0},
    {count: 28, points: 10.6},
    {count: 29, points: 11.0},
    {count: 30, points: 12.0},
    {count: 31, points: 13.0},
    {count: 32, points: 13.4},
    {count: 33, points: 13.6},
    {count: 34, points: 14.0},
    {count: 35, points: 14.6},
    {count: 36, points: 15.0},
    {count: 37, points: 15.4},
    {count: 38, points: 15.6},
    {count: 39, points: 16.0},
    {count: 40, points: 16.6},
    {count: 41, points: 17.0},
    {count: 42, points: 17.2},
    {count: 43, points: 17.4},
    {count: 44, points: 17.6},
    {count: 45, points: 17.8},
    {count: 46, points: 18.0},
    {count: 47, points: 18.2},
    {count: 48, points: 18.4},
    {count: 49, points: 18.5},
    {count: 50, points: 18.6},
    {count: 51, points: 18.8},
    {count: 52, points: 19.0},
    {count: 53, points: 19.2},
    {count: 54, points: 19.4},
    {count: 55, points: 19.6},
    {count: 56, points: 19.8},
    {count: 57, points: 20.0},
  
  ]; // push up scoresheet
  
let mSuScoreSheet30_34 = [
    {count: 36, points: 3.0},
    {count: 37, points: 6.0},
    {count: 38, points: 9.0},
    {count: 39, points: 12.0},
    {count: 40, points: 13.0},
    {count: 41, points: 14.0},
    {count: 42, points: 15.0},
    {count: 43, points: 16.0},
    {count: 44, points: 16.6},
    {count: 45, points: 17.0},
    {count: 46, points: 17.4},
    {count: 47, points: 17.6},
    {count: 48, points: 18.0},
    {count: 49, points: 18.4},
    {count: 50, points: 18.8},
    {count: 51, points: 19.0},
    {count: 52, points: 19.4},
    {count: 53, points: 19.7},
    {count: 54, points: 20.0},
  
  ]; // sit up scoresheet

let mRtScoreSheet30_34 = [
    {timeR: moment('09:35', format), points: 60.0},
    {timeR: moment('09:59', format), points: 59.5},
    {timeR: moment('10:11', format), points: 59.0},
    {timeR: moment('10:24', format), points: 58.5},
    {timeR: moment('10:38', format), points: 58.0},
    {timeR: moment('10:52', format), points: 57.5},
    {timeR: moment('11:07', format), points: 57.0},
    {timeR: moment('11:23', format), points: 56.5},
    {timeR: moment('11:39', format), points: 56.0},
    {timeR: moment('11:57', format), points: 55.5},
    {timeR: moment('12:15', format), points: 55.0},
    {timeR: moment('12:34', format), points: 54.4},
    {timeR: moment('12:54', format), points: 54.0},
    {timeR: moment('13:15', format), points: 53.5},
    {timeR: moment('13:37', format), points: 52.0},
    {timeR: moment('14:01', format), points: 50.5},
    {timeR: moment('14:26', format), points: 48.0},
    {timeR: moment('14:53', format), points: 45.5},
    {timeR: moment('15:21', format), points: 43.0},
    {timeR: moment('15:51', format), points: 40.5},
    {timeR: moment('16:23', format), points: 38.0},
    {timeR: moment('16:58', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
   
  ]; // run time scoresheet

  var mWtScoreSheet30_34 = [
    {timeW: moment('16:19', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test Male 30-34

/* Male 35-39 */
let mPuScoreSheet35_39 = [
    {count: 21, points: 1.0},
    {count: 22, points: 4.0},
    {count: 23, points: 7.0},
    {count: 24, points: 10.0},
    {count: 25, points: 10.6},
    {count: 26, points: 11.0},
    {count: 27, points: 12.0},
    {count: 28, points: 13.0},
    {count: 29, points: 13.4},
    {count: 30, points: 13.6},
    {count: 31, points: 14.0},
    {count: 32, points: 14.6},
    {count: 33, points: 15.0},
    {count: 34, points: 15.4},
    {count: 35, points: 15.6},
    {count: 36, points: 16.0},
    {count: 37, points: 16.6},
    {count: 38, points: 17.0},
    {count: 39, points: 17.2},
    {count: 40, points: 17.4},
    {count: 41, points: 17.6},
    {count: 42, points: 17.8},
    {count: 43, points: 18.0},
    {count: 44, points: 18.2},
    {count: 45, points: 18.4},
    {count: 46, points: 18.5},
    {count: 47, points: 18.6},
    {count: 48, points: 18.8},
    {count: 49, points: 19.0},
    {count: 50, points: 19.5},
    {count: 51, points: 20.0},
  
  ]; // push up scoresheet

let mSuScoreSheet35_39 = [
    {count: 34, points: 3.0},
    {count: 35, points: 6.0},
    {count: 36, points: 9.0},
    {count: 37, points: 12.0},
    {count: 38, points: 13.0},
    {count: 39, points: 14.0},
    {count: 40, points: 15.0},
    {count: 41, points: 16.0},
    {count: 42, points: 16.6},
    {count: 43, points: 17.0},
    {count: 44, points: 17.4},
    {count: 45, points: 17.6},
    {count: 46, points: 18.0},
    {count: 47, points: 18.4},
    {count: 48, points: 18.8},
    {count: 49, points: 19.0},
    {count: 50, points: 19.4},
    {count: 51, points: 19.7},
    {count: 52, points: 20.0},
  
  ]; // sit ups scoresheet

let mRtScoreSheet35_39 = [
    {timeR: moment('09:46', format), points: 60.0},
    {timeR: moment('10:11', format), points: 59.5},
    {timeR: moment('10:24', format), points: 59.0},
    {timeR: moment('10:38', format), points: 58.5},
    {timeR: moment('10:52', format), points: 58.0},
    {timeR: moment('11:07', format), points: 57.5},
    {timeR: moment('11:23', format), points: 57.0},
    {timeR: moment('11:39', format), points: 56.6},
    {timeR: moment('11:57', format), points: 56.0},
    {timeR: moment('12:15', format), points: 55.5},
    {timeR: moment('12:34', format), points: 55.0},
    {timeR: moment('12:54', format), points: 54.5},
    {timeR: moment('13:15', format), points: 54.0},
    {timeR: moment('13:37', format), points: 53.5},
    {timeR: moment('14:01', format), points: 52.0},
    {timeR: moment('14:26', format), points: 50.5},
    {timeR: moment('14:53', format), points: 48.0},
    {timeR: moment('15:21', format), points: 45.5},
    {timeR: moment('15:51', format), points: 43.0},
    {timeR: moment('16:23', format), points: 40.5},
    {timeR: moment('16:58', format), points: 38.0},
    {timeR: moment('17:35', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
   
  ]; // run time scoresheet

  var mWtScoreSheet35_39 = [
    {timeW: moment('16:19', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test Male 35-39

/* male 40-44 */
let mPuScoreSheet40_44 = [
    {count: 18, points: 1.0},
    {count: 19, points: 4.0},
    {count: 20, points: 7.0},
    {count: 21, points: 10.0},
    {count: 22, points: 11.0},
    {count: 23, points: 11.6},
    {count: 24, points: 12.0},
    {count: 25, points: 13.0},
    {count: 26, points: 14.0},
    {count: 27, points: 14.4},
    {count: 28, points: 14.6},
    {count: 29, points: 15.0},
    {count: 30, points: 16.0},
    {count: 31, points: 16.2},
    {count: 32, points: 16.6},
    {count: 33, points: 16.8},
    {count: 34, points: 17.0},
    {count: 35, points: 17.6},
    {count: 36, points: 18.0},
    {count: 37, points: 18.2},
    {count: 38, points: 18.4},
    {count: 39, points: 18.8},
    {count: 40, points: 19.0},
    {count: 41, points: 19.2},
    {count: 42, points: 19.4},
    {count: 43, points: 19.7},
    {count: 44, points: 20.0},
  
  ]; //push up scoresheet
  
let mSuScoreSheet40_44 = [
    {count: 31, points: 3.0},
    {count: 32, points: 6.0},
    {count: 33, points: 9.0},
    {count: 34, points: 12.0},
    {count: 35, points: 13.0},
    {count: 36, points: 14.0},
    {count: 37, points: 15.0},
    {count: 38, points: 15.6},
    {count: 39, points: 16.0},
    {count: 40, points: 17.0},
    {count: 41, points: 17.4},
    {count: 42, points: 17.6},
    {count: 43, points: 18.0},
    {count: 44, points: 18.2},
    {count: 45, points: 18.4},
    {count: 46, points: 18.8},
    {count: 47, points: 19.0},
    {count: 48, points: 19.4},
    {count: 49, points: 19.7},
    {count: 50, points: 20.0}
  
  ]; // sit ups scoresheet
  
let mRtScoreSheet40_44 = [
    {timeR: moment('09:59', format), points: 60.0},
    {timeR: moment('10:24', format), points: 59.5},
    {timeR: moment('10:38', format), points: 59.0},
    {timeR: moment('10:52', format), points: 58.5},
    {timeR: moment('11:07', format), points: 58.0},
    {timeR: moment('11:23', format), points: 57.7},
    {timeR: moment('11:39', format), points: 57.0},
    {timeR: moment('11:57', format), points: 56.5},
    {timeR: moment('12:15', format), points: 56.0},
    {timeR: moment('12:34', format), points: 55.5},
    {timeR: moment('12:54', format), points: 55.0},
    {timeR: moment('13:15', format), points: 54.5},
    {timeR: moment('13:37', format), points: 54.0},
    {timeR: moment('14:01', format), points: 53.5},
    {timeR: moment('14:26', format), points: 52.0},
    {timeR: moment('14:53', format), points: 50.5},
    {timeR: moment('15:21', format), points: 48.0},
    {timeR: moment('15:51', format), points: 45.5},
    {timeR: moment('16:23', format), points: 43.0},
    {timeR: moment('16:58', format), points: 40.5},
    {timeR: moment('17:35', format), points: 38.0},
    {timeR: moment('18:15', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
   
  ]; // run time scoresheet

  var mWtScoreSheet40_44 = [
    {timeW: moment('16:24', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test Male 40-44

/* Male 45-49 */
let mPuScoreSheet45_49 = [
    {count: 15, points: 1.0},
    {count: 16, points: 4.0},
    {count: 17, points: 7.0},
    {count: 18, points: 10.0},
    {count: 19, points: 10.6},
    {count: 20, points: 11.0},
    {count: 21, points: 11.6},
    {count: 22, points: 12.0},
    {count: 23, points: 12.6},
    {count: 24, points: 13.0},
    {count: 25, points: 14.0},
    {count: 26, points: 14.4},
    {count: 27, points: 14.6},
    {count: 28, points: 15.0},
    {count: 29, points: 16.0},
    {count: 30, points: 16.2},
    {count: 31, points: 16.6},
    {count: 32, points: 16.8},
    {count: 33, points: 17.0},
    {count: 34, points: 17.6},
    {count: 35, points: 18.0},
    {count: 36, points: 18.2},
    {count: 37, points: 18.4},
    {count: 38, points: 18.8},
    {count: 39, points: 19.0},
    {count: 40, points: 19.2},
    {count: 41, points: 19.4},
    {count: 42, points: 19.6},
    {count: 43, points: 19.8},
    {count: 44, points: 20.0},
  
  ]; // push up scoresheet
  
let mSuScoreSheet45_49 = [
    {count: 28, points: 3.0},
    {count: 29, points: 6.0},
    {count: 30, points: 9.0},
    {count: 31, points: 12.0},
    {count: 32, points: 13.0},
    {count: 33, points: 14.0},
    {count: 34, points: 15.0},
    {count: 35, points: 15.6},
    {count: 36, points: 16.0},
    {count: 37, points: 16.6},
    {count: 38, points: 17.0},
    {count: 39, points: 17.4},
    {count: 40, points: 17.6},
    {count: 41, points: 18.0},
    {count: 42, points: 18.4},
    {count: 43, points: 18.8},
    {count: 44, points: 19.0},
    {count: 45, points: 19.2},
    {count: 46, points: 19.4},
    {count: 47, points: 19.7},
    {count: 48, points: 20.0}
  
  ]; // sit up scoresheet
  
let mRtScoreSheet45_49 = [
    {timeR: moment('10:11', format), points: 60.0},
    {timeR: moment('10:38', format), points: 59.5},
    {timeR: moment('10:52', format), points: 59.0},
    {timeR: moment('11:07', format), points: 58.5},
    {timeR: moment('11:23', format), points: 58.0},
    {timeR: moment('11:39', format), points: 57.5},
    {timeR: moment('11:57', format), points: 57.0},
    {timeR: moment('12:15', format), points: 56.5},
    {timeR: moment('12:34', format), points: 56.0},
    {timeR: moment('12:54', format), points: 55.5},
    {timeR: moment('13:15', format), points: 55.0},
    {timeR: moment('13:37', format), points: 54.4},
    {timeR: moment('14:01', format), points: 54.0},
    {timeR: moment('14:26', format), points: 53.5},
    {timeR: moment('14:53', format), points: 52.0},
    {timeR: moment('15:21', format), points: 50.5},
    {timeR: moment('15:51', format), points: 49.0},
    {timeR: moment('16:23', format), points: 46.5},
    {timeR: moment('16:58', format), points: 44.0},
    {timeR: moment('17:35', format), points: 41.0},
    {timeR: moment('18:15', format), points: 38.0},
    {timeR: moment('18:57', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
   
  ]; // run time scoresheet

  var mWtScoreSheet45_49 = [
    {timeW: moment('16:24', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test Male 44-49

/* Male 50-54 */
let mPuScoreSheet50_54 = [
    {count: 12, points: 1.0},
    {count: 13, points: 4.0},
    {count: 14, points: 7.0},
    {count: 15, points: 10.0},
    {count: 16, points: 10.6},
    {count: 17, points: 11.0},
    {count: 18, points: 11.6},
    {count: 19, points: 12.0},
    {count: 20, points: 12.6},
    {count: 21, points: 13.0},
    {count: 22, points: 14.0},
    {count: 23, points: 15.0},
    {count: 24, points: 16.0},
    {count: 25, points: 16.6},
    {count: 26, points: 17.0},
    {count: 27, points: 17.4},
    {count: 28, points: 17.6},
    {count: 29, points: 18.0},
    {count: 30, points: 18.2},
    {count: 31, points: 18.4},
    {count: 32, points: 18.8},
    {count: 33, points: 19.0},
    {count: 34, points: 19.4},
    {count: 35, points: 19.7},
    {count: 36, points: 20.0},
  
  ]; //push ups scoresheet
  
let mSuScoreSheet50_54 = [
    {count: 25, points: 3.0},
    {count: 26, points: 6.0},
    {count: 27, points: 9.0},
    {count: 28, points: 12.0},
    {count: 29, points: 12.6},
    {count: 30, points: 13.0},
    {count: 31, points: 14.0},
    {count: 32, points: 14.6},
    {count: 33, points: 15.0},
    {count: 34, points: 15.6},
    {count: 35, points: 16.0},
    {count: 36, points: 17.0},
    {count: 37, points: 17.4},
    {count: 38, points: 17.6},
    {count: 39, points: 18.0},
    {count: 40, points: 18.2},
    {count: 41, points: 18.4},
    {count: 42, points: 18.8},
    {count: 43, points: 19.0},
    {count: 44, points: 19.4},
    {count: 45, points: 19.7},
    {count: 46, points: 20.0}
  
  ]; // sit up scoresheet
  
let mRtScoreSheet50_54 = [
    {timeR: moment('10:38', format), points: 60.0},
    {timeR: moment('11:07', format), points: 59.5},
    {timeR: moment('11:23', format), points: 59.0},
    {timeR: moment('11:39', format), points: 58.5},
    {timeR: moment('11:57', format), points: 58.0},
    {timeR: moment('12:15', format), points: 57.5},
    {timeR: moment('12:34', format), points: 57.0},
    {timeR: moment('12:54', format), points: 56.5},
    {timeR: moment('13:15', format), points: 56.0},
    {timeR: moment('13:37', format), points: 55.5},
    {timeR: moment('14:01', format), points: 55.0},
    {timeR: moment('14:26', format), points: 54.5},
    {timeR: moment('14:53', format), points: 54.0},
    {timeR: moment('15:21', format), points: 53.5},
    {timeR: moment('15:51', format), points: 52.0},
    {timeR: moment('16:23', format), points: 50.5},
    {timeR: moment('16:58', format), points: 48.0},
    {timeR: moment('17:35', format), points: 45.5},
    {timeR: moment('18:15', format), points: 43.0},
    {timeR: moment('18:57', format), points: 40.5},
    {timeR: moment('19:44', format), points: 38.0},
    {timeR: moment('20:34', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
   
  ]; // run time scoresheet

  var mWtScoreSheet50_54 = [
    {timeW: moment('16:41', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test Male 50-54

/* Male 55-59 */
let mPuScoreSheet55_59 = [
    {count: 12, points: 1.0},
    {count: 13, points: 4.0},
    {count: 14, points: 7.0},
    {count: 15, points: 10.0},
    {count: 16, points: 10.8},
    {count: 17, points: 11.4},
    {count: 18, points: 11.8},
    {count: 19, points: 12.4},
    {count: 20, points: 13.0},
    {count: 21, points: 14.0},
    {count: 22, points: 14.8},
    {count: 23, points: 15.8},
    {count: 24, points: 16.8},
    {count: 25, points: 17.0},
    {count: 26, points: 17.4},
    {count: 27, points: 17.8},
    {count: 28, points: 18.0},
    {count: 29, points: 18.4},
    {count: 30, points: 19.0},
    {count: 31, points: 19.4},
    {count: 32, points: 19.8},
    {count: 33, points: 20.0}
  
  ]; // push up scoresheet
  
let mSuScoreSheet55_59 = [
    {count: 22, points: 3.0},
    {count: 23, points: 6.0},
    {count: 24, points: 9.0},
    {count: 25, points: 12.0},
    {count: 26, points: 12.6},
    {count: 27, points: 13.0},
    {count: 28, points: 13.6},
    {count: 29, points: 14.0},
    {count: 30, points: 14.6},
    {count: 31, points: 15.0},
    {count: 32, points: 15.6},
    {count: 33, points: 16.0},
    {count: 34, points: 17.0},
    {count: 35, points: 17.4},
    {count: 36, points: 17.6},
    {count: 37, points: 18.0},
    {count: 38, points: 18.2},
    {count: 39, points: 18.4},
    {count: 40, points: 18.8},
    {count: 41, points: 19.0},
    {count: 42, points: 19.4},
    {count: 43, points: 19.7},
    {count: 44, points: 20.0}
  
  ]; // sit ups scoresheet
  
let mRtScoreSheet55_59 = [
    {timeR: moment('10:52', format), points: 60.0},
    {timeR: moment('11:23', format), points: 59.5},
    {timeR: moment('11:39', format), points: 59.0},
    {timeR: moment('11:57', format), points: 58.5},
    {timeR: moment('12:15', format), points: 58.0},
    {timeR: moment('12:34', format), points: 57.5},
    {timeR: moment('12:54', format), points: 57.0},
    {timeR: moment('13:15', format), points: 56.5},
    {timeR: moment('13:37', format), points: 56.0},
    {timeR: moment('14:01', format), points: 55.5},
    {timeR: moment('14:26', format), points: 55.0},
    {timeR: moment('14:53', format), points: 54.5},
    {timeR: moment('15:21', format), points: 54.0},
    {timeR: moment('15:51', format), points: 53.5},
    {timeR: moment('16:23', format), points: 52.0},
    {timeR: moment('16:58', format), points: 50.5},
    {timeR: moment('17:35', format), points: 48.0},
    {timeR: moment('18:15', format), points: 45.5},
    {timeR: moment('18:57', format), points: 43.0},
    {timeR: moment('19:44', format), points: 40.5},
    {timeR: moment('20:34', format), points: 38.0},
    {timeR: moment('21:29', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
   
  ]; // run time scoresheet

  var mWtScoreSheet55_59 = [
    {timeW: moment('16:41', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test Male 54-59

/* Male 60 and up */
let mPuScoreSheet60 = [
    {count: 11, points: 1.0},
    {count: 12, points: 4.0},
    {count: 13, points: 7.0},
    {count: 14, points: 10.0},
    {count: 15, points: 10.6},
    {count: 16, points: 11.0},
    {count: 17, points: 11.6},
    {count: 18, points: 12.0},
    {count: 19, points: 12.6},
    {count: 20, points: 13.0},
    {count: 21, points: 14.0},
    {count: 22, points: 15.0},
    {count: 23, points: 16.0},
    {count: 24, points: 17.0},
    {count: 25, points: 17.6},
    {count: 26, points: 18.0},
    {count: 27, points: 18.6},
    {count: 28, points: 19.0},
    {count: 29, points: 19.5},
    {count: 30, points: 20.0}
  
  ]; // push up scoresheet
  
let mSuScoreSheet60 = [
    {count: 19, points: 3.0},
    {count: 20, points: 6.0},
    {count: 21, points: 9.0},
    {count: 22, points: 12.0},
    {count: 23, points: 12.6},
    {count: 24, points: 13.0},
    {count: 25, points: 13.6},
    {count: 26, points: 14.0},
    {count: 27, points: 14.6},
    {count: 28, points: 15.0},
    {count: 29, points: 15.6},
    {count: 30, points: 16.0},
    {count: 31, points: 17.0},
    {count: 32, points: 17.2},
    {count: 33, points: 17.6},
    {count: 34, points: 17.8},
    {count: 35, points: 18.0},
    {count: 36, points: 18.2},
    {count: 37, points: 18.4},
    {count: 38, points: 18.8},
    {count: 39, points: 19.0},
    {count: 40, points: 19.4},
    {count: 41, points: 19.7},
    {count: 42, points: 20.0}
  
  ]; // sit up scoresheets
  
let mRtScoreSheet60 = [
    {timeR: moment('11:23', format), points: 60.0},
    {timeR: moment('11:57', format), points: 59.5},
    {timeR: moment('12:15', format), points: 59.0},
    {timeR: moment('12:34', format), points: 58.5},
    {timeR: moment('12:54', format), points: 58.0},
    {timeR: moment('13:15', format), points: 57.5},
    {timeR: moment('13:37', format), points: 57.0},
    {timeR: moment('14:01', format), points: 56.5},
    {timeR: moment('14:26', format), points: 56.0},
    {timeR: moment('14:53', format), points: 55.5},
    {timeR: moment('15:21', format), points: 55.0},
    {timeR: moment('15:51', format), points: 54.5},
    {timeR: moment('16:23', format), points: 54.0},
    {timeR: moment('16:58', format), points: 52.5},
    {timeR: moment('17:35', format), points: 51.0},
    {timeR: moment('18:15', format), points: 49.5},
    {timeR: moment('18:57', format), points: 47.0},
    {timeR: moment('19:44', format), points: 44.5},
    {timeR: moment('20:34', format), points: 41.5},
    {timeR: moment('21:29', format), points: 38.5},
    {timeR: moment('22:29', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
   
  ]; // run time scoresheet

  var mWtScoreSheet60 = [
    {timeW: moment('16:59', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test Male 60+

/* Female 17-24 */
let fPuScoreSheet17_24 = [
    {count: 15, points: 1.0},
    {count: 16, points: 4.0},
    {count: 17, points: 7.0},
    {count: 18, points: 10.0},
    {count: 19, points: 11.0},
    {count: 20, points: 11.6},
    {count: 21, points: 12.0},
    {count: 22, points: 12.6},
    {count: 23, points: 13.0},
    {count: 24, points: 14.0},
    {count: 25, points: 14.4},
    {count: 26, points: 14.6},
    {count: 27, points: 15.0},
    {count: 28, points: 16.0},
    {count: 29, points: 16.2},
    {count: 30, points: 16.4},
    {count: 31, points: 16.6},
    {count: 32, points: 16.8},
    {count: 33, points: 17.0},
    {count: 34, points: 17.2},
    {count: 35, points: 17.6},
    {count: 36, points: 17.8},
    {count: 37, points: 18.0},
    {count: 38, points: 18.2},
    {count: 39, points: 18.4},
    {count: 40, points: 18.6},
    {count: 41, points: 18.8},
    {count: 42, points: 19.0},
    {count: 43, points: 19.2},
    {count: 44, points: 19.4},
    {count: 45, points: 19.6},
    {count: 46, points: 19.8},
    {count: 47, points: 20.0}
  
  ]; // push up scoresheet
  
let fSuScoreSheet17_24 = [
    {count: 35, points: 3.0},
    {count: 36, points: 6.0},
    {count: 37, points: 9.0},
    {count: 38, points: 12.0},
    {count: 39, points: 13.0},
    {count: 40, points: 13.6},
    {count: 41, points: 14.0},
    {count: 42, points: 15.0},
    {count: 43, points: 15.6},
    {count: 44, points: 16.0},
    {count: 45, points: 17.0},
    {count: 46, points: 17.2},
    {count: 47, points: 17.6},
    {count: 48, points: 17.8},
    {count: 49, points: 18.0},
    {count: 50, points: 18.8},
    {count: 51, points: 19.0},
    {count: 52, points: 19.4},
    {count: 53, points: 19.7},
    {count: 54, points: 20.0}
  
  ]; // sit up scoresheet
  
let fRtScoreSheet17_24 = [
    {timeR: moment('10:24', format), points: 60.0},
    {timeR: moment('10:52', format), points: 59.5},
    {timeR: moment('11:07', format), points: 59.0},
    {timeR: moment('11:23', format), points: 58.5},
    {timeR: moment('11:39', format), points: 58.0},
    {timeR: moment('11:57', format), points: 57.5},
    {timeR: moment('12:15', format), points: 57.0},
    {timeR: moment('12:34', format), points: 56.5},
    {timeR: moment('12:54', format), points: 56.0},
    {timeR: moment('13:15', format), points: 55.5},
    {timeR: moment('13:37', format), points: 55.0},
    {timeR: moment('14:01', format), points: 54.5},
    {timeR: moment('14:26', format), points: 54.0},
    {timeR: moment('14:53', format), points: 53.5},
    {timeR: moment('15:21', format), points: 52.0},
    {timeR: moment('15:51', format), points: 50.5},
    {timeR: moment('16:23', format), points: 49.0},
    {timeR: moment('16:58', format), points: 46.0},
    {timeR: moment('17:35', format), points: 42.5},
    {timeR: moment('18:15', format), points: 39.0},
    {timeR: moment('18:57', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
  
  ]; // run time scoresheet

  var fWtScoreSheet17_24 = [
    {timeW: moment('17:23', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test female 17-24

/* Female 25-29 */ 
let fPuScoreSheet25_29 = [
    {count: 14, points: 1.0},
    {count: 15, points: 4.0},
    {count: 16, points: 7.0},
    {count: 17, points: 10.0},
    {count: 18, points: 10.6},
    {count: 19, points: 11.0},
    {count: 20, points: 11.6},
    {count: 21, points: 12.0},
    {count: 22, points: 12.6},
    {count: 23, points: 13.0},
    {count: 24, points: 14.0},
    {count: 25, points: 14.4},
    {count: 26, points: 14.6},
    {count: 27, points: 15.0},
    {count: 28, points: 16.0},
    {count: 29, points: 16.2},
    {count: 30, points: 16.4},
    {count: 31, points: 16.6},
    {count: 32, points: 16.8},
    {count: 33, points: 17.0},
    {count: 34, points: 17.2},
    {count: 35, points: 17.6},
    {count: 36, points: 17.8},
    {count: 37, points: 18.0},
    {count: 38, points: 18.2},
    {count: 39, points: 18.4},
    {count: 40, points: 18.6},
    {count: 41, points: 18.8},
    {count: 42, points: 19.0},
    {count: 43, points: 19.2},
    {count: 44, points: 19.4},
    {count: 45, points: 19.6},
    {count: 46, points: 19.8},
    {count: 47, points: 20.0}
  
  ]; //push up scoresheet
  
let fSuScoreSheet25_29 = [
    {count: 31, points: 3.0},
    {count: 32, points: 6.0},
    {count: 33, points: 9.0},
    {count: 34, points: 12.0},
    {count: 35, points: 12.6},
    {count: 36, points: 13.0},
    {count: 37, points: 13.6},
    {count: 38, points: 14.0},
    {count: 39, points: 14.6},
    {count: 40, points: 15.0},
    {count: 41, points: 15.6},
    {count: 42, points: 16.0},
    {count: 43, points: 17.0},
    {count: 44, points: 17.2},
    {count: 45, points: 17.8},
    {count: 46, points: 18.0},
    {count: 47, points: 18.8},
    {count: 48, points: 19.0},
    {count: 49, points: 19.5},
    {count: 50, points: 20.0}
  
  ]; //sit up scoresheet
  
let fRtScoreSheet25_29 = [
    {timeR: moment('10:38', format), points: 60.0},
    {timeR: moment('11:07', format), points: 59.5},
    {timeR: moment('11:23', format), points: 59.0},
    {timeR: moment('11:39', format), points: 58.5},
    {timeR: moment('11:57', format), points: 58.0},
    {timeR: moment('12:15', format), points: 57.5},
    {timeR: moment('12:34', format), points: 57.0},
    {timeR: moment('12:54', format), points: 56.5},
    {timeR: moment('13:15', format), points: 56.0},
    {timeR: moment('13:37', format), points: 55.5},
    {timeR: moment('14:01', format), points: 55.0},
    {timeR: moment('14:26', format), points: 54.5},
    {timeR: moment('14:53', format), points: 54.0},
    {timeR: moment('15:21', format), points: 53.5},
    {timeR: moment('15:51', format), points: 52.0},
    {timeR: moment('16:23', format), points: 40.5},
    {timeR: moment('16:58', format), points: 49.0},
    {timeR: moment('17:35', format), points: 45.5},
    {timeR: moment('18:15', format), points: 42.0},
    {timeR: moment('18:57', format), points: 38.5},
    {timeR: moment('19:44', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
  
]; // run time scoresheet

var fWtScoreSheet25_29 = [
  {timeW: moment('17:23', format), points: 60.0},
  {timeW: moment('59:59', format), points: 0.0}
]; //walk test female 25-29

/* female 30-34 */ 
let fPuScoreSheet30_34 = [
    {count: 11, points: 1.0},
    {count: 12, points: 4.0},
    {count: 13, points: 7.0},
    {count: 14, points: 10.0},
    {count: 15, points: 12.0},
    {count: 16, points: 13.0},
    {count: 17, points: 13.6},
    {count: 18, points: 14.0},
    {count: 19, points: 15.0},
    {count: 20, points: 15.2},
    {count: 21, points: 15.6},
    {count: 22, points: 15.8},
    {count: 23, points: 16.0},
    {count: 24, points: 16.4},
    {count: 25, points: 16.6},
    {count: 26, points: 17.0},
    {count: 27, points: 17.2},
    {count: 28, points: 17.3},
    {count: 29, points: 17.4},
    {count: 30, points: 17.6},
    {count: 31, points: 17.8},
    {count: 32, points: 17.9},
    {count: 33, points: 18.0},
    {count: 34, points: 18.2},
    {count: 35, points: 18.3},
    {count: 36, points: 18.4},
    {count: 37, points: 18.6},
    {count: 38, points: 18.7},
    {count: 39, points: 18.8},
    {count: 40, points: 19.0},
    {count: 41, points: 19.2},
    {count: 42, points: 19.4},
    {count: 43, points: 19.6},
    {count: 44, points: 19.8},
    {count: 45, points: 19.9},
    {count: 46, points: 20.0}
  
  ]; // push up scoresheet
  
let fSuScoreSheet30_34 = [
    {count: 26, points: 3.0},
    {count: 27, points: 6.0},
    {count: 28, points: 9.0},
    {count: 29, points: 12.0},
    {count: 30, points: 13.0},
    {count: 31, points: 13.6},
    {count: 32, points: 14.0},
    {count: 33, points: 15.0},
    {count: 34, points: 15.6},
    {count: 35, points: 16.0},
    {count: 36, points: 16.4},
    {count: 37, points: 16.6},
    {count: 38, points: 17.0},
    {count: 39, points: 17.6},
    {count: 40, points: 18.0},
    {count: 41, points: 18.8},
    {count: 42, points: 19.0},
    {count: 43, points: 19.4},
    {count: 44, points: 19.7},
    {count: 45, points: 20.0}
  
  ]; // sit up scoresheet
  
let fRtScoreSheet30_34 = [
    {timeR: moment('10:52', format), points: 60.0},
    {timeR: moment('11:23', format), points: 59.5},
    {timeR: moment('11:39', format), points: 59.0},
    {timeR: moment('11:57', format), points: 58.5},
    {timeR: moment('12:15', format), points: 58.0},
    {timeR: moment('12:34', format), points: 57.5},
    {timeR: moment('12:54', format), points: 57.0},
    {timeR: moment('13:15', format), points: 56.5},
    {timeR: moment('13:37', format), points: 56.0},
    {timeR: moment('14:01', format), points: 55.5},
    {timeR: moment('14:26', format), points: 55.0},
    {timeR: moment('14:53', format), points: 54.5},
    {timeR: moment('15:21', format), points: 54.0},
    {timeR: moment('15:51', format), points: 52.5},
    {timeR: moment('16:23', format), points: 51.0},
    {timeR: moment('16:58', format), points: 49.5},
    {timeR: moment('17:35', format), points: 47.0},
    {timeR: moment('18:15', format), points: 44.5},
    {timeR: moment('18:57', format), points: 42.0},
    {timeR: moment('19:44', format), points: 38.5},
    {timeR: moment('20:34', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
  ]; // run time scoresheet
  
  var fWtScoreSheet30_34 = [
    {timeW: moment('17:29', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test female 30-34

/* female 35-39 */
let fPuScoreSheet35_39 = [
    {count: 10, points: 1.0},
    {count: 11, points: 4.0},
    {count: 12, points: 7.0},
    {count: 13, points: 10.0},
    {count: 14, points: 12.0},
    {count: 15, points: 13.0},
    {count: 16, points: 13.6},
    {count: 17, points: 14.0},
    {count: 18, points: 15.0},
    {count: 19, points: 15.2},
    {count: 20, points: 15.6},
    {count: 21, points: 15.8},
    {count: 22, points: 16.0},
    {count: 23, points: 16.4},
    {count: 24, points: 16.6},
    {count: 25, points: 17.0},
    {count: 26, points: 17.2},
    {count: 27, points: 17.3},
    {count: 28, points: 17.4},
    {count: 29, points: 17.6},
    {count: 30, points: 17.8},
    {count: 31, points: 17.9},
    {count: 32, points: 18.0},
    {count: 33, points: 18.1},
    {count: 34, points: 18.3},
    {count: 35, points: 18.4},
    {count: 36, points: 18.6},
    {count: 37, points: 18.7},
    {count: 38, points: 18.8},
    {count: 39, points: 19.0},
    {count: 40, points: 19.4},
    {count: 41, points: 19.7},
    {count: 42, points: 20.0}
  
  ]; // push ups scoresheet
  
let fSuScoreSheet35_39 = [
    {count: 24, points: 3.0},
    {count: 25, points: 6.0},
    {count: 26, points: 9.0},
    {count: 27, points: 12.0},
    {count: 28, points: 13.0},
    {count: 29, points: 13.6},
    {count: 30, points: 14.0},
    {count: 31, points: 15.0},
    {count: 32, points: 15.6},
    {count: 33, points: 16.0},
    {count: 34, points: 16.4},
    {count: 35, points: 16.6},
    {count: 36, points: 17.0},
    {count: 37, points: 17.6},
    {count: 38, points: 18.0},
    {count: 39, points: 18.8},
    {count: 40, points: 19.0},
    {count: 41, points: 19.4},
    {count: 42, points: 19.7},
    {count: 43, points: 20.0}
  ]; // sit ups scoresheets 
  
let fRtScoreSheet35_39 = [
    {timeR: moment('11:07', format), points: 60.0},
    {timeR: moment('11:39', format), points: 59.5},
    {timeR: moment('11:57', format), points: 59.0},
    {timeR: moment('12:15', format), points: 58.5},
    {timeR: moment('12:34', format), points: 58.0},
    {timeR: moment('12:54', format), points: 57.5},
    {timeR: moment('13:15', format), points: 57.0},
    {timeR: moment('13:37', format), points: 56.5},
    {timeR: moment('14:01', format), points: 56.0},
    {timeR: moment('14:26', format), points: 55.5},
    {timeR: moment('14:53', format), points: 55.0},
    {timeR: moment('15:21', format), points: 54.5},
    {timeR: moment('15:51', format), points: 54.0},
    {timeR: moment('16:23', format), points: 52.5},
    {timeR: moment('16:58', format), points: 51.0},
    {timeR: moment('17:35', format), points: 49.5},
    {timeR: moment('18:15', format), points: 47.0},
    {timeR: moment('18:57', format), points: 44.0},
    {timeR: moment('19:44', format), points: 41.0},
    {timeR: moment('20:34', format), points: 38.0},
    {timeR: moment('21:29', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
  
  ]; // run time scoresheet
  
  var fWtScoreSheet35_39 = [
    {timeW: moment('17:29', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test female 35-39

/* Female 40-44 */
let fPuScoreSheet40_44 = [
    {count: 8, points: 1.0},
    {count: 9, points: 4.0},
    {count: 10, points: 7.0},
    {count: 11, points: 10.0},
    {count: 12, points: 11.0},
    {count: 13, points: 12.0},
    {count: 14, points: 13.0},
    {count: 15, points: 14.0},
    {count: 16, points: 15.0},
    {count: 17, points: 15.6},
    {count: 18, points: 16.0},
    {count: 19, points: 16.2},
    {count: 20, points: 16.4},
    {count: 21, points: 16.6},
    {count: 22, points: 16.8},
    {count: 23, points: 17.0},
    {count: 24, points: 17.2},
    {count: 25, points: 17.3},
    {count: 26, points: 17.4},
    {count: 27, points: 17.6},
    {count: 28, points: 17.8},
    {count: 29, points: 18.0},
    {count: 30, points: 18.2},
    {count: 31, points: 18.4},
    {count: 32, points: 18.8},
    {count: 33, points: 19.0},
    {count: 34, points: 19.2},
    {count: 35, points: 19.4},
    {count: 36, points: 19.6},
    {count: 37, points: 19.8},
    {count: 38, points: 20.0},
  ]; // push ups scoresheet
  
let fSuScoreSheet40_44 = [
    {count: 21, points: 3.0},
    {count: 22, points: 6.0},
    {count: 23, points: 9.0},
    {count: 24, points: 12.0},
    {count: 25, points: 12.8},
    {count: 26, points: 13.6},
    {count: 27, points: 14.0},
    {count: 28, points: 15.0},
    {count: 29, points: 16.0},
    {count: 30, points: 16.4},
    {count: 31, points: 16.6},
    {count: 32, points: 17.0},
    {count: 33, points: 17.6},
    {count: 34, points: 18.0},
    {count: 35, points: 18.2},
    {count: 36, points: 18.4},
    {count: 37, points: 18.8},
    {count: 38, points: 19.0},
    {count: 39, points: 19.4},
    {count: 40, points: 19.7},
    {count: 41, points: 20.0}
  
  ]; //sit ups scoresheet
  
let fRtScoreSheet40_44= [
    {timeR: moment('11:23', format), points: 60.0},
    {timeR: moment('11:57', format), points: 59.5},
    {timeR: moment('12:15', format), points: 59.0},
    {timeR: moment('12:34', format), points: 58.5},
    {timeR: moment('12:54', format), points: 58.0},
    {timeR: moment('13:15', format), points: 57.5},
    {timeR: moment('13:37', format), points: 57.0},
    {timeR: moment('14:01', format), points: 56.5},
    {timeR: moment('14:26', format), points: 56.0},
    {timeR: moment('14:53', format), points: 55.5},
    {timeR: moment('15:21', format), points: 55.0},
    {timeR: moment('15:51', format), points: 54.5},
    {timeR: moment('16:23', format), points: 54.0},
    {timeR: moment('16:58', format), points: 53.5},
    {timeR: moment('17:35', format), points: 52.0},
    {timeR: moment('18:15', format), points: 50.5},
    {timeR: moment('18:57', format), points: 48.0},
    {timeR: moment('19:44', format), points: 45.5},
    {timeR: moment('20:34', format), points: 42.0},
    {timeR: moment('21:29', format), points: 38.5},
    {timeR: moment('22:29', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
  
  ]; //run time scoresheet

  var fWtScoreSheet40_44 = [
    {timeW: moment('17:50', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test female 40-44

/* Female 45-49 */ 
let fPuScoreSheet45_49 = [
    {count: 7, points: 1.0},
    {count: 8, points: 4.0},
    {count: 9, points: 7.0},
    {count: 10, points: 10.0},
    {count: 11, points: 11.0},
    {count: 12, points: 12.0},
    {count: 13, points: 13.0},
    {count: 14, points: 14.0},
    {count: 15, points: 15.0},
    {count: 16, points: 15.6},
    {count: 17, points: 16.0},
    {count: 18, points: 16.2},
    {count: 19, points: 16.4},
    {count: 20, points: 16.6},
    {count: 21, points: 16.8},
    {count: 22, points: 17.0},
    {count: 23, points: 17.2},
    {count: 24, points: 17.4},
    {count: 25, points: 17.6},
    {count: 26, points: 17.8},
    {count: 27, points: 18.0},
    {count: 28, points: 18.2},
    {count: 29, points: 18.4},
    {count: 30, points: 18.6},
    {count: 31, points: 18.8},
    {count: 32, points: 19.0},
    {count: 33, points: 19.2},
    {count: 34, points: 19.4},
    {count: 35, points: 19.6},
    {count: 36, points: 19.8},
    {count: 37, points: 20.0},
  ]; // push ups scoresheet
  
let fSuScoreSheet45_49 = [
    {count: 19, points: 3.0},
    {count: 20, points: 6.0},
    {count: 21, points: 9.0},
    {count: 22, points: 12.0},
    {count: 23, points: 13.0},
    {count: 24, points: 14.0},
    {count: 25, points: 15.0},
    {count: 26, points: 16.0},
    {count: 27, points: 16.6},
    {count: 28, points: 17.0},
    {count: 29, points: 17.6},
    {count: 30, points: 18.0},
    {count: 31, points: 18.8},
    {count: 32, points: 19.0},
    {count: 33, points: 19.4},
    {count: 34, points: 19.7},
    {count: 35, points: 20.0},
  
  ]; // sit ups scoresheet
  
let fRtScoreSheet45_49 = [
    {timeR: moment('11:39', format), points: 60.0},
    {timeR: moment('12:15', format), points: 59.5},
    {timeR: moment('12:34', format), points: 59.0},
    {timeR: moment('12:54', format), points: 58.5},
    {timeR: moment('13:15', format), points: 58.0},
    {timeR: moment('13:37', format), points: 57.5},
    {timeR: moment('14:01', format), points: 57.0},
    {timeR: moment('14:26', format), points: 56.5},
    {timeR: moment('14:53', format), points: 56.0},
    {timeR: moment('15:21', format), points: 55.5},
    {timeR: moment('15:51', format), points: 55.0},
    {timeR: moment('16:23', format), points: 54.5},
    {timeR: moment('16:58', format), points: 54.0},
    {timeR: moment('17:35', format), points: 53.5},
    {timeR: moment('18:15', format), points: 52.0},
    {timeR: moment('18:57', format), points: 50.5},
    {timeR: moment('19:44', format), points: 48.0},
    {timeR: moment('20:34', format), points: 45.0},
    {timeR: moment('21:29', format), points: 42.0},
    {timeR: moment('22:29', format), points: 38.5},
    {timeR: moment('23:35', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
  
  ]; // run time scoresheet

  var fWtScoreSheet45_49 = [
    {timeW: moment('17:50', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test female 44-49

/* Female 50-54 */
let fPuScoreSheet50_54 = [
    {count: 6, points: 1.0},
    {count: 7, points: 4.0},
    {count: 8, points: 7.0},
    {count: 9, points: 10.0},
    {count: 10, points: 11.0},
    {count: 11, points: 12.0},
    {count: 12, points: 13.0},
    {count: 13, points: 14.0},
    {count: 14, points: 15.0},
    {count: 15, points: 16.0},
    {count: 16, points: 16.2},
    {count: 17, points: 16.4},
    {count: 18, points: 16.6},
    {count: 19, points: 16.8},
    {count: 20, points: 17.0},
    {count: 21, points: 17.2},
    {count: 22, points: 17.3},
    {count: 23, points: 17.4},
    {count: 24, points: 17.6},
    {count: 25, points: 18.0},
    {count: 26, points: 18.2},
    {count: 27, points: 18.4},
    {count: 28, points: 18.6},
    {count: 29, points: 18.8},
    {count: 30, points: 19.0},
    {count: 31, points: 19.2},
    {count: 32, points: 19.4},
    {count: 33, points: 19.6},
    {count: 34, points: 19.8},
    {count: 35, points: 20.0},
  ]; // push up scoresheets 
  
let fSuScoreSheet50_54 = [
    {count: 17, points: 3.0},
    {count: 18, points: 6.0},
    {count: 19, points: 9.0},
    {count: 20, points: 12.0},
    {count: 21, points: 13.0},
    {count: 22, points: 14.0},
    {count: 23, points: 15.0},
    {count: 24, points: 16.0},
    {count: 25, points: 17.0},
    {count: 26, points: 17.2},
    {count: 27, points: 17.6},
    {count: 28, points: 17.8},
    {count: 29, points: 18.0},
    {count: 30, points: 19.0},
    {count: 31, points: 19.5},
    {count: 32, points: 20.0},
  
  ]; // sit ups scoresheet
  
let fRtScoreSheet50_54 = [
    {timeR: moment('12:54', format), points: 60.0},
    {timeR: moment('13:37', format), points: 59.5},
    {timeR: moment('14:01', format), points: 59.0},
    {timeR: moment('14:26', format), points: 58.5},
    {timeR: moment('14:53', format), points: 58.0},
    {timeR: moment('15:21', format), points: 57.5},
    {timeR: moment('15:51', format), points: 57.0},
    {timeR: moment('16:23', format), points: 56.5},
    {timeR: moment('16:58', format), points: 56.0},
    {timeR: moment('17:35', format), points: 55.5},
    {timeR: moment('18:15', format), points: 55.0},
    {timeR: moment('18:57', format), points: 53.5},
    {timeR: moment('19:44', format), points: 52.0},
    {timeR: moment('20:34', format), points: 49.5},
    {timeR: moment('21:29', format), points: 46.0},
    {timeR: moment('22:29', format), points: 42.5},
    {timeR: moment('23:35', format), points: 39.0},
    {timeR: moment('24:47', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
  
  ]; // run time scoresheet

  var fWtScoreSheet50_54 = [
    {timeW: moment('18:12', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test female 50-54

/*  Female 54-59 */
let fPuScoreSheet55_59 = [
    {count: 5, points: 1.0},
    {count: 6, points: 4.0},
    {count: 7, points: 7.0},
    {count: 8, points: 10.0},
    {count: 9, points: 11.0},
    {count: 10, points: 12.0},
    {count: 11, points: 13.0},
    {count: 12, points: 14.0},
    {count: 13, points: 15.0},
    {count: 14, points: 16.0},
    {count: 15, points: 16.2},
    {count: 16, points: 16.4},
    {count: 17, points: 16.6},
    {count: 18, points: 16.8},
    {count: 19, points: 17.0},
    {count: 20, points: 17.2},
    {count: 21, points: 17.6},
    {count: 22, points: 18.0},
    {count: 23, points: 18.6},
    {count: 24, points: 19.0},
    {count: 25, points: 19.2},
    {count: 26, points: 19.4},
    {count: 27, points: 19.7},
    {count: 28, points: 20.0},
  
  ]; // push ups scoresheet
  
let fSuScoreSheet55_59 = [
    {count: 12, points: 3.0},
    {count: 13, points: 6.0},
    {count: 14, points: 9.0},
    {count: 15, points: 12.0},
    {count: 16, points: 12.6},
    {count: 17, points: 13.0},
    {count: 18, points: 13.6},
    {count: 19, points: 14.0},
    {count: 20, points: 14.6},
    {count: 21, points: 15.0},
    {count: 22, points: 16.0},
    {count: 23, points: 17.0},
    {count: 24, points: 17.2},
    {count: 25, points: 17.6},
    {count: 26, points: 17.8},
    {count: 27, points: 18.0},
    {count: 28, points: 19.0},
    {count: 29, points: 19.2},
    {count: 30, points: 19.4},
    {count: 31, points: 19.7},
    {count: 32, points: 20.0},
  
  ]; // sit ups scoresheet
  
let fRtScoreSheet55_59 = [
    {timeR: moment('13:15', format), points: 60.0},
    {timeR: moment('14:01', format), points: 59.5},
    {timeR: moment('14:26', format), points: 59.0},
    {timeR: moment('14:53', format), points: 58.5},
    {timeR: moment('15:21', format), points: 58.0},
    {timeR: moment('15:51', format), points: 57.5},
    {timeR: moment('16:23', format), points: 57.0},
    {timeR: moment('16:58', format), points: 56.5},
    {timeR: moment('17:35', format), points: 56.0},
    {timeR: moment('18:15', format), points: 55.5},
    {timeR: moment('18:57', format), points: 55.0},
    {timeR: moment('19:44', format), points: 53.5},
    {timeR: moment('20:34', format), points: 52.0},
    {timeR: moment('21:29', format), points: 49.0},
    {timeR: moment('22:29', format), points: 46.0},
    {timeR: moment('23:35', format), points: 43.0},
    {timeR: moment('24:47', format), points: 39.0},
    {timeR: moment('26:07', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
  
  ]; // run time scoresheet

  var fWtScoreSheet55_59 = [
    {timeW: moment('18:12', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test female 55-59

/* female 60 and up */
let fPuScoreSheet60 = [
    {count: 4, points: 1.0},
    {count: 5, points: 4.0},
    {count: 6, points: 7.0},
    {count: 7, points: 10.0},
    {count: 8, points: 10.6},
    {count: 9, points: 11.4},
    {count: 10, points: 12.0},
    {count: 11, points: 13.0},
    {count: 12, points: 14.0},
    {count: 13, points: 15.0},
    {count: 14, points: 16.0},
    {count: 15, points: 17.0},
    {count: 16, points: 17.6},
    {count: 17, points: 18.0},
    {count: 18, points: 18.8},
    {count: 19, points: 19.0},
    {count: 20, points: 19.5},
    {count: 21, points: 20.0},
  
  ]; //push ups scoresheet
  
let fSuScoreSheet60 = [
    {count: 8, points: 3.0},
    {count: 9, points: 6.0},
    {count: 10, points: 9.0},
    {count: 11, points: 12.0},
    {count: 12, points: 13.0},
    {count: 13, points: 14.0},
    {count: 14, points: 14.6},
    {count: 15, points: 15.0},
    {count: 16, points: 15.6},
    {count: 17, points: 16.0},
    {count: 18, points: 16.4},
    {count: 19, points: 16.6},
    {count: 20, points: 16.8},
    {count: 21, points: 17.0},
    {count: 22, points: 17.2},
    {count: 23, points: 17.4},
    {count: 24, points: 17.6},
    {count: 25, points: 17.8},
    {count: 26, points: 18.0},
    {count: 27, points: 18.8},
    {count: 28, points: 19.0},
    {count: 29, points: 19.4},
    {count: 30, points: 19.7},
    {count: 31, points: 20.0},
  
  ]; // sit ups scoresheet
  
let fRtScoreSheet60 = [ 
    {timeR: moment('14:01', format), points: 60.0},
    {timeR: moment('14:53', format), points: 59.5},
    {timeR: moment('15:21', format), points: 59.0},
    {timeR: moment('15:51', format), points: 58.5},
    {timeR: moment('16:23', format), points: 58.0},
    {timeR: moment('16:58', format), points: 57.5},
    {timeR: moment('17:35', format), points: 57.0},
    {timeR: moment('18:15', format), points: 56.5},
    {timeR: moment('18:57', format), points: 56.0},
    {timeR: moment('19:44', format), points: 55.5},
    {timeR: moment('20:34', format), points: 54.0},
    {timeR: moment('21:29', format), points: 52.5},
    {timeR: moment('22:29', format), points: 51.0},
    {timeR: moment('23:35', format), points: 47.0},
    {timeR: moment('24:47', format), points: 43.0},
    {timeR: moment('26:07', format), points: 39.0},
    {timeR: moment('27:28', format), points: 35.0},
    {timeR: moment('59:59', format), points: 0.0}
  
  ]; //run time scoresheet

  var fWtScoreSheet60 = [
    {timeW: moment('18:54', format), points: 60.0},
    {timeW: moment('59:59', format), points: 0.0}
  ]; //walk test female 60

/* ***************************************** */
/* ***************************************** */
/* ***************************************** */
/* ***************************************** */


/************************
   Needs to be in this format to be able to run jest
   after the whole page loads. If it is not like this
   then jest will break
*************************/
document.addEventListener('DOMContentLoaded', function () {

    var inputBTN = document.getElementById("SubmitBtn");
    inputBTN.addEventListener('click', myfunction);

});
/* Submit button listener */
// takes input for runtime, situps and pushups then adds them to array // 
function myfunction(){

    /****** Gets the inputs from the HTML format including waiver and the array variables ******/
    var getInputs = document.getElementsByClassName('input');
    var getWaiver = document.getElementsByClassName("waiverInput");
    var gridValues = [];
    var waiverValue = [];


    /****** Parse the inputs and changed them into correct types ******/
    for(var i = 0; i<getInputs.length; i++){
        gridValues.push(getInputs[i].value)
    }
    var gender = gridValues[0];
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
    
    
    var scoreSheetArr = ageGetter(age, gender);
    /****** runs each function to get the score and age ******/
    
    /****** Goes through the waiver and checks if it is true or false ******/ 
    for(var i = 0; i<getWaiver.length; i++){
        waiverValue.push(getWaiver[i].checked)
    }
    var pushUpsScore = pushUpsGetter(pushUps, scoreSheetArr[0]);
    var sitUpsScore = sitUpsGetter(sitUps, scoreSheetArr[1]);
    if (waiverValue[0] == true) {
      var runScore = runGetter(newRunTime, scoreSheetArr[2]);
    } else if (waiverValue[1] == true){
      var runScore = walkGetter(newRunTime, scoreSheetArr[3]);
      runScore = parseFloat(runScore);
    }

    var fluffy = finalScore(pushUpsScore, sitUpsScore, runScore, waiverValue);
    var fluff = fluffy.toFixed(1);
    if(fluff < 75) {
      window.alert('Sorry, you failed with a unsatisfactory score of ' + fluff + '\nRun/Walk Score: ' + runScore + '\nSit Ups: ' + sitUpsScore + '\nPush Ups: ' + pushUpsScore)
    } else if(fluff >= 75 && fluff < 90) {
      window.alert('You passed with a satisfactory score of ' + fluff + '\nRun/Walk Score: ' + runScore + '\nSit Ups Score: ' + sitUpsScore + '\nPush Ups Score: ' + pushUpsScore)
    } else if(fluff >= 90) {
      window.alert('Horay, you passed with an excellent score of ' + fluff + '\nRun/Walk Score: ' + runScore + '\nSit Ups Score: ' + sitUpsScore + '\nPush Ups Score: ' + pushUpsScore)
    }
    location.reload();
}


// Puts age into age group //
function ageGetter(inputAge, inputGender) {
    var scoreSheetArr = [];
    
   if(inputGender == 'false') {
      if (inputAge < 25) {
        scoreSheetArr.push(mPuScoreSheet17_24, mSuScoreSheet17_24, mRtScoreSheet17_24, mWtScoreSheet17_24);
          return scoreSheetArr;
      } else if (inputAge <= 29 && inputAge >= 25) {
        scoreSheetArr.push(mPuScoreSheet25_29, mSuScoreSheet25_29, mRtScoreSheet25_29, mWtScoreSheet25_29)
          return scoreSheetArr;
      } else if (inputAge <= 34 && inputAge >= 30) {
        scoreSheetArr.push(mPuScoreSheet30_34, mSuScoreSheet30_34, mRtScoreSheet30_34, mWtScoreSheet30_34)
          return scoreSheetArr;
      } else if (inputAge <= 39 && inputAge >= 35) {
        scoreSheetArr.push(mPuScoreSheet35_39, mSuScoreSheet35_39, mRtScoreSheet35_39, mWtScoreSheet35_39)
          return scoreSheetArr;
      } else if (inputAge <= 44 && inputAge >= 40) {
        scoreSheetArr.push(mPuScoreSheet40_44, mSuScoreSheet40_44, mRtScoreSheet40_44, mWtScoreSheet40_44)
          return scoreSheetArr;
      } else if (inputAge <= 49 && inputAge >= 45) {
        scoreSheetArr.push(mPuScoreSheet45_49, mSuScoreSheet45_49, mRtScoreSheet45_49, mWtScoreSheet45_49)
          return scoreSheetArr;
      } else if (inputAge <= 54 && inputAge >= 50) {
        scoreSheetArr.push(mPuScoreSheet50_54, mSuScoreSheet50_54, mRtScoreSheet50_54, mWtScoreSheet50_54)
          return scoreSheetArr;
      } else if (inputAge <= 59 && inputAge >= 55) {
        scoreSheetArr.push(mPuScoreSheet55_59, mSuScoreSheet55_59, mRtScoreSheet55_59, mWtScoreSheet55_59)
          return scoreSheetArr;
      } else if (inputAge >= 60) {
        scoreSheetArr.push(mPuScoreSheet60, mSuScoreSheet60, mRtScoreSheet60, mWtScoreSheet60)
          return scoreSheetArr;
      }
    } else {
        if (inputAge < 25) {
      scoreSheetArr.push(fPuScoreSheet17_24, fSuScoreSheet17_24, fRtScoreSheet17_24, fWtScoreSheet17_24);
        return scoreSheetArr;
    } else if (inputAge <= 29 && inputAge >= 25) {
      scoreSheetArr.push(fPuScoreSheet25_29, fSuScoreSheet25_29, fRtScoreSheet25_29, fWtScoreSheet25_29)
        return scoreSheetArr;
    } else if (inputAge <= 34 && inputAge >= 30) {
      scoreSheetArr.push(fPuScoreSheet30_34, fSuScoreSheet30_34, fRtScoreSheet30_34, fWtScoreSheet30_34)
        return scoreSheetArr;
    } else if (inputAge <= 39 && inputAge >= 35) {
      scoreSheetArr.push(fPuScoreSheet35_39, fSuScoreSheet35_39, fRtScoreSheet35_39, fWtScoreSheet35_39)
        return scoreSheetArr;
    } else if (inputAge <= 44 && inputAge >= 40) {
      scoreSheetArr.push(fPuScoreSheet40_44, fSuScoreSheet40_44, fRtScoreSheet40_44, fWtScoreSheet40_44)
        return scoreSheetArr;
    } else if (inputAge <= 49 && inputAge >= 45) {
      scoreSheetArr.push(fPuScoreSheet45_49, fSuScoreSheet45_49, fRtScoreSheet45_49, fWtScoreSheet45_49)
        return scoreSheetArr;
    } else if (inputAge <= 54 && inputAge >= 50) {
      scoreSheetArr.push(fPuScoreSheet50_54, fSuScoreSheet50_54, fRtScoreSheet50_54, fWtScoreSheet50_54)
        return scoreSheetArr;
    } else if (inputAge <= 59 && inputAge >= 55) {
      scoreSheetArr.push(fPuScoreSheet55_59, fSuScoreSheet55_59, fRtScoreSheet55_59, fWtScoreSheet55_59)
        return scoreSheetArr;
    } else if (inputAge >= 60) {
      scoreSheetArr.push(fPuScoreSheet60, fSuScoreSheet60, fRtScoreSheet60, fWtScoreSheet60)
        return scoreSheetArr;
    };
  
  };
  
};

function pushUpsGetter(pushUps, scoreSheet) {
    if(pushUps < scoreSheet[0].count || pushUps == null || pushUps == undefined || isNaN(pushUps) === true){
        return 0
    } 
    else if(pushUps > scoreSheet[scoreSheet.length - 1].count){
      return 20
    } 
    else{
        for(var i = 0; i<scoreSheet.length; i++){
            if(pushUps == scoreSheet[i].count){
            return scoreSheet[i].points
            }
        }
    }
};
// FUNCTION FOR GETTING POINTS OF SITUPS // 
function sitUpsGetter(sitUps, scoreSheet){
  if(sitUps < scoreSheet[0].count || sitUps == null || sitUps == undefined || isNaN(sitUps) === true){
      return 0
    }
    else if(sitUps > scoreSheet[scoreSheet.length - 1].count){
        return 20
    }
    else{
        for(var i = 0; i<scoreSheet.length; i++){
            if(sitUps == scoreSheet[i].count) {
            return scoreSheet[i].points
            }
        }
    }
  };

function runGetter(runScore, runScoreSheet){
    let zeroSaver = moment('00:01', format)
    if(runScore < zeroSaver || isNaN(runScore) === true) {
        return 0;
    } 
    else  {
        for(var i = 0; i <= runScoreSheet.length; i++){
            if(runScore.isBefore(runScoreSheet[i].timeR)){
                let score = runScoreSheet[i].points;
                return score;
            }
        }
    }
};


function walkGetter(walkScore, walkScoreSheet) {
  let zeroSaver = moment('00:01', format)
  if(walkScore < zeroSaver || isNaN(walkScore) === true){
    return 0;
  } else {
    for(var i = 0; i <= walkScoreSheet.length; i++){
      if(walkScore.isBefore(walkScoreSheet[i].timeW)){
        let walk = walkScoreSheet[i].points
        return walk;
      }
    }
  }
}


function finalScore(pushUpsGetter, sitUpsGetter, runTimeGetter, waiver){
  runTimeGetter = parseFloat(runTimeGetter);
  var TotalScore = runTimeGetter + sitUpsGetter + pushUpsGetter;
  // run with push/sit ups table
  if(waiver[0] == true) {
  // exempt sit ups  
      if(waiver[3] == true && waiver[4] == false){
          TotalScore = (TotalScore / 80) * 100
          return TotalScore;
      } 
  // exempt push ups
      else if (waiver[3] == false && waiver[4] == true){
          TotalScore = (TotalScore / 80) * 100
          return TotalScore;
          }
  // exempt push ups and sit ups
      else if(waiver[3] == true && waiver[4] == true){
        //console.log("i made it to exempt push ups and situps");
          TotalScore = (TotalScore / 60) * 100
          return TotalScore; 
      } else {
        return TotalScore;
      }
  }
// walk with push/sit ups table
  else if(waiver[1] == true){
  // exempt sit ups
      if(waiver[3] == true && waiver[4] == false){
          TotalScore = (TotalScore / 20) * 100
          return TotalScore;
      }
  // exempt push ups
      else if(waiver[3] == false && waiver[4] == true) {
          TotalScore = (TotalScore / 20) * 100
          return TotalScore; 
      }
  // exempt push ups and sit ups
      else if(waiver[3] == true && waiver[4] == true){
        if (TotalScore == 60){
          window.alert('You passed!!!');
        } else {
          window.alert('Sorry, you failed.');
        }
      } else {
          TotalScore = ((pushUpsGetter + sitUpsGetter) / 40) * 100;
          return TotalScore;
  }
}
// exempt run with push/sit ups table
  else if(waiver[2] == true){
  // exempt sit ups
      if(waiver[3] == true && waiver[4] == false){
          TotalScore = (TotalScore / 20) * 100
          return TotalScore;
      }
  // exempt push ups
      else if(waiver[3] == false && waiver[4] == true){ 
          TotalScore = (TotalScore / 20) * 100
          return TotalScore;
      }
  // exempt push ups and sit ups
      else if(waiver[3] == true && waiver[4] == true){
        window.alert('You are exempt from taking this test')
        return TotalScore = 0.0;
      } else {
        return TotalScore = (TotalScore / 40) * 100;
      }
  } else { 
    return TotalScore;
  }
};


// Scoresheets //

document.addEventListener('DOMContentLoaded', function () {









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
}
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




});











export {
    ageGetter,
    mPuScoreSheet17_24,
    mSuScoreSheet17_24,
    mRtScoreSheet17_24,
    mWtScoreSheet17_24,
    
    mPuScoreSheet25_29,
    mSuScoreSheet25_29,
    mRtScoreSheet25_29,
    mWtScoreSheet25_29,
    
    mPuScoreSheet30_34,
    mSuScoreSheet30_34,
    mRtScoreSheet30_34,
    mWtScoreSheet30_34,

    mPuScoreSheet35_39,
    mSuScoreSheet35_39,
    mRtScoreSheet35_39,
    mWtScoreSheet35_39,

    mPuScoreSheet40_44,
    mSuScoreSheet40_44,
    mRtScoreSheet40_44,
    mWtScoreSheet40_44,

    mPuScoreSheet45_49,
    mSuScoreSheet45_49,
    mRtScoreSheet45_49,
    mWtScoreSheet45_49,

    mPuScoreSheet50_54,
    mSuScoreSheet50_54,
    mRtScoreSheet50_54,
    mWtScoreSheet50_54,

    mPuScoreSheet55_59,
    mSuScoreSheet55_59,
    mRtScoreSheet55_59,
    mWtScoreSheet55_59,

    mPuScoreSheet60,
    mSuScoreSheet60,
    mRtScoreSheet60,
    mWtScoreSheet60,


    fPuScoreSheet17_24,
    fSuScoreSheet17_24,
    fRtScoreSheet17_24,
    fWtScoreSheet17_24,

    fPuScoreSheet25_29,
    fSuScoreSheet25_29,
    fRtScoreSheet25_29,
    fWtScoreSheet25_29,

    fPuScoreSheet30_34,
    fSuScoreSheet30_34,
    fRtScoreSheet30_34,
    fWtScoreSheet30_34,

    fPuScoreSheet35_39,
    fSuScoreSheet35_39,
    fRtScoreSheet35_39,
    fWtScoreSheet35_39,

    fPuScoreSheet40_44,
    fSuScoreSheet40_44,
    fRtScoreSheet40_44,
    fWtScoreSheet40_44,

    fPuScoreSheet45_49,
    fSuScoreSheet45_49,
    fRtScoreSheet45_49,
    fWtScoreSheet45_49,

    fPuScoreSheet50_54,
    fSuScoreSheet50_54,
    fRtScoreSheet50_54,
    fWtScoreSheet50_54,

    fPuScoreSheet55_59,
    fSuScoreSheet55_59,
    fRtScoreSheet55_59,
    fWtScoreSheet55_59,

    fPuScoreSheet60,
    fSuScoreSheet60,
    fRtScoreSheet60,
    fWtScoreSheet60,

    pushUpsGetter,
    sitUpsGetter,
    runGetter,
    finalScore,
    walkGetter
};

