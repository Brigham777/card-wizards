import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule
} from "@angular/material";
import { DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

import { AppComponent } from "./app.component";
import { MainUIComponent } from "./main-ui/main-ui.component";
import { CardsComponent } from "./ui-components/cards/cards.component";
import { TopNavComponent } from "./ui-components/top-nav/top-nav.component";
import { StudyGraphComponent } from "./ui-components/study-graph/study-graph.component";
import { DeckStatisticsComponent } from './ui-components/deck-statistics/deck-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    MainUIComponent,
    CardsComponent,
    TopNavComponent,
    StudyGraphComponent,
    DeckStatisticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
