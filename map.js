class Map {

  constructor({xLeft, xRight, yTop, yBottom}) {
    this.enforceCoordinatesAreCorrect({xLeft, xRight, yTop, yBottom})
    this.xLeft = xLeft;
    this.xRight = xRight;
    this.yTop = yTop;
    this.yBottom = yBottom;
    this.obstacles = [];
  }

  enforceCoordinatesAreCorrect({xLeft, xRight, yTop, yBottom}) {
    if (typeof xLeft !== "number" || typeof xRight !== "number" || typeof yTop !== "number" || typeof yBottom !== "number") {
      throw new Error("Not all coordinates provided");
    }
    if (xLeft >= xRight) {
      throw new Error("The left x coordinate is greater than the right x");
    }
    if(yTop <= yBottom) {
      throw new Error("The bottom y coordinate is greater than the top y");
    }
  }

}

module.exports = {
  Map
};