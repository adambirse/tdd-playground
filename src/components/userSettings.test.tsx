import { shallow } from "enzyme";
import React from "react";

import { UserSettings } from "./userSettings";

const options = [
  { id: "1", name: "Foo" },
  { id: "2", name: "Bar" },
  { id: "3", name: "Baz" },
];

const savedUserPrefs = ["2", "3"];

const onSave = jest.fn().mockResolvedValue(true);

describe("UserSettings", () => {
  it("should render without throwing an error", function () {
    shallow(<UserSettings preferences={savedUserPrefs} onSave={onSave} />);
  });
  it("should render labels", () => {
    const wrap = shallow(
      <UserSettings
        options={options}
        preferences={savedUserPrefs}
        onSave={onSave}
      />
    );
    const labels = wrap.find("label");
    expect(labels.length).toBe(3);
  });
  it("should render correct label content", () => {
    const wrap = shallow(
      <UserSettings
        options={options}
        preferences={savedUserPrefs}
        onSave={onSave}
      />
    );
    const labels = wrap.find("label");
    expectCheckbox(labels.at(0), "1", "Foo", false);
    expectCheckbox(labels.at(1), "2", "Bar", true);
    expectCheckbox(labels.at(2), "3", "Baz", true);
  });

  it("should save user preferences", () => {
    const wrap = shallow(
      <UserSettings
        options={options}
        preferences={savedUserPrefs}
        onSave={onSave}
      />
    );
    const labels = wrap.find("label");
    expectCheckboxProp(labels.at(0), "checked", false);
    expectCheckboxProp(labels.at(1), "checked", true);
    expectCheckboxProp(labels.at(2), "checked", true);
  });

  it("should select checkbox on click", () => {
    const wrap = shallow(
      <UserSettings
        options={options}
        preferences={savedUserPrefs}
        onSave={onSave}
      />
    );
    expect(
      wrap.find('input[type="checkbox"][value="1"]').prop("checked")
    ).toEqual(false);
    wrap.find('input[type="checkbox"][value="1"]').simulate("change", {
      target: {
        value: "1",
        checked: true,
      },
    });
    expect(
      wrap.find('input[type="checkbox"][value="1"]').prop("checked")
    ).toEqual(true);
  });

  it("should deselect checkbox on click", () => {
    const wrap = shallow(
      <UserSettings
        options={options}
        preferences={savedUserPrefs}
        onSave={onSave}
      />
    );
    expect(
      wrap.find('input[type="checkbox"][value="2"]').prop("checked")
    ).toEqual(true);
    wrap.find('input[type="checkbox"][value="2"]').simulate("change", {
      target: {
        value: "2",
        checked: false,
      },
    });
    expect(
      wrap.find('input[type="checkbox"][value="2"]').prop("checked")
    ).toEqual(false);
  });
  it("saves the user's settings on submit", () => {
    // 1 is saved
    const savedUserPrefs = ["1"];

    const wrap = shallow(
      <UserSettings
        options={options}
        preferences={savedUserPrefs}
        onSave={onSave}
      />
    );
    // Check option 3
    wrap.find('input[type="checkbox"][value="3"]').simulate("change", {
      target: {
        value: "3",
        checked: true,
      },
    });
    // 1 and 3 are checked
    wrap.find("form").simulate("submit", {
      preventDefault: jest.fn(),
    });
    // Save is called with the correct arguments
    expect(onSave).toHaveBeenCalledWith(["1", "3"]);
  });

  it("shows a saving message", async () => {
    const savedUserPrefs = [];
    const onSave = jest.fn().mockResolvedValue(true);
    const wrap = shallow(
      <UserSettings
        options={options}
        preferences={savedUserPrefs}
        onSave={onSave}
      />
    );

    expect(wrap.find("button").text()).toEqual("Save");

    wrap.find("form").simulate("submit", {
      preventDefault: jest.fn(),
    });

    expect(wrap.find("button").text()).toEqual("Saving...");

    // Flush promise queue
    await Promise.resolve();

    expect(wrap.find("button").text()).toEqual("Save");
  });
});

function expectCheckbox(checkbox, id, name, checked) {
  expectCheckboxProp(checkbox, "value", id);
  expectCheckboxProp(checkbox, "name", name);
  expectCheckboxProp(checkbox, "checked", checked);
}

function expectCheckboxProp(checkbox, prop, value) {
  expect(checkbox.find('[type="checkbox"]').prop(prop)).toEqual(value);
}
