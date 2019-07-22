import { Card } from './card';
export interface Deck {
    deckName: string;
    cardsLearning: string;
    cardsNew: string;
    cardsReview: string;
    cards: Card[];

}