import { DecksComponent } from './ui-components/decks/decks.component';
import { MessageService } from './services/message.service';
import { HttpErrorHandler } from './services/http-error-handler.service';
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
  MatMenuModule,
  MatToolbarModule
} from "@angular/material";
import { DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { MainUIComponent } from "./main-ui/main-ui.component";
import { TopNavComponent } from "./ui-components/top-nav/top-nav.component";
import { StudyGraphComponent } from "./ui-components/study-graph/study-graph.component";
import { DeckStatisticsComponent } from './ui-components/deck-statistics/deck-statistics.component';
import { DeckService } from './services/deck.service';
import { FooterComponent } from './ui-components/footer/footer.component';
import { DeckComponent } from './ui-components/decks/deck/deck.component';
import { AppRoutingModule } from './app-routing.module';
import { StudyComponent } from './study-components/study/study.component';

@NgModule({
  declarations: [
    AppComponent,
    MainUIComponent,
    DecksComponent,
    TopNavComponent,
    StudyGraphComponent,
    DeckStatisticsComponent,
    FooterComponent,
    DeckComponent,
    StudyComponent
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
    MatMenuModule,
    HttpClientModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [
    DeckService,
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
