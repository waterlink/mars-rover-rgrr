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

    it("Should throw an error when left x is greater or equal the right x", () => {
      expect(
        () => new Map({
          xLeft: 6,
          xRight: 1,
          yTop: 10,
          yBottom: 7
        })
      ).toThrowError("The left x coordinate is greater than the right x");
    });

    it("Should throw an error when bottom y is greater or equal the top y", () => {
      expect(
        () => new Map({
          xLeft: -6,
          xRight: 1,
          yTop: 7,
          yBottom: 10
        })
      ).toThrowError("The bottom y coordinate is greater than the top y");
    });
  });

  describe("Map with obstacles", () => {
    it("Should have the initally an empty list of obstacles", () => {
      const map = new Map({
        xLeft: -6,
        xRight: 20,
        yTop: 10,
        yBottom: 3
      });
      expect(map.obstacles).toEqual([]);
    });
  });
});