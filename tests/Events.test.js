import React from "react";
import Events from "../src/components/Events";
import renderer from "react-test-renderer";
import { mockEventList } from "./mockEventsResults";

describe("Events", () => {
  it("renders correctly when an eventList is supplied", () => {
    const tree = renderer.create(<Events eventList={mockEventList} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders nothing when the result list is empty", () => {
    const tree = renderer.create(<Events eventList={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
