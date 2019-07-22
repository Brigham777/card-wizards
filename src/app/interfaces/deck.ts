import { Card } from './card';
export interface Deck {
    id: string;
    deckName: string;
    cardsLearning: string;
    cardsNew: string;
    cardsReview: string;
    cards: Card[];

}