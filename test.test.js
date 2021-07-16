

 
/* This is not tested for out stuff you need  */


import { describe, expect, it } from "@jest/globals";
import moment from 'moment';
var format = 'mm:ss';
import {
  mPuScoreSheet17_24,
  mSuScoreSheet17_24,
  mRtScoreSheet17_24,
  
  mPuScoreSheet25_29,
  mSuScoreSheet25_29,
  mRtScoreSheet25_29,

  mPuScoreSheet30_34,
  mSuScoreSheet30_34,
  mRtScoreSheet30_34,

  mPuScoreSheet35_39,
  mSuScoreSheet35_39,
  mRtScoreSheet35_39,

  mPuScoreSheet40_44,
  mSuScoreSheet40_44,
  mRtScoreSheet40_44,

  mPuScoreSheet45_49,
  mSuScoreSheet45_49,
  mRtScoreSheet45_49,

  mPuScoreSheet50_54,
  mSuScoreSheet50_54,
  mRtscoreSheet50_54,

  mPuScoreSheet55_59,
  mSuScoreSheet55_59,
  mRtScoreSheet55_59,

  mPuScoreSheet60,
  mSuScoreSheet60,
  mRtScoreSheet60,
  
  genderGetter,
  ageGetter,

  pushUpsGetter,
  sitUpsGetter,
  runGetter,

  fPuScoreSheet17_24,
  fSuScoreSheet17_24,
  fRtScoreSheet17_24,

  fPuScoreSheet25_29,
  fSuScoreSheet25_29,
  fRtScoreSheet25_29,

  fPuScoreSheet30_34,
  fSuScoreSheet30_34,
  fRtScoreSheet30_34,

  fPuScoreSheet35_39,
  fSuScoreSheet35_39,
  fRtScoreSheet35_39,

  fPuScoreSheet40_44,
  fSuScoreSheet40_44,
  fRtScoreSheet40_44,

  fPuScoreSheet45_49,
  fSuScoreSheet45_49,
  fRtScoreSheet45_49,

  fPuScoreSheet50_54,
  fSuScoreSheet50_54,
  fRtScoreSheet50_54,

  fPuScoreSheet55_59,
  fSuScoreSheet55_59,
  fRtScoreSheet55_59,

  fPuScoreSheet60,
  fSuScoreSheet60,
  fRtScoreSheet60,
  
 
  finalScore,
  mRtScoreSheet50_54,
} from "./Form.js";


describe("pushUpsGetter", () => {
  it('returns 1 point when given 30 pushups', () => {
    expect(pushUpsGetter(30, mPuScoreSheet17_24)).toBe(1);
    });
  it('returns 20 point when given 67 pushups', () => {
    expect(pushUpsGetter(67, mPuScoreSheet17_24)).toBe(20);
    });
  it('returns 0 point when less than 30', () => {
    expect(pushUpsGetter(29, mPuScoreSheet17_24)).toBe(0);
    });
  it('returns 20 point when more than 67', () => {
    expect(pushUpsGetter(68, mPuScoreSheet17_24)).toBe(20);
    });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, mPuScoreSheet17_24)).toBe(0);
    });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, mPuScoreSheet17_24)).toBe(0);
    });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, mPuScoreSheet17_24)).toBe(0);
    });

  // Male 25-29 

  it('returns 1 point when given 27 pushups', () => {
    expect(pushUpsGetter(27, mPuScoreSheet25_29)).toBe(1);
    });
  it('returns 20 point when given 62 pushups', () => {
    expect(pushUpsGetter(62, mPuScoreSheet25_29)).toBe(20);
    });
  it('returns 0 point when less than 27', () => {
    expect(pushUpsGetter(26, mPuScoreSheet25_29)).toBe(0);
    });
  it('returns 20 point when more than 62', () => {
    expect(pushUpsGetter(63, mPuScoreSheet25_29)).toBe(20);
    });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, mPuScoreSheet25_29)).toBe(0);
    });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, mPuScoreSheet25_29)).toBe(0);
    });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, mPuScoreSheet25_29)).toBe(0);
    });

   // Male 30-34

  it('returns 1 point when given 24 pushups', () => {
      expect(pushUpsGetter(24, mPuScoreSheet30_34)).toBe(1);
      });
  it('returns 20 point when given 57 pushups', () => {
      expect(pushUpsGetter(57, mPuScoreSheet30_34)).toBe(20);
      });
  it('returns 0 point when less than 24', () => {
      expect(pushUpsGetter(23, mPuScoreSheet30_34)).toBe(0);
      });
  it('returns 20 point when more than 57', () => {
      expect(pushUpsGetter(58, mPuScoreSheet30_34)).toBe(20);
      });
  it('returns 0 point when given 0 pushups', () => {
      expect(pushUpsGetter(0, mPuScoreSheet30_34)).toBe(0);
      });
  it('returns 0 point when given null pushups', () => {
      expect(pushUpsGetter(null, mPuScoreSheet30_34)).toBe(0);
      });
  it('returns 0 point when given undefined pushups', () => {
      expect(pushUpsGetter(undefined, mPuScoreSheet30_34)).toBe(0);
      });
  
  // Male 35-39

  it('returns 1 point when given 21 pushups', () => {
    expect(pushUpsGetter(21, mPuScoreSheet35_39)).toBe(1);
    });
  it('returns 20 point when given 51 pushups', () => {
    expect(pushUpsGetter(51, mPuScoreSheet35_39)).toBe(20);
    });
  it('returns 0 point when less than 21', () => {
    expect(pushUpsGetter(20, mPuScoreSheet35_39)).toBe(0);
    });
  it('returns 20 point when more than 51', () => {
    expect(pushUpsGetter(52, mPuScoreSheet35_39)).toBe(20);
    });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, mPuScoreSheet35_39)).toBe(0);
    });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, mPuScoreSheet35_39)).toBe(0);
    });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, mPuScoreSheet35_39)).toBe(0);
    });
  
  // male 40-44

  it('returns 1 point when given 18 pushups', () => {
    expect(pushUpsGetter(18, mPuScoreSheet40_44)).toBe(1);
    });
  it('returns 20 point when given 44 pushups', () => {
    expect(pushUpsGetter(44, mPuScoreSheet40_44)).toBe(20);
    });
  it('returns 0 point when less than 18', () => {
    expect(pushUpsGetter(17, mPuScoreSheet40_44)).toBe(0);
    });
  it('returns 20 point when more than 44', () => {
    expect(pushUpsGetter(45, mPuScoreSheet40_44)).toBe(20);
    });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, mPuScoreSheet40_44)).toBe(0);
    });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, mPuScoreSheet40_44)).toBe(0);
    });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, mPuScoreSheet40_44)).toBe(0);
    });
    
  //male 45-49

  it('returns 1 point when given 15 pushups', () => {
    expect(pushUpsGetter(15, mPuScoreSheet45_49)).toBe(1);
    });
  it('returns 20 point when given 44 pushups', () => {
    expect(pushUpsGetter(44, mPuScoreSheet45_49)).toBe(20);
    });
  it('returns 0 point when less than 15', () => {
    expect(pushUpsGetter(14, mPuScoreSheet45_49)).toBe(0);
    });
  it('returns 20 point when more than 44', () => {
    expect(pushUpsGetter(45, mPuScoreSheet45_49)).toBe(20);
    });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, mPuScoreSheet45_49)).toBe(0);
    });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, mPuScoreSheet45_49)).toBe(0);
    });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, mPuScoreSheet45_49)).toBe(0);
    });
  
    // male 50-54

  it('returns 1 point when given 12 pushups', () => {
      expect(pushUpsGetter(12, mPuScoreSheet50_54)).toBe(1);
      });
  it('returns 20 point when given 36 pushups', () => {
      expect(pushUpsGetter(36, mPuScoreSheet50_54)).toBe(20);
      });
  it('returns 0 point when less than 12', () => {
      expect(pushUpsGetter(11, mPuScoreSheet50_54)).toBe(0);
      });
  it('returns 20 point when more than 36', () => {
      expect(pushUpsGetter(37, mPuScoreSheet50_54)).toBe(20);
      });
  it('returns 0 point when given 0 pushups', () => {
      expect(pushUpsGetter(0, mPuScoreSheet50_54)).toBe(0);
      });
  it('returns 0 point when given null pushups', () => {
      expect(pushUpsGetter(null, mPuScoreSheet50_54)).toBe(0);
      });
  it('returns 0 point when given undefined pushups', () => {
      expect(pushUpsGetter(undefined, mPuScoreSheet50_54)).toBe(0);
      });
  
  //male 55-59
  
  it('returns 1 point when given 12 pushups', () => {
    expect(pushUpsGetter(12, mPuScoreSheet55_59)).toBe(1);
    });
  it('returns 20 point when given 33 pushups', () => {
    expect(pushUpsGetter(33, mPuScoreSheet55_59)).toBe(20);
    });
  it('returns 0 point when less than 12', () => {
    expect(pushUpsGetter(11, mPuScoreSheet55_59)).toBe(0);
    });
  it('returns 20 point when more than 33', () => {
    expect(pushUpsGetter(34, mPuScoreSheet55_59)).toBe(20);
    });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, mPuScoreSheet55_59)).toBe(0);
    });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, mPuScoreSheet55_59)).toBe(0);
    });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, mPuScoreSheet55_59)).toBe(0);
    });

  // male 60 and up

  it('returns 1 point when given 11 pushups', () => {
    expect(pushUpsGetter(11, mPuScoreSheet60)).toBe(1);
    });
  it('returns 20 point when given 30 pushups', () => {
    expect(pushUpsGetter(30, mPuScoreSheet60)).toBe(20);
    });
  it('returns 0 point when less than 11', () => {
    expect(pushUpsGetter(10, mPuScoreSheet60)).toBe(0);
    });
  it('returns 20 point when more than 30', () => {
    expect(pushUpsGetter(30, mPuScoreSheet60)).toBe(20);
    });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, mPuScoreSheet55_59)).toBe(0);
    });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, mPuScoreSheet55_59)).toBe(0);
    });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, mPuScoreSheet55_59)).toBe(0);
    });

}); 


