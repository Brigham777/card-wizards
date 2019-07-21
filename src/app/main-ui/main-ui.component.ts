import { DeckService } from './../services/deck.service';
import { Deck } from './../interfaces/deck';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.css']
})
export class MainUIComponent implements OnInit {

  decks: Deck[];
  
  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.getDecks();
  }

  getDecks() {
    this.deckService.getDecks()
      .subscribe(decks => (this.decks = decks));
  }






// for dragging
  /* drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.decks, event.previousIndex, event.currentIndex);
  } */

}
