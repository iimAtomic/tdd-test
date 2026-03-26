import type { Card } from "../models/Card.js";
import { HandRank } from "../models/HandRank.js";

export function evaluateHand(cards: Card[]): [HandRank, number[]] {
  const ranks = cards.map((c) => c.rank).sort((a, b) => b - a);
  const suits = cards.map((c) => c.suit);

  const counts: Record<number, number> = {};
  for (const c of cards) {
    counts[c.rank] = (counts[c.rank] || 0) + 1;
  }

  const unique = [...new Set(ranks)].sort((a, b) => b - a);
  const isWheel = JSON.stringify(unique) === JSON.stringify([14, 5, 4, 3, 2]);
  const isSimpleStraight = unique.length === 5 && unique[0]! - unique[4]! === 4;
  const isStraight = isWheel || isSimpleStraight;
  const straightHigh = isWheel ? 5 : unique[0]!;
  const isFlush = new Set(suits).size === 1;

  const entries = Object.entries(counts).map(([rank, count]) => ({
    rank: Number(rank),
    count,
  }));
  entries.sort((a, b) => b.count - a.count || b.rank - a.rank);

  if (isFlush) {
    return [HandRank.FLUSH, ranks];
  }

  if (isStraight) {
    return [HandRank.STRAIGHT, [straightHigh]];
  }

  if (entries[0]?.count === 3) {
    const trip = entries[0].rank;
    const kickers = entries.slice(1).map((e) => e.rank).sort((a, b) => b - a);
    return [HandRank.THREE, [trip, ...kickers]];
  }

  const pairs = entries.filter((e) => e.count === 2).map((e) => e.rank).sort((a, b) => b - a);
  if (pairs.length === 2) {
    const kicker = entries.find((e) => e.count === 1)!.rank;
    return [HandRank.TWO_PAIR, [pairs[0]!, pairs[1]!, kicker]];
  }

  if (pairs.length === 1) {
    const kickers = entries.filter((e) => e.count === 1).map((e) => e.rank).sort((a, b) => b - a);
    return [HandRank.PAIR, [pairs[0]!, ...kickers]];
  }

  return [HandRank.HIGH_CARD, ranks];
}
