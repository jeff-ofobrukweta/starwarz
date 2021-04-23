import { makeMountRender, reduxify, snapshotify } from "../../test-utils";
import Card from "../card/index";


describe("Card Component Unit Testing", () => {
  it("Snapshot Card Component", () => {
    const wrapper = makeMountRender(reduxify(Card))()
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });
  it("Check Card Props is Valid", () => {
    const item = {
      count: 6,
      next: null,
      previous: null,
      results: [
        {
          title: "A New Hope",
          created: "2014-12-12T11:26:24.656000Z",
          director: "Irvin Kershner",
          edited: "2014-12-15T13:07:53.386000Z",
          episode_id: 5,
          producer: "Gary Kurtz, Rick McCallum",
          release_date: "1980-05-17",
        }
      ]
    }
    
    const wrapper = makeMountRender(reduxify(Card), item)()
    expect(wrapper.prop("item")).toBe(item);
  });
});