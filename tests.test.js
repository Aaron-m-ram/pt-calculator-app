import { describe, expect, it } from "@jest/globals";
import {
  pushUpsGetter,
  AgeGetter,
  SitUpsGetter,
  RunTimeGetter,
  FinalScore,
} from "./Running";

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
  it("returns 6 points when given 40 situps", () => {
    expect(SitUpsGetter(40, false)).toBe(6);
  });
  it("returns 9 points when given 41 situps", () => {
    expect(SitUpsGetter(41, false)).toBe(9);
  });
  it("returns 12 points when given 42 situps", () => {
    expect(SitUpsGetter(42, false)).toBe(12);
  });
  it("returns 12.6 points when given 43 situps", () => {
    expect(SitUpsGetter(43, false)).toBe(12.6);
  });
  it("returns 13 points when given 44 situps", () => {
    expect(SitUpsGetter(44, false)).toBe(13);
  });
  it("returns 14 points when given 45 situps", () => {
    expect(SitUpsGetter(45, false)).toBe(14);
  });
  it("returns 15 points when given 46 situps", () => {
    expect(SitUpsGetter(46, false)).toBe(15);
  });
  it("returns 16 points when given 47 situps", () => {
    expect(SitUpsGetter(47, false)).toBe(16);
  });
  it("returns 16.6 points when given 48 situps", () => {
    expect(SitUpsGetter(48, false)).toBe(16.6);
  });
  it("returns 17 points when given 49 situps", () => {
    expect(SitUpsGetter(49, false)).toBe(17);
  });
  it("returns 17.4 points when given 50 situps", () => {
    expect(SitUpsGetter(50, false)).toBe(17.4);
  });
  it("returns 17.6 points when given 51 situps", () => {
    expect(SitUpsGetter(51, false)).toBe(17.6);
  });
  it("returns 18 points when given 52 situps", () => {
    expect(SitUpsGetter(52, false)).toBe(18);
  });
  it("returns 18.4 points when given 53 situps", () => {
    expect(SitUpsGetter(53, false)).toBe(18.4);
  });
  it("returns 18.8 points when given 54 situps", () => {
    expect(SitUpsGetter(54, false)).toBe(18.8);
  });
  it("returns 19 points when given 55 situps", () => {
    expect(SitUpsGetter(55, false)).toBe(19);
  });
  it("returns 19.4 points when given 56 situps", () => {
    expect(SitUpsGetter(56, false)).toBe(19.4);
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
    expect(AgeGetter(17)).toBe("17_24");
    expect(AgeGetter(18)).toBe("17_24");
    expect(AgeGetter(19)).toBe("17_24");
    expect(AgeGetter(20)).toBe("17_24");
    expect(AgeGetter(21)).toBe("17_24");
    expect(AgeGetter(22)).toBe("17_24");
    expect(AgeGetter(23)).toBe("17_24");
    expect(AgeGetter(24)).toBe("17_24");
  });
  it("returns 25_29 when given a range between 25 and 29", () => {
    expect(AgeGetter(25)).toBe("25_29");
    expect(AgeGetter(26)).toBe("25_29");
    expect(AgeGetter(27)).toBe("25_29");
    expect(AgeGetter(28)).toBe("25_29");
    expect(AgeGetter(29)).toBe("25_29");
  });
  it("returns 30_34 when given a range between 30 and 34", () => {
    expect(AgeGetter(30)).toBe("30_34");
    expect(AgeGetter(31)).toBe("30_34");
    expect(AgeGetter(32)).toBe("30_34");
    expect(AgeGetter(33)).toBe("30_34");
    expect(AgeGetter(34)).toBe("30_34");
  });
  it("returns 35_39 when given a range between 35 and 39", () => {
    expect(AgeGetter(35)).toBe("35_39");
    expect(AgeGetter(36)).toBe("35_39");
    expect(AgeGetter(37)).toBe("35_39");
    expect(AgeGetter(38)).toBe("35_39");
    expect(AgeGetter(39)).toBe("35_39");
  });
  it("returns 40_44 when given a range between 40 and 44", () => {
    expect(AgeGetter(40)).toBe("40_44");
    expect(AgeGetter(41)).toBe("40_44");
    expect(AgeGetter(42)).toBe("40_44");
    expect(AgeGetter(43)).toBe("40_44");
    expect(AgeGetter(44)).toBe("40_44");
  });
  it("returns 45_49 when given a range between 45 and 49", () => {
    expect(AgeGetter(45)).toBe("45_49");
    expect(AgeGetter(46)).toBe("45_49");
    expect(AgeGetter(47)).toBe("45_49");
    expect(AgeGetter(48)).toBe("45_49");
    expect(AgeGetter(49)).toBe("45_49");
  });
  it("returns 50_54 when given a range between 50 and 54", () => {
    expect(AgeGetter(50)).toBe("50_54");
    expect(AgeGetter(51)).toBe("50_54");
    expect(AgeGetter(52)).toBe("50_54");
    expect(AgeGetter(53)).toBe("50_54");
    expect(AgeGetter(54)).toBe("50_54");
  });
  it("returns 55_59 when given a range between 55 and 59", () => {
    expect(AgeGetter(55)).toBe("55_59");
    expect(AgeGetter(56)).toBe("55_59");
    expect(AgeGetter(57)).toBe("55_59");
    expect(AgeGetter(58)).toBe("55_59");
    expect(AgeGetter(59)).toBe("55_59");
  });
  it("returns 60+ when given an age above 59", () => {
    expect(AgeGetter(60)).toBe("60+");
  });
});

describe("FinalScore", () => {
  it("test", () => {
    expect(
      FinalScore(
        pushUpsGetter(50, false),
        false,
        SitUpsGetter(0, true),
        true,
        RunTimeGetter("0912", false),
        false
      )
    ).toBe(96);
  });
});
