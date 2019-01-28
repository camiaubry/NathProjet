import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-admin-liste-commande',
  templateUrl: './admin-liste-commande.component.html',
  styleUrls: ['./admin-liste-commande.component.css']
})
export class AdminListeCommandeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','prout','prout2'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
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

];