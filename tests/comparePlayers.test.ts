import { comparePlayers } from "../src/game/comparePlayers";

test("player 1 wins", () => {
  const board = [
    { rank: 14, suit: "H" },
    { rank: 14, suit: "D" },
    { rank: 7, suit: "C" },
    { rank: 6, suit: "S" },
    { rank: 2, suit: "H" },
  ];
  const p1 = [
    { rank: 14, suit: "C" },
    { rank: 9, suit: "D" },
  ];
  const p2 = [
    { rank: 13, suit: "S" },
    { rank: 12, suit: "C" },
  ];

  const winners = comparePlayers(board, [p1, p2]);

  expect(winners.length).toBe(1);
  expect(winners[0]).toBe(0);
});

test("tie with board plays", () => {
  const board = [
    { rank: 14, suit: "H" },
    { rank: 13, suit: "D" },
    { rank: 12, suit: "C" },
    { rank: 11, suit: "S" },
    { rank: 10, suit: "H" },
  ];
  const p1 = [
    { rank: 2, suit: "D" },
    { rank: 3, suit: "D" },
  ];
  const p2 = [
    { rank: 4, suit: "C" },
    { rank: 5, suit: "C" },
  ];

  const winners = comparePlayers(board, [p1, p2]);
  expect(winners).toEqual([0, 1]);
});
