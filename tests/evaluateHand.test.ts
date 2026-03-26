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

test("detect straight (wheel)", () => {
  const hand = [
    { rank: 14, suit: "H" },
    { rank: 5, suit: "D" },
    { rank: 4, suit: "C" },
    { rank: 3, suit: "S" },
    { rank: 2, suit: "H" },
  ];

  const [rank] = evaluateHand(hand);
  expect(rank).toBe(HandRank.STRAIGHT);
});

test("detect flush", () => {
  const hand = [
    { rank: 10, suit: "H" },
    { rank: 8, suit: "H" },
    { rank: 6, suit: "H" },
    { rank: 4, suit: "H" },
    { rank: 2, suit: "H" },
  ];

  const [rank] = evaluateHand(hand);
  expect(rank).toBe(HandRank.FLUSH);
});