import { HandRank } from "../models/HandRank.js";

export function compareScore(a: [HandRank, number[]], b: [HandRank, number[]]): number {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }

  const maxLen = Math.max(a[1].length, b[1].length);
  for (let i = 0; i < maxLen; i += 1) {
    const av = a[1][i] ?? 0;
    const bv = b[1][i] ?? 0;
    if (av !== bv) {
      return av - bv;
    }
  }

  return 0;
}
