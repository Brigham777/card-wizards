import { Card, CardValue } from "./../../interfaces/card";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "study-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  cards: Card[];
  curCard: number;
  curCardValues: CardValue[];
  frontShowing: boolean;

  constructor() {}

  ngOnInit() {
    this.cards = [
      {
        cardID: 1,
        deckID: 1,
        learningStage: 2,
        dueDate: new Date("2019-01-16"),
        cardValues: [
          {
            value: "test1",
            valueTitle: "front",
            valueType: 1,
            onFront: true,
            position: 0,
            fontSize: 8
          },
          {
            value: "test2",
            valueTitle: "back1",
            valueType: 1,
            onFront: false,
            position: 1,
            fontSize: 7
          },
          {
            value: "test3",
            valueTitle: "back2",
            valueType: 1,
            onFront: false,
            position: 2,
            fontSize: 8
          }
        ]
      },
      {
        cardID: 2,
        deckID: 1,
        learningStage: 1,
        dueDate: new Date("2019-01-16"),
        cardValues: [
          {
            value: "test1.1",
            valueTitle: "front",
            valueType: 1,
            onFront: true,
            position: 0,
            fontSize: 4
          },
          {
            value: "test2.2",
            valueTitle: "back1",
            valueType: 1,
            onFront: false,
            position: 1,
            fontSize: 3
          },
          {
            value: "test3.3",
            valueTitle: "back2",
            valueType: 1,
            onFront: false,
            position: 2,
            fontSize: 2
          }
        ]
      }
    ];

    this.curCard = 0;
    this.curCardValues = this.cards[this.curCard].cardValues;
    this.frontShowing = true;
  }

  flipCard(): void {
    this.frontShowing = false;
  }

  rateCard(): void {
    this.curCard++;
    this.frontShowing = true;
    this.curCardValues = this.cards[this.curCard].cardValues;
  }
}
