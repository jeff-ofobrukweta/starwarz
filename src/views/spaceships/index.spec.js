import { makeMountRender, reduxify, snapshotify } from "../../test-utils";
import Spaceship from "../spaceships/index";


describe("Fetching Actions from Starwars", () => {
  it("Snapshot Spaceships Layout", () => {
    const wrapper = makeMountRender(reduxify(Spaceship))()
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });
});