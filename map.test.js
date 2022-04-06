const {Map} = require("./map");
describe("Map", () => {

  it("Should create map with correct coordinates", () => {
    const map = new Map({
      xLeft: -6,
      xRight: 20,
      yTop: 10,
      yBottom: 3
    });
    expect(map.xLeft).toEqual(-6);
    expect(map.xRight).toEqual(20);
    expect(map.yTop).toEqual(10);
    expect(map.yBottom).toEqual(3);
  });

  describe("Map validation", () => {
    it("Should throw an error when one of coordinates is not provided", () => {
      expect(() => new Map({ xLeft : 30 })).toThrowError("Not all coordinates provided");
    });
  });
});