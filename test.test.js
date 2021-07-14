

 
/* This is not tested for out stuff you need  */


import { describe, expect, it } from "@jest/globals";
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
  RunTimeGetter,

  FinalScore,
} from "./Form.js";

/* describe("ageGetter", () => {
    it('returns "17_24" when give a number below 25', () => {
        expect(ageGetter(17)).toBe('17_24');
    });
}); */

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
      expect(pushUpsGetter(35, mPuScoreSheet50_54)).toBe(20);
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

/*
 describe("genderGetter", () => {
  it('returns "male" for true', () => {
    expect(genderGetter(true)).toMatch("male");
  });
  it('returns "female" for false', () => {
    expect(genderGetter(false)).toMatch("female");
  });
});


describe("PushUpsGetter", () => {
  it("returns 1 point when given 30 pushups", () => {
    expect(pushUpsGetter(30)).toBe(1);
  });
  it("returns 20 points when given 67 pushups", () => {
    expect(pushUpsGetter(67)).toBe(20);
  });
  it("returns 0 points when given < 30 pushups", () => {
    expect(pushUpsGetter(29)).toBe(0);
  });
  it("returns 20 points when given > 67 pushups", () => {
    expect(pushUpsGetter(68)).toBe(20);
  });
  it("returns 0 points when given 0 pushups", () => {
    expect(pushUpsGetter(0)).toBe(0);
  });
  it("returns 0 points when given null pushups", () => {
    expect(pushUpsGetter(null)).toBe(0);
  });
  it("returns 0 points when given undefined pushups", () => {
    expect(pushUpsGetter(undefined)).toBe(0);
  });
});

describe("SitUpsGetter", () => {
  it("returns 0 point when given < 39 situps", () => {
    expect(SitUpsGetter(38, false)).toBe(0);
  });
  it("returns 3 points when given 39 situps", () => {
    expect(SitUpsGetter(39, false)).toBe(3);
  });
  it("returns 19.7 points when given 57 situps", () => {
    expect(SitUpsGetter(57, false)).toBe(19.7);
  });
  it("returns 20 points when given 58 situps", () => {
    expect(SitUpsGetter(58, false)).toBe(20);
  });
  it("returns 20 points when given > 58 situps", () => {
    expect(SitUpsGetter(59, false)).toBe(20);
  });
  it("returns 0 points when given true waiver", () => {
    expect(SitUpsGetter(0, true)).toBe(0);
  });
  it("returns 0 points when given null situps", () => {
    expect(SitUpsGetter(null, false)).toBe(0);
  });
  it("returns 0 points when given undefined situps", () => {
    expect(SitUpsGetter(undefined, false)).toBe(0);
  });
  it("returns 0 points when given undefined waiver", () => {
    expect(SitUpsGetter(0, undefined)).toBe(0);
  });
  it("returns 0 points when given both undefined inputs", () => {
    expect(SitUpsGetter(undefined, undefined)).toBe(0);
  });
});

// create a test suite to test the AgeGetter
describe("AgeGetter", () => {
  it("returns 17_24 when given a range between 17 and 24", () => {
    expect(ageGetter(17)).toBe("17-24");
    expect(ageGetter(24)).toBe("17-24");
  });
  it("returns 25_29 when given a range between 25 and 29", () => {
    expect(ageGetter(25)).toBe("25-29");
    expect(ageGetter(29)).toBe("25-29");
  });
  it("returns 30_34 when given a range between 30 and 34", () => {
    expect(ageGetter(30)).toBe("30-34");
    expect(ageGetter(34)).toBe("30-34");
  });
  it("returns 35_39 when given a range between 35 and 39", () => {
    expect(ageGetter(35)).toBe("35-39");
    expect(ageGetter(39)).toBe("35-39");
  });
  it("returns 40_44 when given a range between 40 and 44", () => {
    expect(ageGetter(40)).toBe("40-44");
    expect(ageGetter(44)).toBe("40-44");
  });
  it("returns 45_49 when given a range between 45 and 49", () => {
    expect(ageGetter(45)).toBe("45-49");
    expect(ageGetter(49)).toBe("45-49");
  });
  it("returns 50_54 when given a range between 50 and 54", () => {
    expect(ageGetter(50)).toBe("50-54");
    expect(ageGetter(54)).toBe("50-54");
  });
  it("returns 55_59 when given a range between 55 and 59", () => {
    expect(ageGetter(55)).toBe("55-59");
    expect(ageGetter(59)).toBe("55-59");
  });
  it("returns 60+ when given an age above 59", () => {
    expect(ageGetter(60)).toBe("60+");
  });
});

describe("FinalScore", () => {
  it("max score, no waivers", () => {
    expect(
      FinalScore(
        pushUpsGetter(67, false),
        false,
        SitUpsGetter(58, false),
        false,
        RunTimeGetter("0912", false),
        false
      )
    ).toBe(100);
  });
  it("max score, only run waiver", () => {
    expect(
      FinalScore(
        pushUpsGetter(67, false),
        false,
        SitUpsGetter(58, false),
        false,
        RunTimeGetter("", true),
        true
      )
    ).toBe(100);
  });
  it("max score, only situps waiver", () => {
    expect(
      FinalScore(
        pushUpsGetter(67, false),
        false,
        SitUpsGetter(0, true),
        true,
        RunTimeGetter("0912", false),
        false
      )
    ).toBe(100);
  });
  it("max score, only pushup waiver", () => {
    expect(
      FinalScore(
        pushUpsGetter(0, true),
        true,
        SitUpsGetter(58, false),
        false,
        RunTimeGetter("0912", false),
        false
      )
    ).toBe(100);
  });
  it("max score, only situps and run waiver", () => {
    expect(
      FinalScore(
        pushUpsGetter(67, false),
        false,
        SitUpsGetter(0, true),
        true,
        RunTimeGetter("0912", true),
        true
      )
    ).toBe(100);
  });
  it("max score, only pushups and run waiver", () => {
    expect(
      FinalScore(
        pushUpsGetter(0, true),
        true,
        SitUpsGetter(58, false),
        false,
        RunTimeGetter("", true),
        true
      )
    ).toBe(100);
  });
  it("max score, only situps and pushup waiver", () => {
    expect(
      FinalScore(
        pushUpsGetter(0, true),
        true,
        SitUpsGetter(0, true),
        true,
        RunTimeGetter("0912", false),
        false
      )
    ).toBe(100);
  });
  it("max score, all waivers", () => {
    expect(
      FinalScore(
        pushUpsGetter(0, true),
        true,
        SitUpsGetter(0, true),
        true,
        RunTimeGetter("", true),
        true
      )
    ).toBe(100);
  });
  it("80 points, no waivers", () => {
    expect(
      FinalScore(
        pushUpsGetter(35, false),
        false,
        SitUpsGetter(41, false),
        false,
        RunTimeGetter("0912", false),
        false
      )
    ).toBe(80);
  });
  it("80 points, only situps waiver", () => {
    expect(
      FinalScore(
        pushUpsGetter(35, false),
        false,
        SitUpsGetter(0, true),
        true,
        RunTimeGetter("0912", false),
        false
      )
    ).toBe(88.75);
  });
  it("80 points, only pushups waiver", () => {
    expect(
      FinalScore(
        pushUpsGetter(0, true),
        true,
        SitUpsGetter(41, false),
        false,
        RunTimeGetter("0912", false),
        false
      )
    ).toBe(86.25);
  });
}); */