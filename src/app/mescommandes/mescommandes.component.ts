import { Component, OnInit } from '@angular/core';
import { DetailArticleDialogueComponent } from '../detail-article-dialogue/detail-article-dialogue.component';
import { MatDialog } from '@angular/material';
import { AnnulerCommandeDialogueComponent } from '../annuler-commande-dialogue/annuler-commande-dialogue.component';
import { CommandeService } from '../service/commande/commande.service';
import { ClientService } from '../service/client/client.service';

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css']
})
export class MescommandesComponent implements OnInit {
  panelOpenState = false;
  listeCommandes = [];


  
constructor(public dialog: MatDialog, private commandeService: CommandeService) {}

ngOnInit() {
  this.commandeService.getAll().subscribe(data => {
    this.listeCommandes = data;
    console.log(data)

  })
}


openDialog() {
  this.dialog.open(AnnulerCommandeDialogueComponent, {
  });
}
}
