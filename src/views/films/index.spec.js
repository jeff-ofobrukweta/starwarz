import Films from "./index";
import { makeMountRender, reduxify, snapshotify } from "../../test-utils/index";




describe("Fetching Actions from Starwars", () => {
  it("Snapshot Films View Layout", () => {
    const wrapper = makeMountRender(reduxify(Films))()
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });
});


// describe("React Router Test", () => {
//   test('valid path should not redirect to 404', () => {

//   });
// })