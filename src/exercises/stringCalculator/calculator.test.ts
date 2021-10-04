import { add } from "./calculator";

describe("String calculator", () => {
  it("handle empty string", () => {
    expect(add("")).toEqual(0);
  });
  it("handle single number string", () => {
    expect(add("1")).toEqual(1);
  });
  it("handle single number string", () => {
    expect(add("1,2")).toEqual(3);
  });
});
