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
export class DeckService {
  decksUrl = "http://localhost:54414/api/Deck"; // URL to web api


  constructor(private http: HttpClient) {}

  getDecks(): Observable<Deck[]> {
    return this.http.get<Deck[]>(this.decksUrl);
  }

  postDeck(file: File) {
    const fd = new FormData();
    fd.append(file.type, file, file.name);
    this.http.post(this.decksUrl + "/AddDeck", fd)
    .subscribe(res => {
      console.log(res)
    });
  }
}