describe("sitUpsGetter", () => {
  /* male 17-24 */
  it('returns 3 point when given 39 situps', () => {
    expect(sitUpsGetter(39, mSuScoreSheet17_24)).toBe(3);
    });
  it('returns 20 point when given 58 situps', () => {
    expect(sitUpsGetter(58, mSuScoreSheet17_24)).toBe(20);
    });
  it('returns 0 point when less than 39', () => {
    expect(sitUpsGetter(38, mSuScoreSheet17_24)).toBe(0);
    });
  it('returns 20 point when more than 58', () => {
    expect(sitUpsGetter(59, mSuScoreSheet17_24)).toBe(20);
    });
  it('returns 0 point when given 0 situps', () => {
    expect(sitUpsGetter(0, mSuScoreSheet17_24)).toBe(0);
    });
  it('returns 0 point when given null situps', () => {
    expect(sitUpsGetter(null, mSuScoreSheet17_24)).toBe(0);
    });
  it('returns 0 point when given undefined situps', () => {
    expect(sitUpsGetter(undefined, mSuScoreSheet17_24)).toBe(0);
    });
 
    /* male 25-29 */

  it('returns 3 point when given 38 situps', () => {
    expect(sitUpsGetter(38, mSuScoreSheet25_29)).toBe(3);
    });
  it('returns 20 point when given 57 situps', () => {
    expect(sitUpsGetter(57, mSuScoreSheet25_29)).toBe(20);
    });
  it('returns 0 point when less than 38', () => {
    expect(sitUpsGetter(37, mSuScoreSheet25_29)).toBe(0);
    });
  it('returns 20 point when more than 57', () => {
    expect(sitUpsGetter(58, mSuScoreSheet25_29)).toBe(20);
    });
  it('returns 0 point when given 0 situps', () => {
    expect(sitUpsGetter(0, mSuScoreSheet25_29)).toBe(0);
    });
  it('returns 0 point when given null situps', () => {
    expect(sitUpsGetter(null, mSuScoreSheet25_29)).toBe(0);
    });
  it('returns 0 point when given undefined situps', () => {
    expect(sitUpsGetter(undefined, mSuScoreSheet25_29)).toBe(0);
    });

    /* male 30-34 */

  it('returns 3 point when given 36 situps', () => {
    expect(sitUpsGetter(36, mSuScoreSheet30_34)).toBe(3);
    });
  it('returns 20 point when given 55 situps', () => {
    expect(sitUpsGetter(55, mSuScoreSheet30_34)).toBe(20);
    });
  it('returns 0 point when less than 36', () => {
    expect(sitUpsGetter(35, mSuScoreSheet30_34)).toBe(0);
    });
  it('returns 20 point when more than 55', () => {
    expect(sitUpsGetter(56, mSuScoreSheet30_34)).toBe(20);
    });
  it('returns 0 point when given 0 situps', () => {
    expect(sitUpsGetter(0, mSuScoreSheet30_34)).toBe(0);
    });
  it('returns 0 point when given null situps', () => {
    expect(sitUpsGetter(null, mSuScoreSheet30_34)).toBe(0);
    });
  it('returns 0 point when given undefined situps', () => {
    expect(sitUpsGetter(undefined, mSuScoreSheet30_34)).toBe(0);
    });
    
  /* male 35-39 */

  it('returns 3 point when given 34 situps', () => {
    expect(sitUpsGetter(34, mSuScoreSheet35_39)).toBe(3);
    });
  it('returns 20 point when given 52 situps', () => {
    expect(sitUpsGetter(52, mSuScoreSheet35_39)).toBe(20);
    });
  it('returns 0 point when less than 34', () => {
    expect(sitUpsGetter(33, mSuScoreSheet35_39)).toBe(0);
    });
  it('returns 20 point when more than 52', () => {
    expect(sitUpsGetter(53, mSuScoreSheet35_39)).toBe(20);
    });
  it('returns 0 point when given 0 situps', () => {
    expect(sitUpsGetter(0, mSuScoreSheet35_39)).toBe(0);
    });
  it('returns 0 point when given null situps', () => {
    expect(sitUpsGetter(null, mSuScoreSheet35_39)).toBe(0);
    });
  it('returns 0 point when given undefined situps', () => {
    expect(sitUpsGetter(undefined, mSuScoreSheet35_39)).toBe(0);
    });
    // Male 40-44 //
  it('returns 3 point when given 31 situps', () => {
      expect(sitUpsGetter(31, mSuScoreSheet40_44)).toBe(3);
      });
  it('returns 20 point when given 50 situps', () => {
      expect(sitUpsGetter(50, mSuScoreSheet40_44)).toBe(20);
      });
  it('returns 0 point when less than 31', () => {
      expect(sitUpsGetter(30, mSuScoreSheet40_44)).toBe(0);
      });
  it('returns 20 point when more than 50', () => {
      expect(sitUpsGetter(51, mSuScoreSheet40_44)).toBe(20);
      });
  it('returns 0 point when given 0 situps', () => {
      expect(sitUpsGetter(0, mSuScoreSheet40_44)).toBe(0);
      });
  it('returns 0 point when given null situps', () => {
      expect(sitUpsGetter(null, mSuScoreSheet40_44)).toBe(0);
      });
  it('returns 0 point when given undefined situps', () => {
      expect(sitUpsGetter(undefined, mSuScoreSheet40_44)).toBe(0);
    });
  
    // male 45-49 //

  it('returns 3 point when given 28 situps', () => {
      expect(sitUpsGetter(28, mSuScoreSheet45_49)).toBe(3);
      });
  it('returns 20 point when given 48 situps', () => {
      expect(sitUpsGetter(48, mSuScoreSheet45_49)).toBe(20);
      });
  it('returns 0 point when less than 28', () => {
      expect(sitUpsGetter(27, mSuScoreSheet45_49)).toBe(0);
      });
  it('returns 20 point when more than 48', () => {
      expect(sitUpsGetter(48, mSuScoreSheet45_49)).toBe(20);
      });
  it('returns 0 point when given 0 situps', () => {
      expect(sitUpsGetter(0, mSuScoreSheet45_49)).toBe(0);
      });
  it('returns 0 point when given null situps', () => {
      expect(sitUpsGetter(null, mSuScoreSheet45_49)).toBe(0);
      });
  it('returns 0 point when given undefined situps', () => {
      expect(sitUpsGetter(undefined, mSuScoreSheet45_49)).toBe(0);
    });
    
  // male 50-54 //
  it('returns 3 point when given 25 situps', () => {
      expect(sitUpsGetter(25, mSuScoreSheet50_54)).toBe(3);
      });
  it('returns 20 point when given 46 situps', () => {
      expect(sitUpsGetter(46, mSuScoreSheet50_54)).toBe(20);
      });
  it('returns 0 point when less than 25', () => {
      expect(sitUpsGetter(24, mSuScoreSheet50_54)).toBe(0);
      });
  it('returns 20 point when more than 46', () => {
      expect(sitUpsGetter(47, mSuScoreSheet50_54)).toBe(20);
      });
  it('returns 0 point when given 0 situps', () => {
      expect(sitUpsGetter(0, mSuScoreSheet50_54)).toBe(0);
      });
  it('returns 0 point when given null situps', () => {
      expect(sitUpsGetter(null, mSuScoreSheet50_54)).toBe(0);
      });
  it('returns 0 point when given undefined situps', () => {
      expect(sitUpsGetter(undefined, mSuScoreSheet50_54)).toBe(0);
    });

  // Male 55-59 //

it('returns 3 point when given 22 situps', () => {
    expect(sitUpsGetter(22, mSuScoreSheet55_59)).toBe(3);
    });
it('returns 20 point when given 44 situps', () => {
    expect(sitUpsGetter(44, mSuScoreSheet55_59)).toBe(20);
    });
it('returns 0 point when less than 22', () => {
    expect(sitUpsGetter(21, mSuScoreSheet55_59)).toBe(0);
    });
it('returns 20 point when more than 44', () => {
    expect(sitUpsGetter(45, mSuScoreSheet55_59)).toBe(20);
    });
it('returns 0 point when given 0 situps', () => {
    expect(sitUpsGetter(0, mSuScoreSheet55_59)).toBe(0);
    });
it('returns 0 point when given null situps', () => {
    expect(sitUpsGetter(null, mSuScoreSheet55_59)).toBe(0);
    });
it('returns 0 point when given undefined situps', () => {
    expect(sitUpsGetter(undefined, mSuScoreSheet55_59)).toBe(0);
  });

// male 60 and up //

it('returns 3 point when given 19 situps', () => {
  expect(sitUpsGetter(19, mSuScoreSheet60)).toBe(3);
  });
it('returns 20 point when given 42 situps', () => {
  expect(sitUpsGetter(42, mSuScoreSheet60)).toBe(20);
  });
it('returns 0 point when less than 18', () => {
  expect(sitUpsGetter(17, mSuScoreSheet60)).toBe(0);
  });
it('returns 20 point when more than 42', () => {
  expect(sitUpsGetter(43, mSuScoreSheet60)).toBe(20);
  });
it('returns 0 point when given 0 situps', () => {
  expect(sitUpsGetter(0, mSuScoreSheet60)).toBe(0);
  });
it('returns 0 point when given null situps', () => {
  expect(sitUpsGetter(null, mSuScoreSheet60)).toBe(0);
  });
it('returns 0 point when given undefined situps', () => {
  expect(sitUpsGetter(undefined, mSuScoreSheet60)).toBe(0);
});

});

