# Poker Evaluator (TDD)

Etudiant : VEGBA LUX

## Recap

Le projet suit une approche TDD pour evaluer des mains de poker.

Fonctionnalites implementees :
- Evaluation de main 5 cartes via `evaluateHand`
- Detection de : `HIGH_CARD`, `PAIR`, `TWO_PAIR`, `THREE`, `STRAIGHT` (dont wheel A-5), `FLUSH`, `FULL_HOUSE`, `FOUR`, `STRAIGHT_FLUSH`
- Selection de la meilleure main sur 7 cartes via `bestHand`
- Comparaison de joueurs via `comparePlayers`
- Gestion des egalites (tie) quand le board joue pour plusieurs joueurs

Tests en place :
- `tests/evaluateHand.test.ts`
- `tests/bestHand.test.ts`
- `tests/comparePlayers.test.ts`

## Lancer les tests

Depuis la racine du projet :

1. Installer les dependances

```bash
npm install
```

2. Lancer tous les tests (une seule execution)

```bash
npx vitest run
```

3. Lancer les tests en mode watch (re-execution auto)

```bash
npx vitest
```