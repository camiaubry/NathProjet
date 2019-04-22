import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { Adresse } from '../model/adresse';
import {ClientService} from "../service/client/client.service";
import {AdresseService} from "../service/adresse/adresse.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  hide = true;
  name : string;
  pass : string;

  nom : string;
  prenom :string;
  telephone : string;
  email : string;
  cp : string;
  ville: string;
  pays: string;
  numero: Number;
  rue: string;

  constructor(private clientService : ClientService, private adresseService : AdresseService) { }

  ngOnInit() {
    this.clientService.getAll().subscribe(client=>{
      console.log(client)});
    this.adresseService.getAll().subscribe(adresse=>{
        console.log(adresse)});
  }

  modifier() {
    const client = new Client();
    client.nom = this.nom;
    client.prenom = this.nom;
    client.telephone = this.telephone;
    client.email = this.email;
    const adresse = new Adresse();
    adresse.cp = this.cp;
    adresse.ville = this.ville;
    adresse.pays = this.pays;
    adresse.rue = this.rue;
    this.clientService.update(client).subscribe(client=>{
      console.log(client)});
    this.adresseService.update(adresse).subscribe(adresse=>{
        console.log(adresse)});

    console.log(client);
    console.log(adresse);
  }

}