// *** female push ups *** //

describe("pushUpsGetter", () => {
  
  // female 17-24 

  it('returns 1 point when given 15 pushups', () => {
    expect(pushUpsGetter(15, fPuScoreSheet17_24)).toBe(1);
    });
  it('returns 20 point when given 47 pushups', () => {
    expect(pushUpsGetter(47, fPuScoreSheet17_24)).toBe(20);
    });
  it('returns 0 point when less than 15', () => {
    expect(pushUpsGetter(14, fPuScoreSheet17_24)).toBe(0);
    });
  it('returns 20 point when more than 47', () => {
    expect(pushUpsGetter(48, fPuScoreSheet17_24)).toBe(20);
    });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, fPuScoreSheet17_24)).toBe(0);
    });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, fPuScoreSheet17_24)).toBe(0);
    });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, fPuScoreSheet17_24)).toBe(0);
    });

  // female 25-29
  it('returns 1 point when given 14 pushups', () => {
    expect(pushUpsGetter(14, fPuScoreSheet25_29)).toBe(1);
      });
  it('returns 20 point when given 47 pushups', () => {
    expect(pushUpsGetter(47, fPuScoreSheet25_29)).toBe(20);
      });
  it('returns 0 point when less than 14', () => {
    expect(pushUpsGetter(13, fPuScoreSheet25_29)).toBe(0);
      });
  it('returns 20 point when more than 47', () => {
    expect(pushUpsGetter(48, fPuScoreSheet25_29)).toBe(20);
      });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, fPuScoreSheet25_29)).toBe(0);
      });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, fPuScoreSheet25_29)).toBe(0);
      });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, fPuScoreSheet25_29)).toBe(0);
      });

  // female 30-34
  
  it('returns 1 point when given 11 pushups', () => {
    expect(pushUpsGetter(11, fPuScoreSheet30_34)).toBe(1);
      });
  it('returns 20 point when given 46 pushups', () => {
    expect(pushUpsGetter(46, fPuScoreSheet30_34)).toBe(20);
      });
  it('returns 0 point when less than 11', () => {
    expect(pushUpsGetter(10, fPuScoreSheet30_34)).toBe(0);
      });
  it('returns 20 point when more than 46', () => {
    expect(pushUpsGetter(47, fPuScoreSheet30_34)).toBe(20);
      });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, fPuScoreSheet30_34)).toBe(0);
      });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, fPuScoreSheet30_34)).toBe(0);
      });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, fPuScoreSheet30_34)).toBe(0);
      });

  // female 35-39

  it('returns 1 point when given 10 pushups', () => {
    expect(pushUpsGetter(10, fPuScoreSheet35_39)).toBe(1);
      });
  it('returns 20 point when given 42 pushups', () => {
    expect(pushUpsGetter(42, fPuScoreSheet35_39)).toBe(20);
      });
  it('returns 0 point when less than 10', () => {
    expect(pushUpsGetter(9, fPuScoreSheet35_39)).toBe(0);
      });
  it('returns 20 point when more than 42', () => {
    expect(pushUpsGetter(43, fPuScoreSheet35_39)).toBe(20);
      });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, fPuScoreSheet35_39)).toBe(0);
      });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, fPuScoreSheet35_39)).toBe(0);
      });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, fPuScoreSheet35_39)).toBe(0);
      });

  // female 40-44

  it('returns 1 point when given 8 pushups', () => {
    expect(pushUpsGetter(8, fPuScoreSheet40_44)).toBe(1);
      });
  it('returns 20 point when given 38 pushups', () => {
    expect(pushUpsGetter(45, fPuScoreSheet40_44)).toBe(20);
      });
  it('returns 0 point when less than 8', () => {
    expect(pushUpsGetter(7, fPuScoreSheet40_44)).toBe(0);
      });
  it('returns 20 point when more than 38', () => {
    expect(pushUpsGetter(39, fPuScoreSheet40_44)).toBe(20);
      });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, fPuScoreSheet40_44)).toBe(0);
      });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, fPuScoreSheet40_44)).toBe(0);
      });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, fPuScoreSheet40_44)).toBe(0);
      });

  // female 45-49

  it('returns 1 point when given 7 pushups', () => {
    expect(pushUpsGetter(7, fPuScoreSheet45_49)).toBe(1);
      });
  it('returns 20 point when given 37 pushups', () => {
    expect(pushUpsGetter(37, fPuScoreSheet45_49)).toBe(20);
      });
  it('returns 0 point when less than 7', () => {
    expect(pushUpsGetter(6, fPuScoreSheet45_49)).toBe(0);
      });
  it('returns 20 point when more than 37', () => {
    expect(pushUpsGetter(38, fPuScoreSheet45_49)).toBe(20);
      });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, fPuScoreSheet45_49)).toBe(0);
      });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, fPuScoreSheet45_49)).toBe(0);
      });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, fPuScoreSheet45_49)).toBe(0);
      });

  // female 50-54
  it('returns 1 point when given 6 pushups', () => {
    expect(pushUpsGetter(6, fPuScoreSheet50_54)).toBe(1);
      });
  it('returns 20 point when given 35 pushups', () => {
    expect(pushUpsGetter(35, fPuScoreSheet50_54)).toBe(20);
      });
  it('returns 0 point when less than 6', () => {
    expect(pushUpsGetter(5, fPuScoreSheet50_54)).toBe(0);
      });
  it('returns 20 point when more than 35', () => {
    expect(pushUpsGetter(36, fPuScoreSheet50_54)).toBe(20);
      });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, fPuScoreSheet50_54)).toBe(0);
      });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, fPuScoreSheet50_54)).toBe(0);
      });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, fPuScoreSheet50_54)).toBe(0);
      });

  // female 55-59
  it('returns 1 point when given 5 pushups', () => {
    expect(pushUpsGetter(5, fPuScoreSheet55_59)).toBe(1);
      });
  it('returns 20 point when given 28 pushups', () => {
    expect(pushUpsGetter(28, fPuScoreSheet55_59)).toBe(20);
      });
  it('returns 0 point when less than 5', () => {
    expect(pushUpsGetter(4, fPuScoreSheet55_59)).toBe(0);
      });
  it('returns 20 point when more than 28', () => {
    expect(pushUpsGetter(29, fPuScoreSheet55_59)).toBe(20);
      });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, fPuScoreSheet55_59)).toBe(0);
      });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, fPuScoreSheet55_59)).toBe(0);
      });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, fPuScoreSheet55_59)).toBe(0);
      });

  // Female 60 and up
  it('returns 1 point when given 4 pushups', () => {
    expect(pushUpsGetter(4, fPuScoreSheet60)).toBe(1);
      });
  it('returns 20 point when given 21 pushups', () => {
    expect(pushUpsGetter(21, fPuScoreSheet60)).toBe(20);
      });
  it('returns 0 point when less than 4', () => {
    expect(pushUpsGetter(3, fPuScoreSheet60)).toBe(0);
      });
  it('returns 20 point when more than 21', () => {
    expect(pushUpsGetter(22, fPuScoreSheet60)).toBe(20);
      });
  it('returns 0 point when given 0 pushups', () => {
    expect(pushUpsGetter(0, fPuScoreSheet60)).toBe(0);
      });
  it('returns 0 point when given null pushups', () => {
    expect(pushUpsGetter(null, fPuScoreSheet60)).toBe(0);
      });
  it('returns 0 point when given undefined pushups', () => {
    expect(pushUpsGetter(undefined, fPuScoreSheet60)).toBe(0);
      });
  });
 
   // *** female sit ups *** //

  describe("sitUpsGetter", () => {
    /* female 17-24 */
    it('returns 3 point when given 35 situps', () => {
      expect(sitUpsGetter(35, fSuScoreSheet17_24)).toBe(3);
      });
    it('returns 20 point when given 54 situps', () => {
      expect(sitUpsGetter(54, fSuScoreSheet17_24)).toBe(20);
      });
    it('returns 0 point when less than 35', () => {
      expect(sitUpsGetter(34, fSuScoreSheet17_24)).toBe(0);
      });
    it('returns 20 point when more than 54', () => {
      expect(sitUpsGetter(55, fSuScoreSheet17_24)).toBe(20);
      });
    it('returns 0 point when given 0 situps', () => {
      expect(sitUpsGetter(0, fSuScoreSheet17_24)).toBe(0);
      });
    it('returns 0 point when given null situps', () => {
      expect(sitUpsGetter(null, fSuScoreSheet17_24)).toBe(0);
      });
    it('returns 0 point when given undefined situps', () => {
      expect(sitUpsGetter(undefined, fSuScoreSheet17_24)).toBe(0);
      });

    // Female 25-29
    it('returns 3 point when given 31 situps', () => {
      expect(sitUpsGetter(31, fSuScoreSheet25_29)).toBe(3);
      });
    it('returns 20 point when given 50 situps', () => {
      expect(sitUpsGetter(50, fSuScoreSheet25_29)).toBe(20);
      });
    it('returns 0 point when less than 31', () => {
      expect(sitUpsGetter(30, fSuScoreSheet25_29)).toBe(0);
      });
    it('returns 20 point when more than 50', () => {
      expect(sitUpsGetter(51, fSuScoreSheet25_29)).toBe(20);
      });
    it('returns 0 point when given 0 situps', () => {
      expect(sitUpsGetter(0, fSuScoreSheet25_29)).toBe(0);
      });
    it('returns 0 point when given null situps', () => {
      expect(sitUpsGetter(null, fSuScoreSheet25_29)).toBe(0);
      });
    it('returns 0 point when given undefined situps', () => {
      expect(sitUpsGetter(undefined, fSuScoreSheet25_29)).toBe(0);
      });
      
    // female 30-34
    it('returns 3 point when given 26 situps', () => {
      expect(sitUpsGetter(26, fSuScoreSheet30_34)).toBe(3);
      });
    it('returns 20 point when given 45 situps', () => {
      expect(sitUpsGetter(45, fSuScoreSheet30_34)).toBe(20);
      });
    it('returns 0 point when less than 26', () => {
      expect(sitUpsGetter(25, fSuScoreSheet30_34)).toBe(0);
      });
    it('returns 20 point when more than 45', () => {
      expect(sitUpsGetter(46, fSuScoreSheet30_34)).toBe(20);
      });
    it('returns 0 point when given 0 situps', () => {
      expect(sitUpsGetter(0, fSuScoreSheet30_34)).toBe(0);
      });
    it('returns 0 point when given null situps', () => {
      expect(sitUpsGetter(null, fSuScoreSheet30_34)).toBe(0);
      });
    it('returns 0 point when given undefined situps', () => {
      expect(sitUpsGetter(undefined, fSuScoreSheet30_34)).toBe(0);
      });

    //female 35-39
    it('returns 3 point when given 24 situps', () => {
      expect(sitUpsGetter(24, fSuScoreSheet35_39)).toBe(3);
      });
    it('returns 20 point when given 43 situps', () => {
      expect(sitUpsGetter(43, fSuScoreSheet35_39)).toBe(20);
      });
    it('returns 0 point when less than 24', () => {
      expect(sitUpsGetter(23, fSuScoreSheet35_39)).toBe(0);
      });
    it('returns 20 point when more than 43', () => {
      expect(sitUpsGetter(44, fSuScoreSheet35_39)).toBe(20);
      });
    it('returns 0 point when given 0 situps', () => {
      expect(sitUpsGetter(0, fSuScoreSheet35_39)).toBe(0);
      });
    it('returns 0 point when given null situps', () => {
      expect(sitUpsGetter(null, fSuScoreSheet35_39)).toBe(0);
      });
    it('returns 0 point when given undefined situps', () => {
      expect(sitUpsGetter(undefined, fSuScoreSheet35_39)).toBe(0);
      });

    //female 40-44
    it('returns 3 point when given 21 situps', () => {
      expect(sitUpsGetter(21, fSuScoreSheet40_44)).toBe(3);
      });
    it('returns 20 point when given 41 situps', () => {
      expect(sitUpsGetter(41, fSuScoreSheet40_44)).toBe(20);
      });
    it('returns 0 point when less than 21', () => {
      expect(sitUpsGetter(20, fSuScoreSheet40_44)).toBe(0);
      });
    it('returns 20 point when more than 41', () => {
      expect(sitUpsGetter(42, fSuScoreSheet40_44)).toBe(20);
      });
    it('returns 0 point when given 0 situps', () => {
      expect(sitUpsGetter(0, fSuScoreSheet40_44)).toBe(0);
      });
    it('returns 0 point when given null situps', () => {
      expect(sitUpsGetter(null, fSuScoreSheet40_44)).toBe(0);
      });
    it('returns 0 point when given undefined situps', () => {
      expect(sitUpsGetter(undefined, fSuScoreSheet40_44)).toBe(0);
      });

    // female 45-49
    it('returns 3 point when given 19 situps', () => {
      expect(sitUpsGetter(19, fSuScoreSheet45_49)).toBe(3);
      });
    it('returns 20 point when given 35 situps', () => {
      expect(sitUpsGetter(35, fSuScoreSheet45_49)).toBe(20);
      });
    it('returns 0 point when less than 19', () => {
      expect(sitUpsGetter(18, fSuScoreSheet45_49)).toBe(0);
      });
    it('returns 20 point when more than 35', () => {
      expect(sitUpsGetter(36, fSuScoreSheet45_49)).toBe(20);
      });
    it('returns 0 point when given 0 situps', () => {
      expect(sitUpsGetter(0, fSuScoreSheet45_49)).toBe(0);
      });
    it('returns 0 point when given null situps', () => {
      expect(sitUpsGetter(null, fSuScoreSheet45_49)).toBe(0);
      });
    it('returns 0 point when given undefined situps', () => {
      expect(sitUpsGetter(undefined, fSuScoreSheet45_49)).toBe(0);
      });

    //female 50-54
    it('returns 3 point when given 17 situps', () => {
      expect(sitUpsGetter(17, fSuScoreSheet50_54)).toBe(3);
      });
    it('returns 20 point when given 32 situps', () => {
      expect(sitUpsGetter(32, fSuScoreSheet50_54)).toBe(20);
      });
    it('returns 0 point when less than 17', () => {
      expect(sitUpsGetter(16, fSuScoreSheet50_54)).toBe(0);
      });
    it('returns 20 point when more than 32', () => {
      expect(sitUpsGetter(33, fSuScoreSheet50_54)).toBe(20);
      });
    it('returns 0 point when given 0 situps', () => {
      expect(sitUpsGetter(0, fSuScoreSheet50_54)).toBe(0);
      });
    it('returns 0 point when given null situps', () => {
      expect(sitUpsGetter(null, fSuScoreSheet50_54)).toBe(0);
      });
    it('returns 0 point when given undefined situps', () => {
      expect(sitUpsGetter(undefined, fSuScoreSheet50_54)).toBe(0);
      });

    // female 55-59
    it('returns 3 point when given 12 situps', () => {
      expect(sitUpsGetter(12, fSuScoreSheet55_59)).toBe(3);
    });
    it('returns 20 point when given 32 situps', () => {
      expect(sitUpsGetter(32, fSuScoreSheet55_59)).toBe(20);
    });
    it('returns 0 point when less than 12', () => {
      expect(sitUpsGetter(11, fSuScoreSheet55_59)).toBe(0);
    });
    it('returns 20 point when more than 32', () => {
      expect(sitUpsGetter(33, fSuScoreSheet55_59)).toBe(20);
    });
    it('returns 0 point when given 0 situps', () => {
      expect(sitUpsGetter(0, fSuScoreSheet55_59)).toBe(0);
    });
    it('returns 0 point when given null situps', () => {
      expect(sitUpsGetter(null, fSuScoreSheet55_59)).toBe(0);
    });
    it('returns 0 point when given undefined situps', () => {
      expect(sitUpsGetter(undefined, fSuScoreSheet55_59)).toBe(0);
    });

    // female 60 and up
    it('returns 3 point when given 8 situps', () => {
      expect(sitUpsGetter(8, fSuScoreSheet60)).toBe(3);
      });
    it('returns 20 point when given 31 situps', () => {
      expect(sitUpsGetter(31, fSuScoreSheet60)).toBe(20);
      });
    it('returns 0 point when less than 8', () => {
      expect(sitUpsGetter(7, fSuScoreSheet60)).toBe(0);
      });
    it('returns 20 point when more than 31', () => {
      expect(sitUpsGetter(32, fSuScoreSheet60)).toBe(20);
      });
    it('returns 0 point when given 0 situps', () => {
      expect(sitUpsGetter(0, fSuScoreSheet60)).toBe(0);
      });
    it('returns 0 point when given null situps', () => {
      expect(sitUpsGetter(null, fSuScoreSheet60)).toBe(0);
      });
    it('returns 0 point when given undefined situps', () => {
      expect(sitUpsGetter(undefined, fSuScoreSheet60)).toBe(0);
      });

});

