import { makeMountRender, reduxify, snapshotify } from "../../test-utils";
import People from "../people/index";


describe("Fetching Actions from Starwars", () => {
  it("Snapshot People View Layout", () => {
    const wrapper = makeMountRender(reduxify(People))()
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });
});