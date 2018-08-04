
const {updateDisplayedHitPins, displayFinalScore, pushScoreToState, updateScore} = require('./main');

describe("Bowling", () => {
  it("should updateDisplayedHitPins", () => {
    const el = document.createElement("div");
    updateDisplayedHitPins(el, 3);
    expect(el.innerHTML).toBe("3");
  });
});

describe("Bowling", () => {
  it("should displayFinalScore", () => {
    const el = document.createElement("div");
    displayFinalScore(el, 99);
    expect(el.innerHTML).toBe("Your final score is 99, bravo!");
  });
});

describe("Bowling", () => {
  it("should pushScoreToState", () => {
    const el = [];
    pushScoreToState(el, 99);
    expect(el).toEqual([99]);
  });
});

describe("Bowling", () => {
  it("should updateScore", () => {
    const el = document.createElement("div");
    let state = {total: 0}
    updateScore(el, [2, 3, 4, 1]);
    expect(el.innerHTML).toBe("Score: 10");
  });
});