// *** male run time test *** //

/* describe("runGetter", () => {
    // male 17-24 //
    it('returns 60 when given less than 9:13', () => {
      expect(runGetter(moment('09:12', format), mRtScoreSheet17_24)).toBe(60)
    });
    it('return 59.5 when given in range of 9:13 to 9:34', () => {
        expect(runGetter(moment('09:13', format), mRtScoreSheet17_24)).toBe(59.5)
    });
    it('return 35 when given in range of 15:21 to 15:50', () => {
      expect(runGetter(moment('15:50', format), mRtScoreSheet17_24)).toBe(35)
    });

    it('return 0 when given over 15:50', () => {
      expect(runGetter(moment('15:51', format), mRtScoreSheet17_24)).toBe(0)
    });

    it('return 0 when given 00:00', () => {
      expect(runGetter(moment('00:00', format), mRtScoreSheet17_24)).toBe(0)
    });
    it('return 0 when given in null', () => {
      expect(runGetter(moment(null, format), mRtScoreSheet17_24)).toBe(0)
    });
    it('return 0 when given in undefined', () => {
      expect(runGetter(moment(undefined, format), mRtScoreSheet17_24)).toBe(0)
    });
  // male 25-29
    it('returns 60 when given less than 9:23', () => {
    expect(runGetter(moment('09:22', format), mRtScoreSheet25_29)).toBe(60)
    });
    it('return 59.5 when given in range of 9:23 to 9:45', () => {
      expect(runGetter(moment('09:23', format), mRtScoreSheet25_29)).toBe(59.5)
    });
    it('return 35 when given in range of 15:51 to 16:22', () => {
      expect(runGetter(moment('16:22', format), mRtScoreSheet25_29)).toBe(35)
    });

    it('return 0 when given over 16:22', () => {
      expect(runGetter(moment('16:23', format), mRtScoreSheet25_29)).toBe(0)
    });

    it('return 0 when given 00:00', () => {
      expect(runGetter(moment('00:00', format), mRtScoreSheet25_29)).toBe(0)
    });
    it('return 0 when given in null', () => {
      expect(runGetter(moment(null, format), mRtScoreSheet25_29)).toBe(0)
    });
    it('return 0 when given in undefined', () => {
      expect(runGetter(moment(undefined, format), mRtScoreSheet25_29)).toBe(0)
    });
    
  // male 30-34
    it('returns 60 when given less than 9:35', () => {
      expect(runGetter(moment('09:34', format), mRtScoreSheet30_34)).toBe(60)
      });
      it('return 59.5 when given in range of 9:35 to 9:58', () => {
        expect(runGetter(moment('09:35', format), mRtScoreSheet30_34)).toBe(59.5)
      });
      it('return 35 when given in range of 16:23 to 16:57', () => {
        expect(runGetter(moment('16:57', format), mRtScoreSheet30_34)).toBe(35)
      });
  
      it('return 0 when given over 16:57', () => {
        expect(runGetter(moment('16:58', format), mRtScoreSheet30_34)).toBe(0)
      });
  
      it('return 0 when given 00:00', () => {
        expect(runGetter(moment('00:00', format), mRtScoreSheet30_34)).toBe(0)
      });
      it('return 0 when given in null', () => {
        expect(runGetter(moment(null, format), mRtScoreSheet30_34)).toBe(0)
      });
      it('return 0 when given in undefined', () => {
        expect(runGetter(moment(undefined, format), mRtScoreSheet30_34)).toBe(0)
      });

    // male 35-39
      it('returns 60 when given less than 9:46', () => {
        expect(runGetter(moment('09:45', format), mRtScoreSheet35_39)).toBe(60)
      });
      it('return 59.5 when given in range of 9:46 to 10:10', () => {
        expect(runGetter(moment('09:46', format), mRtScoreSheet35_39)).toBe(59.5)
      });
      it('return 35 when given in range of 16:58 to 17:34', () => {
        expect(runGetter(moment('17:34', format), mRtScoreSheet35_39)).toBe(35)
      });
  
      it('return 0 when given over 17:34', () => {
        expect(runGetter(moment('17:35', format), mRtScoreSheet35_39)).toBe(0)
      });
  
      it('return 0 when given 00:00', () => {
        expect(runGetter(moment('00:00', format), mRtScoreSheet35_39)).toBe(0)
      });
      it('return 0 when given in null', () => {
        expect(runGetter(moment(null, format), mRtScoreSheet35_39)).toBe(0)
      });
      it('return 0 when given in undefined', () => {
        expect(runGetter(moment(undefined, format), mRtScoreSheet35_39)).toBe(0)
      });

    // Male 40-44
      it('returns 60 when given less than 9:59', () => {
        expect(runGetter(moment('09:58', format), mRtScoreSheet40_44)).toBe(60)
      });
      it('return 59.5 when given in range of 9:59 to 10:23', () => {
        expect(runGetter(moment('09:59', format), mRtScoreSheet40_44)).toBe(59.5)
      });
      it('return 35 when given in range of 17:35 to 18:14', () => {
        expect(runGetter(moment('18:14', format), mRtScoreSheet40_44)).toBe(35)
      });
  
      it('return 0 when given over 18:14', () => {
        expect(runGetter(moment('18:15', format), mRtScoreSheet40_44)).toBe(0)
      });
  
      it('return 0 when given 00:00', () => {
        expect(runGetter(moment('00:00', format), mRtScoreSheet40_44)).toBe(0)
      });
      it('return 0 when given in null', () => {
        expect(runGetter(moment(null, format), mRtScoreSheet40_44)).toBe(0)
      });
      it('return 0 when given in undefined', () => {
        expect(runGetter(moment(undefined, format), mRtScoreSheet40_44)).toBe(0)
      });

    // Male 45-49
      it('returns 60 when given less than 10:11', () => {
        expect(runGetter(moment('10:10', format), mRtScoreSheet45_49)).toBe(60)
      });
      it('return 59.5 when given in range of 10:11 to 10:37', () => {
        expect(runGetter(moment('10:11', format), mRtScoreSheet45_49)).toBe(59.5)
      });
      it('return 35 when given in range of 18:15 to 18:56', () => {
        expect(runGetter(moment('18:56', format), mRtScoreSheet45_49)).toBe(35)
      });
  
      it('return 0 when given over 18:56', () => {
        expect(runGetter(moment('18:57', format), mRtScoreSheet45_49)).toBe(0)
      });
  
      it('return 0 when given 00:00', () => {
        expect(runGetter(moment('00:00', format), mRtScoreSheet45_49)).toBe(0)
      });
      it('return 0 when given in null', () => {
        expect(runGetter(moment(null, format), mRtScoreSheet45_49)).toBe(0)
      });
      it('return 0 when given in undefined', () => {
        expect(runGetter(moment(undefined, format), mRtScoreSheet45_49)).toBe(0)
      });
    
    // Male 50-54
      it('returns 60 when given less than 10:38', () => {
        expect(runGetter(moment('10:37', format), mRtScoreSheet50_54)).toBe(60)
      });
      it('return 59.5 when given in range of 10:38 to 11:06', () => {
        expect(runGetter(moment('10:38', format), mRtScoreSheet50_54)).toBe(59.5)
      });
      it('return 35 when given in range of 19:44 to 20:33', () => {
        expect(runGetter(moment('20:33', format), mRtScoreSheet50_54)).toBe(35)
      });
  
      it('return 0 when given over 20:33', () => {
        expect(runGetter(moment('20:34', format), mRtScoreSheet50_54)).toBe(0)
      });
  
      it('return 0 when given 00:00', () => {
        expect(runGetter(moment('00:00', format), mRtScoreSheet50_54)).toBe(0)
      });
      it('return 0 when given in null', () => {
        expect(runGetter(moment(null, format), mRtScoreSheet50_54)).toBe(0)
      });
      it('return 0 when given in undefined', () => {
        expect(runGetter(moment(undefined, format), mRtScoreSheet50_54)).toBe(0)
      });

    // Male 55-59
      it('returns 60 when given less than 10:52', () => {
        expect(runGetter(moment('10:51', format), mRtScoreSheet55_59)).toBe(60)
      });
      it('return 59.5 when given in range of 10:52 to 11:22', () => {
        expect(runGetter(moment('10:52', format), mRtScoreSheet55_59)).toBe(59.5)
      });
      it('return 35 when given in range of 20:34 to 21:28', () => {
        expect(runGetter(moment('21:28', format), mRtScoreSheet55_59)).toBe(35)
      });
  
      it('return 0 when given over 21:28', () => {
        expect(runGetter(moment('21:29', format), mRtScoreSheet55_59)).toBe(0)
      });
  
      it('return 0 when given 00:00', () => {
        expect(runGetter(moment('00:00', format), mRtScoreSheet55_59)).toBe(0)
      });
      it('return 0 when given in null', () => {
        expect(runGetter(moment(null, format), mRtScoreSheet55_59)).toBe(0)
      });
      it('return 0 when given in undefined', () => {
        expect(runGetter(moment(undefined, format), mRtScoreSheet55_59)).toBe(0)
      });

    // Male 60 and up
      it('returns 60 when given less than 11:23', () => {
        expect(runGetter(moment('11:22', format), mRtScoreSheet60)).toBe(60)
      });
      it('return 59.5 when given in range of 11:23 to 11:56', () => {
        expect(runGetter(moment('11:23', format), mRtScoreSheet60)).toBe(59.5)
      });
      it('return 35 when given in range of 21:29 to 22:28', () => {
        expect(runGetter(moment('22:28', format), mRtScoreSheet60)).toBe(35)
      });
  
      it('return 0 when given over 22:28', () => {
        expect(runGetter(moment('22:29', format), mRtScoreSheet60)).toBe(0)
      });
  
      it('return 0 when given 00:00', () => {
        expect(runGetter(moment('00:00', format), mRtScoreSheet60)).toBe(0)
      });
      it('return 0 when given in null', () => {
        expect(runGetter(moment(null, format), mRtScoreSheet60)).toBe(0)
      });
      it('return 0 when given in undefined', () => {
        expect(runGetter(moment(undefined, format), mRtScoreSheet60)).toBe(0)
      });
    });

// *** Female run time test *** //
describe("runGetter", () => {
  // female 17-24 //
  it('returns 60 when given less than 10:24', () => {
    expect(runGetter(moment('10:23', format), fRtScoreSheet17_24)).toBe(60)
  });
  it('return 59.5 when given in range of 10:24 to 10:51', () => {
      expect(runGetter(moment('10:24', format), fRtScoreSheet17_24)).toBe(59.5)
  });
  it('return 35 when given in range of 18:15 to 18:56', () => {
    expect(runGetter(moment('18:56', format), fRtScoreSheet17_24)).toBe(35)
  });

  it('return 0 when given over 18:56', () => {
    expect(runGetter(moment('18:57', format), fRtScoreSheet17_24)).toBe(0)
  });

  it('return 0 when given 00:00', () => {
    expect(runGetter(moment('00:00', format), fRtScoreSheet17_24)).toBe(0)
  });
  it('return 0 when given in null', () => {
    expect(runGetter(moment(null, format), fRtScoreSheet17_24)).toBe(0)
  });
  it('return 0 when given in undefined', () => {
    expect(runGetter(moment(undefined, format), fRtScoreSheet17_24)).toBe(0)
  });

// female 25-29
  it('returns 60 when given less than 10:38', () => {
    expect(runGetter(moment('10:37', format), fRtScoreSheet25_29)).toBe(60)
  });
  it('return 59.5 when given in range of 10:38 to 11:06', () => {
    expect(runGetter(moment('10:38', format), fRtScoreSheet25_29)).toBe(59.5)
  });
  it('return 35 when given in range of 18:57 to 19:43', () => {
    expect(runGetter(moment('19:43', format), fRtScoreSheet25_29)).toBe(35)
  });

  it('return 0 when given over 19:43', () => {
    expect(runGetter(moment('19:44', format), fRtScoreSheet25_29)).toBe(0)
  });

  it('return 0 when given 00:00', () => {
    expect(runGetter(moment('00:00', format), fRtScoreSheet25_29)).toBe(0)
  });
  it('return 0 when given in null', () => {
    expect(runGetter(moment(null, format), fRtScoreSheet25_29)).toBe(0)
  });
  it('return 0 when given in undefined', () => {
    expect(runGetter(moment(undefined, format), fRtScoreSheet25_29)).toBe(0)
  });
// Female 30-34
  it('returns 60 when given less than 10:52', () => {
    expect(runGetter(moment('10:51', format), fRtScoreSheet30_34)).toBe(60)
  });
  it('return 59.5 when given in range of 10:52 to 11:22', () => {
    expect(runGetter(moment('10:52', format), fRtScoreSheet30_34)).toBe(59.5)
  });
  it('return 35 when given in range of 19:44 to 20:33', () => {
    expect(runGetter(moment('20:33', format), fRtScoreSheet30_34)).toBe(35)
  });

  it('return 0 when given over 20:33', () => {
  expect(runGetter(moment('20:34', format), fRtScoreSheet30_34)).toBe(0)
  });

  it('return 0 when given 00:00', () => {
    expect(runGetter(moment('00:00', format), fRtScoreSheet30_34)).toBe(0)
  });
  it('return 0 when given in null', () => {
    expect(runGetter(moment(null, format), fRtScoreSheet30_34)).toBe(0)
  });
  it('return 0 when given in undefined', () => {
    expect(runGetter(moment(undefined, format), fRtScoreSheet30_34)).toBe(0)
  });
//female 35-39
  it('returns 60 when given less than 11:07', () => {
    expect(runGetter(moment('11:06', format), fRtScoreSheet35_39)).toBe(60)
  });
  it('return 59.5 when given in range of 11:07 to 11:38', () => {
    expect(runGetter(moment('11:07', format), fRtScoreSheet35_39)).toBe(59.5)
  });
  it('return 35 when given in range of 20:34 to 21:28', () => {
    expect(runGetter(moment('21:28', format), fRtScoreSheet35_39)).toBe(35)
  });
  it('return 0 when given over 21:28', () => {
    expect(runGetter(moment('21:29', format), fRtScoreSheet35_39)).toBe(0)
  });
  it('return 0 when given 00:00', () => {
    expect(runGetter(moment('00:00', format), fRtScoreSheet35_39)).toBe(0)
  });
  it('return 0 when given in null', () => {
    expect(runGetter(moment(null, format), fRtScoreSheet35_39)).toBe(0)
  });
  it('return 0 when given in undefined', () => {
    expect(runGetter(moment(undefined, format), fRtScoreSheet35_39)).toBe(0)
  });
// Female 40-44
  it('returns 60 when given less than 11:23', () => {
    expect(runGetter(moment('11:22', format), fRtScoreSheet40_44)).toBe(60)
  });
  it('return 59.5 when given in range of 11:23 to 11:56', () => {
    expect(runGetter(moment('11:23', format), fRtScoreSheet40_44)).toBe(59.5)
  });
  it('return 35 when given in range of 21:29 to 22:28', () => {
    expect(runGetter(moment('22:28', format), fRtScoreSheet40_44)).toBe(35)
  });
  it('return 0 when given over 22:28', () => {
    expect(runGetter(moment('22:29', format), fRtScoreSheet40_44)).toBe(0)
  });
  it('return 0 when given 00:00', () => {
    expect(runGetter(moment('00:00', format), fRtScoreSheet40_44)).toBe(0)
  });
  it('return 0 when given in null', () => {
    expect(runGetter(moment(null, format), fRtScoreSheet40_44)).toBe(0)
  });
  it('return 0 when given in undefined', () => {
    expect(runGetter(moment(undefined, format), fRtScoreSheet40_44)).toBe(0)
  });

// Female 45-49
  it('returns 60 when given less than 11:39', () => {
    expect(runGetter(moment('11:38', format), fRtScoreSheet45_49)).toBe(60)
  });
  it('return 59.5 when given in range of 11:39 to 12:14', () => {
    expect(runGetter(moment('11:39', format), fRtScoreSheet45_49)).toBe(59.5)
  });
  it('return 35 when given in range of 22:29 to 23:34', () => {
    expect(runGetter(moment('23:34', format), fRtScoreSheet45_49)).toBe(35)
  });
  it('return 0 when given over 23:34', () => {
    expect(runGetter(moment('23:35', format), fRtScoreSheet45_49)).toBe(0)
  });
  it('return 0 when given 00:00', () => {
    expect(runGetter(moment('00:00', format), fRtScoreSheet45_49)).toBe(0)
  });
  it('return 0 when given in null', () => {
    expect(runGetter(moment(null, format), fRtScoreSheet45_49)).toBe(0)
  });
  it('return 0 when given in undefined', () => {
    expect(runGetter(moment(undefined, format), fRtScoreSheet45_49)).toBe(0)
  });

// Female 50-54
  it('returns 60 when given less than 12:54', () => {
    expect(runGetter(moment('12:53', format), fRtScoreSheet50_54)).toBe(60)
  });
  it('return 59.5 when given in range of 12:54 to 13:36', () => {
    expect(runGetter(moment('12:54', format), fRtScoreSheet50_54)).toBe(59.5)
  });
  it('return 35 when given in range of 23:35 to 24:46', () => {
    expect(runGetter(moment('24:46', format), fRtScoreSheet50_54)).toBe(35)
  });
  it('return 0 when given over 24:46', () => {
    expect(runGetter(moment('24:47', format), fRtScoreSheet50_54)).toBe(0)
  });
  it('return 0 when given 00:00', () => {
    expect(runGetter(moment('00:00', format), fRtScoreSheet50_54)).toBe(0)
  });
  it('return 0 when given in null', () => {
    expect(runGetter(moment(null, format), fRtScoreSheet50_54)).toBe(0)
  });
  it('return 0 when given in undefined', () => {
    expect(runGetter(moment(undefined, format), fRtScoreSheet50_54)).toBe(0)
  });

  //Female 55-59
  it('returns 60 when given less than 13:15', () => {
    expect(runGetter(moment('13:14', format), fRtScoreSheet55_59)).toBe(60)
  });
  it('return 59.5 when given in range of 13:15 to 14:00', () => {
    expect(runGetter(moment('13:15', format), fRtScoreSheet55_59)).toBe(59.5)
  });
  it('return 35 when given in range of 24:47 to 26:06', () => {
    expect(runGetter(moment('26:06', format), fRtScoreSheet55_59)).toBe(35)
  });
  it('return 0 when given over 26:06', () => {
    expect(runGetter(moment('26:07', format), fRtScoreSheet55_59)).toBe(0)
  });
  it('return 0 when given 00:00', () => {
    expect(runGetter(moment('00:00', format), fRtScoreSheet55_59)).toBe(0)
  });
  it('return 0 when given in null', () => {
    expect(runGetter(moment(null, format), fRtScoreSheet55_59)).toBe(0)
  });
  it('return 0 when given in undefined', () => {
    expect(runGetter(moment(undefined, format), fRtScoreSheet55_59)).toBe(0)
  });

  // Female 60 and up
  it('returns 60 when given less than 14:01', () => {
    expect(runGetter(moment('14:00', format), fRtScoreSheet60)).toBe(60)
  });
  it('return 59.5 when given in range of 14:01 to 14:52', () => {
    expect(runGetter(moment('14:01', format), fRtScoreSheet60)).toBe(59.5)
  });
  it('return 35 when given in range of 26:07 to 27:27', () => {
    expect(runGetter(moment('27:27', format), fRtScoreSheet60)).toBe(35)
  });
  it('return 0 when given over 27:27', () => {
    expect(runGetter(moment('27:28', format), fRtScoreSheet60)).toBe(0)
  });
  it('return 0 when given 00:00', () => {
    expect(runGetter(moment('00:00', format), fRtScoreSheet60)).toBe(0)
  });
  it('return 0 when given in null', () => {
    expect(runGetter(moment(null, format), fRtScoreSheet60)).toBe(0)
  });
  it('return 0 when given in undefined', () => {
    expect(runGetter(moment(undefined, format), fRtScoreSheet60)).toBe(0)
  });
}); */


