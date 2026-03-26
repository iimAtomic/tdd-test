import type { Card } from "../models/Card.js";
import { HandRank } from "../models/HandRank.js";

export function evaluateHand(cards: Card[]): [HandRank, number[]] {

  const counts: Record<number, number> = {};

  const pairCount = Object.values(counts).filter(c => c === 2).length;

if (pairCount === 2) {
  return [HandRank.TWO_PAIR, []];
}

  for (const c of cards) {
    counts[c.rank] = (counts[c.rank] || 0) + 1;
  }

  if (Object.values(counts).includes(2)) {
    return [HandRank.PAIR, []];
  }

  return [HandRank.HIGH_CARD, []];
}