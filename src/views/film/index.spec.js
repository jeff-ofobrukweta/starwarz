import { makeMountRender, reduxify, snapshotify } from "../../test-utils";
import Film from "../film/index";


describe("Fetching Actions from Starwars", () => {
  it("Snapshot Film View Layout", () => {
    const wrapper = makeMountRender(reduxify(Film))()
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });
});