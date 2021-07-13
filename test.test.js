

 
/* This is not tested for out stuff you need  */


import { describe, expect, it } from "@jest/globals";
import {
  genderGetter,
  ageGetter,
  pushUpsGetter,
  SitUpsGetter,
  RunTimeGetter,
  FinalScore,
} from "./Form.js";

describe("ageGetter", () => {
    it('returns "17_24" when give a number below 25', () => {
        expect(ageGetter(17)).toBe('17_24');
    });
});

/* describe("genderGetter", () => {
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