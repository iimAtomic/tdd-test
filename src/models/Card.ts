export type Suit = 'H' | 'D' | 'C' | 'S';

export interface Card {
  rank: number;
  suit: Suit;
}