/* describe("ageGetter", () => {
    it('returns "17_24" when give a number below 25', () => {
        expect(ageGetter(17)).toBe('17_24');
    });
}); */

/// *** Male ageGetter tester *** //

describe("ageGetter", () => {
  // Male 17-24
  it('returns all scoresheets when given an age', () => {
    expect(ageGetter(18, 'false')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mPuScoreSheet17_24),
        expect.objectContaining(mSuScoreSheet17_24),
        expect.objectContaining(mRtScoreSheet17_24)
      ])
    );
    });
    // Male 25-29
  it('returns all scoresheets when given an age', () => {
    expect(ageGetter(26, 'false')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mPuScoreSheet25_29),
        expect.objectContaining(mSuScoreSheet25_29),
        expect.objectContaining(mRtScoreSheet25_29)
      ])
    );
  });
  // male 30-34
  it('returns all scoresheets 17-25 when given an age', () => {
    expect(ageGetter(32, 'false')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mPuScoreSheet30_34),
        expect.objectContaining(mSuScoreSheet30_34),
        expect.objectContaining(mRtScoreSheet30_34)
      ])
    );
    });
    // Male 35-39
  it('returns all scoresheets 17-25 when given an age', () => {
    expect(ageGetter(37, 'false')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mPuScoreSheet35_39),
        expect.objectContaining(mSuScoreSheet35_39),
        expect.objectContaining(mRtScoreSheet35_39)
      ])
    );
  });
  // Male 40-44
  it('returns all scoresheets 17-25 when given an age', () => {
    expect(ageGetter(44, 'false')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mPuScoreSheet40_44),
        expect.objectContaining(mSuScoreSheet40_44),
        expect.objectContaining(mRtScoreSheet40_44)
      ])
    );
  });
  // Male 45-49
  it('returns all scoresheets 17-25 when given an age', () => {
    expect(ageGetter(48, 'false')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mPuScoreSheet45_49),
        expect.objectContaining(mSuScoreSheet45_49),
        expect.objectContaining(mRtScoreSheet45_49)
      ])
    );
    });
  // Male 50-54
  it('returns all scoresheets 17-25 when given an age', () => {
    expect(ageGetter(50, 'false')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mPuScoreSheet50_54),
        expect.objectContaining(mSuScoreSheet50_54),
        expect.objectContaining(mRtScoreSheet50_54)
      ])
    );
  });
  // Male 55-59
  it('returns all scoresheets 17-25 when given an age', () => {
    expect(ageGetter(55, 'false')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mPuScoreSheet55_59),
        expect.objectContaining(mSuScoreSheet55_59),
        expect.objectContaining(mRtScoreSheet55_59)
      ])
    );
    });
    // Male 60 and up
  it('returns all scoresheets 17-25 when given an age', () => {
    expect(ageGetter(62, 'false')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mPuScoreSheet60),
        expect.objectContaining(mSuScoreSheet60),
        expect.objectContaining(mRtScoreSheet60)
      ])
    );
  });
});

