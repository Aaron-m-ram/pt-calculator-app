import { describe, expect, it } from "@jest/globals";
import { pushUpsGetter, SitUpsGetter } from "./Running";

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
  it("returns 6 points when given 40 situps", () => {
    expect(SitUpsGetter(40, false)).toBe(6);
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

// describe("RunningGetter", () => {
//   it("returns 0 when given a score above max time", () => {

//   })
// });
