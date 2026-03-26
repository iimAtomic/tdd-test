import type { Card } from "../models/Card.js";
import { bestHand } from "../evaluator/bestHand.js";
import { compareScore } from "../utils/compareScore.js";

export function comparePlayers(board: Card[], players: Card[][]): number[] {
  const results = players.map((p) => bestHand([...board, ...p]));

  const best = results.reduce((a, b) => (compareScore(a.score, b.score) > 0 ? a : b));

  return results
    .map((r, idx) => ({ r, idx }))
    .filter(({ r }) => compareScore(r.score, best.score) === 0)
    .map(({ idx }) => idx);
}
