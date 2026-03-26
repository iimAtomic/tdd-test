import { Card } from "../models/Card";
import { HandRank } from "../models/HandRank";

export function evaluateHand(cards: Card[]): [HandRank, number[]] {

  // 👇 CODE NAÏF VOLONTAIRE
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      if (cards[i].rank === cards[j].rank) {
        return [HandRank.PAIR, []];
      }
    }
  }

  return [HandRank.HIGH_CARD, []];
}