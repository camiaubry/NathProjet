import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort,MatDialog} from '@angular/material';
import { AdminListeDialogueComponent } from '../admin-liste-dialogue/admin-liste-dialogue.component';
import { Commande } from '../model/commande';
import { CommandeService } from '../service/commande/commande.service';


@Component({
  selector: 'app-admin-liste-commande',
  templateUrl: './admin-liste-commande.component.html',
  styleUrls: ['./admin-liste-commande.component.css']
})
export class AdminListeCommandeComponent implements OnInit {
  displayedColumns: string[] = ['commande', 'client', 'date','statusSuivi','numeroSuivi','MAJ'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<Commande>();

  constructor(public dialog: MatDialog, public commandeService: CommandeService) {}

  openDialog() {
    this.dialog.open(AdminListeDialogueComponent, {
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.commandeService.getAll().subscribe(data => {
      this.dataSource.data = data;
      console.log(data)
    })
  }
}