// *** Female ageGetter tester *** //
describe("ageGetter", () => {
  // Female 17-24
  it('returns all scoresheets when given an age', () => {
    expect(ageGetter(18, 'true')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(fPuScoreSheet17_24),
        expect.objectContaining(fSuScoreSheet17_24),
        expect.objectContaining(fRtScoreSheet17_24)
      ])
    );
    });
    // Female 25-29
  it('returns all scoresheets when given an age', () => {
    expect(ageGetter(26, 'true')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(fPuScoreSheet25_29),
        expect.objectContaining(fSuScoreSheet25_29),
        expect.objectContaining(fRtScoreSheet25_29)
      ])
    );
  });
  // Female 30-34
  it('returns all scoresheets when given an age', () => {
    expect(ageGetter(31, 'true')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(fPuScoreSheet30_34),
        expect.objectContaining(fSuScoreSheet30_34),
        expect.objectContaining(fRtScoreSheet30_34)
      ])
    );
    });
  // Female 35-39
  it('returns all scoresheets when given an age', () => {
    expect(ageGetter(37, 'true')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(fPuScoreSheet35_39),
        expect.objectContaining(fSuScoreSheet35_39),
        expect.objectContaining(fRtScoreSheet35_39)
      ])
    );
    });
  // Female 40-44
  it('returns all scoresheets when given an age', () => {
    expect(ageGetter(42, 'true')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(fPuScoreSheet40_44),
        expect.objectContaining(fSuScoreSheet40_44),
        expect.objectContaining(fRtScoreSheet40_44)
      ])
    );
    });
  // Female 45-49
  it('returns all scoresheets when given an age', () => {
    expect(ageGetter(46, 'true')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(fPuScoreSheet45_49),
        expect.objectContaining(fSuScoreSheet45_49),
        expect.objectContaining(fRtScoreSheet45_49)
      ])
    );
    });
  // Female 50-54
  it('returns all scoresheets when given an age', () => {
    expect(ageGetter(53, 'true')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(fPuScoreSheet50_54),
        expect.objectContaining(fSuScoreSheet50_54),
        expect.objectContaining(fRtScoreSheet50_54)
      ])
    );
    });
  // Female 55-59
  it('returns all scoresheets when given an age', () => {
    expect(ageGetter(55, 'true')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(fPuScoreSheet55_59),
        expect.objectContaining(fSuScoreSheet55_59),
        expect.objectContaining(fRtScoreSheet55_59)
      ])
    );
    });
  // female 60 and up
  it('returns all scoresheets when given an age', () => {
    expect(ageGetter(65, 'true')).toEqual(
      expect.arrayContaining([
        expect.objectContaining(fPuScoreSheet60),
        expect.objectContaining(fSuScoreSheet60),
        expect.objectContaining(fRtScoreSheet60)
      ])
    );
    });
});

