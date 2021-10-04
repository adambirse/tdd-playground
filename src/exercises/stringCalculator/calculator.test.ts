import { add } from "./calculator";

describe("String calculator", () => {
  it("handle empty string", () => {
    expect(add("")).toEqual(0);
  });
  it("handle single number string", () => {
    expect(add("1")).toEqual(1);
  });
  it("handle two number string", () => {
    expect(add("1,2")).toEqual(3);
  });
  it("handle many numbers", () => {
    expect(add("1,2,5,6,1")).toEqual(15);
  });
  it("split on new lines", () => {
    expect(add(`1\n2,3`)).toEqual(6);
  });
  it("split on custom delimiter", () => {
    expect(add(`//;\n1;2`)).toEqual(3);
  });
  it("split on custom delimiter many numbers", () => {
    expect(add(`//;\n1;2;44;2`)).toEqual(49);
  });
  it("ignore numbers bigger than 1000 ", () => {
    expect(add("1,2,1000,5,6,1,1000")).toEqual(15);
  });
});
