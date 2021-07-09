import { PushUpsGetter } from "./Running";

describe("PushUpsGetter", () => {
  it("returns 1 point when given 30 pushups", () => {
    expect(PushUpsGetter(30)).toBe(1);
  });
  it("returns 20 points when given 67 pushups", () => {
    expect(PushUpsGetter(67)).toBe(20);
  });
  it("returns 0 points when given < 30 pushups", () => {
    expect(PushUpsGetter(29)).toBe(0);
  });
  it("returns 20 points when given > 67 pushups", () => {
    expect(PushUpsGetter(68)).toBe(20);
  });
  it("returns 0 points when given 0 pushups", () => {
    expect(PushUpsGetter(0)).toBe(0);
  });
  it("returns 0 points when given null pushups", () => {
    expect(PushUpsGetter(null)).toBe(0);
  });
  it("returns 0 points when given undefined pushups", () => {
    expect(PushUpsGetter(undefined)).toBe(0);
  });
});
