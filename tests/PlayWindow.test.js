import React from "react";
import PlayWindow from "../src/components/PlayWindow";
import renderer from "react-test-renderer";

describe("PlayWindow", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<PlayWindow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
