import { Component, OnInit } from '@angular/core';
import { DetailArticleDialogueComponent } from '../detail-article-dialogue/detail-article-dialogue.component';
import { MatDialog } from '@angular/material';
import { AnnulerCommandeDialogueComponent } from '../annuler-commande-dialogue/annuler-commande-dialogue.component';

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css']
})
export class MescommandesComponent {
  panelOpenState = false;


constructor(public dialog: MatDialog) {}

openDialog() {
  this.dialog.open(AnnulerCommandeDialogueComponent, {
  });
}
}
