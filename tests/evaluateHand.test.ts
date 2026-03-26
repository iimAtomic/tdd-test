import { evaluateHand } from "../src/evaluator/evaluateHand";
import { HandRank } from "../src/models/HandRank";

test("detect high card", () => {
  const hand = [
    { rank: 14, suit: 'H' },
    { rank: 10, suit: 'D' },
    { rank: 7, suit: 'C' },
    { rank: 5, suit: 'S' },
    { rank: 2, suit: 'H' },
  ];

  const [rank] = evaluateHand(hand);
  expect(rank).toBe(HandRank.HIGH_CARD);
});