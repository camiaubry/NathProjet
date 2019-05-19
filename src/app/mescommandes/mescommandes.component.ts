import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AnnulerCommandeDialogueComponent} from '../annuler-commande-dialogue/annuler-commande-dialogue.component';
import {CommandeService} from '../service/commande/commande.service';

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css']
})
export class MescommandesComponent implements OnInit {
  panelOpenState = false;
  listeCommandes = [];


  constructor(public dialog: MatDialog, private commandeService: CommandeService) {
  }

  ngOnInit() {
    this.commandeService.getAll().subscribe(data => {
      this.listeCommandes = data;
    })
  }


  openDialog() {
    this.dialog.open(AnnulerCommandeDialogueComponent, {});
  }


}
