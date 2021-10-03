import { filterLowerCase, filterUpperCase, greeting } from "./greeting";

describe("Greeting tests", () => {
  it("hello bob", () => {
    expect(greeting("Bob")).toEqual("Hello, Bob.");
  });
  it("hello, default with value", () => {
    expect(greeting()).toEqual("Hello, my friend.");
  });
  it("shout if name is upper case", () => {
    expect(greeting("JIM")).toEqual("HELLO, JIM!");
  });
  it("say hello to two people", () => {
    expect(greeting("Bob", "Jim")).toEqual("Hello, Bob and Jim.");
  });
  it("say hello to more than two people", () => {
    expect(greeting("Bob", "Jim", "Amy")).toEqual("Hello, Bob, Jim and Amy.");
  });
  it("say hello to many people", () => {
    expect(greeting("Bob", "Jim", "Amy", "Francis", "Phoebe")).toEqual(
      "Hello, Bob, Jim, Amy, Francis and Phoebe."
    );
  });
  it("say hello separately to shouters and quiet people", () => {
    expect(greeting("Amy", "BRIAN", "Charlotte")).toEqual(
      "Hello, Amy and Charlotte. AND HELLO BRIAN!"
    );
  });
  it("say hello separately to many shouters and many quiet people", () => {
    expect(greeting("Amy", "BRIAN", "Charlotte","DAVID", "Francis", "FRANK")).toEqual(
      "Hello, Amy, Charlotte and Francis. AND HELLO BRIAN, DAVID AND FRANK!"
    );
  });
});

describe("Filter", () => {
  it("filter all uppercase", () => {
    expect(filterUpperCase("lowercase", "UPPERCASE", "UPPERCASETOO")).toEqual([
      "UPPERCASE",
      "UPPERCASETOO",
    ]);
  });

  it("filter all lowercase", () => {
    expect(filterLowerCase("lowercase", "lowercase2", "UPPERCASE")).toEqual([
      "lowercase",
      "lowercase2",
    ]);
  });
});
