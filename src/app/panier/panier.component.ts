import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Panier} from '../model/panier';
import {PanierService} from "../service/panier/panier.service";
import {ArticleService} from "../service/article/article.service";
import { Article } from '../model/article';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PanierComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  articleBean : string;
  commandeBean : string;
  titre : string;
  categorie: string;
  prix: Number;
  age: string;
  reference: string;
  photo: Blob;
  marque: string;
  qualite: string;

  constructor(private _formBuilder: FormBuilder, private panierService : PanierService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });



  }

  Click() {
    alert('Adresse Sélectionnée') ;
    let matCard = document.getElementById('snackbar');
    matCard.style.backgroundColor = 'red';
  }

  BtnDisabled() {
  }

  modifier() {

    const panier = new Panier();
    panier.commandeBean = this.commandeBean;
    const article = new Article();
    article.titre = this.titre;
    article.categorie = this.categorie;
    article.prix = this.prix;
    article.age = this.age;
    article.reference = this.reference;
    article.photo = this.photo;
    article.marque = this.marque;
    article.qualite = this.qualite;
    panier.listeArticle.push(article);
    this.panierService.delete(panier).subscribe(client=>{
      console.log(panier)
    });

  }
}
