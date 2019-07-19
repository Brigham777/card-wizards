import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  headerDividerInset: boolean = true;

  constructor() { }

  ngOnInit() {
  }


  consoleLog(): void{
    console.log('this');
  }
  changeDivider(): void{
    console.log('this');
    if (this.headerDividerInset){
      this.headerDividerInset = false;
    }
    else{
      this.headerDividerInset = true;
    }
    
  }




}
