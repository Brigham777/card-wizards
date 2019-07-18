import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatListModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainUIComponent } from './main-ui/main-ui.component';
import { CardsComponent } from './ui-components/cards/cards.component';
import { TopNavComponent } from './ui-components/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainUIComponent,
    CardsComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
