import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Référence de commande - 001 / 02-02-2019',
    children: [
      {name: 'Date de la commande : 02-02-2019'},
      {name: 'Produit : Body - stars wars'},
      {name: 'Status : en cours de livraison'},
      {name: 'Numéro de suivi : 12345678900'},
      {name: 'Adresse : 2 rue des champs'},

    ]
  },
];

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css']
})
export class MescommandesComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
