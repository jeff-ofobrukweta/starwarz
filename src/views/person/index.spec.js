import { makeMountRender, reduxify, snapshotify } from "../../test-utils";
import Person from "../person/index";


describe("Fetching Actions from Starwars", () => {
  it("Snapshot Person View Layout", () => {
    const wrapper = makeMountRender(reduxify(Person))()
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });
});