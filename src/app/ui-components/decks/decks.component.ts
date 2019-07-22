import { DeckService } from "./../../services/deck.service";
import { Deck } from "../../interfaces/deck";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "decks",
  templateUrl: "./decks.component.html",
  styleUrls: ["./decks.component.css"]
})
export class DecksComponent implements OnInit {
  decks: Deck[];

  constructor(private deckService: DeckService) {}

  ngOnInit() {
    this.getDecks();
    
  }

  getDecks() {
    this.deckService.getDecks().subscribe(decks => (this.decks = decks));
  }
}
