import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admin-liste-dialogue',
  templateUrl: './admin-liste-dialogue.component.html',
  styleUrls: ['./admin-liste-dialogue.component.css']
})

export class AdminListeDialogueComponent implements OnInit {

  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'En attente'},
    {value: 'pizza-1', viewValue: 'Accepter'},
    {value: 'tacos-2', viewValue: 'Refuser'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
