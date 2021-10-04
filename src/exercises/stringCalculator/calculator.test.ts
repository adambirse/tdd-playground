import { add } from "./calculator";

describe("String calculator", () => {
  it("handle empty string", () => {
    expect(add("")).toEqual(0);
  });
});