// *** Finale score = 0 || 100 test *** //
describe("finalScore", () => {
  // No waviers 
  it('returns 100 when there is no waivers', () => {
    expect(finalScore(60,20,20, [false,false,false])).toEqual(100)
  });
  // Waiver for run
  it('returns a 100 when there is a run waiver', () => {
    expect(finalScore(0,20,20, [false, false, true, false, false])).toEqual(100)
  });
  // Waiver for run and sit ups
  it('returns 100 when there is a run and situp waiver', () => {
    expect(finalScore(0,0,20, [false, false, true, true, false])).toEqual(100)
  });
  // Waiver for sit ups
  it('returns a 100 when there is a sit ups waiver', () => {
    expect(finalScore(60,0,20, [true, false, false, true, false])).toEqual(100)
  });
  // Waiver for run, sit ups and push ups
  it('returns 0 when there is all waivers', () => {
    expect(finalScore(0,0,0, [false,false,true,true,true])).toEqual(0)
  });
  // Waiver for run and push ups
  it('returns 100 when there is a run and push up waiver', () => {
    expect(finalScore(0,20,0, [false,false,true,false,true])).toEqual(100)
  });
  // Waiver for sit ups and push ups
  it('returns 100 when there is a sit up and push up waiver', () => {
    expect(finalScore(60,0,0, [true,false,false,true,true])).toEqual(100)
  });
  // waiver for push ups
  it('returns 100 when there is a push up waiver', () => {
    expect(finalScore(60,20,0, [true,false,false,false,true])).toEqual(100)
  });
});

