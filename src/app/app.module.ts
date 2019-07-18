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
  MatNativeDateModule
} from "@angular/material";
import { DragDropModule} from '@angular/cdk/drag-drop';

import { AppComponent } from "./app.component";
import { MainUIComponent } from "./main-ui/main-ui.component";
import { CardsComponent } from "./ui-components/cards/cards.component";
import { TopNavComponent } from "./ui-components/top-nav/top-nav.component";
import { StudyGraphComponent } from "./ui-components/study-graph/study-graph.component";

@NgModule({
  declarations: [
    AppComponent,
    MainUIComponent,
    CardsComponent,
    TopNavComponent,
    StudyGraphComponent
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
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
