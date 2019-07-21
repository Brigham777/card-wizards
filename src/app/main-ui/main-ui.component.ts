import { Deck } from './../objects/deck';
import { CardsComponent } from './../ui-components/cards/cards.component';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.css']
})
export class MainUIComponent implements OnInit {

  decks: Deck[] = [];
  deck1: Deck;
  deck2: Deck;
  deck3: Deck;
  deck4: Deck;

  constructor() { }

  ngOnInit() {
    this.deck1 = new Deck('Kanji', '20', '30', '50');
    this.deck2 = new Deck('Hirigana', '20', '30', '50');
    this.deck3 = new Deck('Katakana', '20', '30', '50');
    this.deck4 = new Deck('Grammar', '20', '30', '50');
    this.fillDecks();
  }

  fillDecks(): void {
    this.decks.push(this.deck1);
    this.decks.push(this.deck2);
    this.decks.push(this.deck3);
    this.decks.push(this.deck4);
  }

}