// *** Final score with random numbers *** //
describe("finalScore", () => {
  // No waviers 
  it('returns 68 when there is no waivers', () => {
    expect(finalScore(35,15,18, [false,false,false])).toEqual(68)
  });
  // Waiver for run
  it('returns 75 when there is a run waiver', () => {
    expect(finalScore(0,17,13, [false, false, true, false, false])).toEqual(75)
  });
  // Waiver for run and sit ups
  it('returns 68 when there is a run and situp waiver', () => {
    expect(finalScore(0,0,13.6, [false, false, true, true, false])).toEqual(68)
  });
  // Waiver for sit ups
  it('returns a 82.75 when there is a sit ups waiver', () => {
    expect(finalScore(48,0,18.2, [true, false, false, true, false])).toEqual(82.75)
  });
  // Waiver for run, sit ups and push ups
  it('returns 0 when there is all waivers', () => {
    expect(finalScore(0,0,0, [false,false,true,true,true])).toEqual(0)
  });
  // Waiver for run and push ups
  it('returns 83 when there is a run and push up waiver', () => {
    expect(finalScore(0,16.6,0, [false,false,true,false,true])).toEqual(83)
  });
  // Waiver for sit ups and push ups
  it('returns 95 when there is a sit up and push up waiver', () => {
    expect(finalScore(57,0,0, [true,false,false,true,true])).toEqual(95)
  }); //try with 56 later
  // waiver for push ups
  it('returns 91.25 when there is a push up waiver', () => {
    expect(finalScore(56,17,0, [true,false,false,false,true])).toEqual(91.25)
  });
});