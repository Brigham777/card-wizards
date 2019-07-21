import { Deck } from './../../objects/deck';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input('deck') deck: Deck;
  headerDividerInset: boolean = true;

  deckName: string;
  cardsLearning: string;
  cardsNew: string;
  cardsReview: string;

  constructor() { }

  ngOnInit() {
    this.deckName = this.deck.deckName;
    this.cardsLearning = this.deck.cardsLearning;
    this.cardsNew = this.deck.cardsNew;
    this.cardsReview = this.deck.cardsReview;
  }

  consoleLog(): void {
    console.log('this');
  }

  changeDivider(): void {
    console.log('this');
    if (this.headerDividerInset) {
      this.headerDividerInset = false;
    }
    else {
      this.headerDividerInset = true;
    }
  }
}
