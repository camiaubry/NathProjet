import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort,MatDialog} from '@angular/material';
import { AdminListeDialogueComponent } from '../admin-liste-dialogue/admin-liste-dialogue.component';


@Component({
  selector: 'app-admin-liste-commande',
  templateUrl: './admin-liste-commande.component.html',
  styleUrls: ['./admin-liste-commande.component.css']
})
export class AdminListeCommandeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','prout','prout2'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AdminListeDialogueComponent, {
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  prout:string;
  prout2:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', prout:'prout', prout2:'prout'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', prout:'prout', prout2:'prout'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', prout:'prout', prout2:'prout'},
  {position: 4, name: 'Lithium', weight: 6.941, symbol: 'Li', prout:'prout', prout2:'prout'},
  {position: 5, name: 'Lithium', weight: 6.941, symbol: 'Li', prout:'prout', prout2:'prout'},
  {position: 6, name: 'Lithium', weight: 6.941, symbol: 'Li', prout:'prout', prout2:'prout'},
  {position: 7, name: 'Lithium', weight: 6.941, symbol: 'Li', prout:'prout', prout2:'prout'},
  {position: 8, name: 'Lithium', weight: 6.941, symbol: 'Li', prout:'prout', prout2:'prout'},
];

