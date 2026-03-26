import type { Card } from "../models/Card.js";
import { combinations } from "../utils/combinations.js";
import { compareScore } from "../utils/compareScore.js";
import { evaluateHand } from "./evaluateHand.js";

export function bestHand(cards: Card[]) {
  const combos = combinations(cards, 5);
  let best = evaluateHand(combos[0]!);

  for (const c of combos.slice(1)) {
    const score = evaluateHand(c);
    if (compareScore(score, best) > 0) {
      best = score;
    }
  }

  return { score: best };
}
