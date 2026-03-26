import { type Card } from "../models/Card.js";
import { HandRank } from "../models/HandRank.js";

export function evaluateHand(cards: Card[]): [HandRank, number[]] {
  return [HandRank.HIGH_CARD, []];
}