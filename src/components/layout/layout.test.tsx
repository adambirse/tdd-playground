import { shallow } from "enzyme";
import React from "react";

import { Layout } from "./layout";

describe("Layout", () => {
  it("does render", () => {
    shallow(<Layout title={"Page title"} />);
  });
  it("renders correct title", () => {
    const wrap = shallow(<Layout title={"Page title"} />);
    expect(wrap.find("title").text()).toEqual("Page title");
  });
  it("renders children", () => {
    const wrap = shallow(
      <Layout title={"Page title"}>
        <div>content</div>
      </Layout>
    );
    expect(wrap.find("div").text()).toEqual("content");
  });
});
export {};
