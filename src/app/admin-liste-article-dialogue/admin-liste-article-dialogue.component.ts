import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admin-liste-article-dialogue',
  templateUrl: './admin-liste-article-dialogue.component.html',
  styleUrls: ['./admin-liste-article-dialogue.component.css']
})
export class AdminListeArticleDialogueComponent implements OnInit {

  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'En attente'},
    {value: 'pizza-1', viewValue: 'Accepter'},
    {value: 'tacos-2', viewValue: 'Refuser'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
