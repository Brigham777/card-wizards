export interface Card {
    cardID: number;
    deckID: number;
    learningStage: number;
    dueDate: Date;
    cardValues: CardValue[];
}

export interface CardValue {
    value: string;
    valueTitle: string;
    valueType: number;
    onFront: boolean;
    position: number;
    fontSize: number;
}