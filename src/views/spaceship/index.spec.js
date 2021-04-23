import { makeMountRender, reduxify, snapshotify } from "../../test-utils";
import Spaceship from "../spaceship/index";


describe("Fetching Actions from Starwars", () => {
  it("Snapshot Spaceship Layout", () => {
    const wrapper = makeMountRender(reduxify(Spaceship))()
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });
});