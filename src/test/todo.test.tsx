import {shallow } from "enzyme";
import React from "react";

import TODO from "../pages/todo";

describe("TODO page", () => {
  it("does render", () => {
    shallow(<TODO />);
  });
  it("shows Heading", () => {
    const wrap = shallow(<TODO />);
    expect(wrap.find("h1").text()).toEqual("My TODOS");
  });
  it("shows todo items", () => {
    const wrap = shallow(<TODO />);
    expect(wrap.find("li").length).toEqual(3);
  });
});