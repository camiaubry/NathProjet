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

  client = new Client();
  adresse = new Adresse();

  constructor(private clientService : ClientService, private adresseService : AdresseService) { }

  ngOnInit() {
    this.clientService.getClient(1).subscribe(client=>{
      this.client = client; })
    this.adresseService.getAdresse(1).subscribe(adresse=>{
      this.adresse = adresse;
    })
  }

  modifier() {
    this.client.nom = this.nom;
    this.client.prenom = this.nom;
    this.client.telephone = this.telephone;
    this.client.email = this.email;

    this.adresse.cp = this.cp;
    this.adresse.ville = this.ville;
    this.adresse.pays = this.pays;
    this.adresse.rue = this.rue;
    this.clientService.update(this.client).subscribe(client=>{
      console.log(client)});
    this.adresseService.update(this.adresse).subscribe(adresse=>{
        console.log(adresse)});

    console.log(this.client);
    console.log(this.adresse);
  }

}
