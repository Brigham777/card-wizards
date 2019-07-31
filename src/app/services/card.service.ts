import { Card } from "./../interfaces/card";

import { Deck } from "./../interfaces/deck";

import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import {
  HttpErrorHandler,
  HandleError
} from "./../services/http-error-handler.service";

@Injectable()
export class CardService {
  cardsUrl = "http://localhost:54414/api/Card"; // URL to web api


  constructor(private http: HttpClient) {}

  getCards(id: string): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardsUrl + "/" + id);
  }
}
