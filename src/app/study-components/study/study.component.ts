import { Deck } from './../../interfaces/deck';
import { Card } from './../../interfaces/card';
import { Component, OnInit } from '@angular/core';
import { DeckService } from "./../../services/deck.service";
import { ActivatedRoute } from "@angular/router";
import { getDefaultService } from 'selenium-webdriver/opera';

@Component({
  selector: 'study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {

  decks: Deck[];
  cards: Card[];
  id: string;

  constructor(private deckService: DeckService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getDecks();
    console.log(this.cards[1])
    
  }

  getDecks() {
    this.deckService.getDecks().subscribe(decks => (
      this.decks = decks,
      this.decks[0].cards = this.cards
      ));
  }

}
