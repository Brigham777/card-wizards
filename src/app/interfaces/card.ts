export interface Card {
    cardID: string;
    deckID: string;
    learningStage: string;
    dueDate: Date;
    cardValues: CardValue[];
}

export interface CardValue {
    value: string;
    valueTitle: string;
    valueType: number;
}