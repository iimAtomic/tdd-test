import { bestHand } from "../src/evaluator/bestHand";
import { HandRank } from "../src/models/HandRank";

test("select best hand from 7 cards", () => {
  const cards = [
    { rank: 10, suit: "H" },
    { rank: 10, suit: "D" },
    { rank: 10, suit: "C" },
    { rank: 7, suit: "S" },
    { rank: 7, suit: "H" },
    { rank: 2, suit: "H" },
    { rank: 3, suit: "D" },
  ];

  const result = bestHand(cards);
  expect(result.score[0]).toBe(HandRank.FULL_HOUSE);
});
