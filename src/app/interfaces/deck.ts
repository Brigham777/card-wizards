import { Card } from './card';
export interface Deck {
    id: number;
    deckName: string;
    cardsLearning: number;
    cardsNew: number;
    cardsReview: number;
}