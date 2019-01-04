import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mpoublier',
  templateUrl: './mpoublier.component.html',
  styleUrls: ['./mpoublier.component.css']
})
export class MpoublierComponent implements OnInit {

  emailError: boolean=false
  emailConfirm: boolean=false

  constructor() {}

  ngOnInit() {
  }

  valider() {
    this.emailError=true;
  }
}
