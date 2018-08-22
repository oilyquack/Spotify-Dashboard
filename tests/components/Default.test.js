import React from "react";
import App from "../../src/components/App";
import { shallow, mount, render } from "enzyme"; // import shallow renderer from enzyme

describe("App component", () => {
  it('starts with connected state of ""', () => {
    const wrapper = shallow(<App />); // perform shallow render of App
    const connected = wrapper.state("connected");
    expect(connected).toEqual("");
  });
});
