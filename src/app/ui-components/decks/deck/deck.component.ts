import { Component, OnInit, Input } from "@angular/core";
import { Deck } from "src/app/interfaces/deck";

@Component({
  selector: "deck",
  templateUrl: "./deck.component.html",
  styleUrls: ["./deck.component.css"]
})
export class DeckComponent implements OnInit {
  @Input("deck") deck: Deck;

  headerDividerInset: boolean = true;
  
  constructor() {}

  ngOnInit() {}

  changeDivider(): void {
    if (this.headerDividerInset) {
      this.headerDividerInset = false;
    } else {
      this.headerDividerInset = true;
    }
  }
}
