import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../service/article/article.service";
import {Article} from "../model/article";

@Component({
  selector: 'app-admin-add-article',
  templateUrl: './admin-add-article.component.html',
  styleUrls: ['./admin-add-article.component.css']
})
export class AdminAddArticleComponent implements OnInit {

  id?: Number;
  titre?: string;
  categorie?: string;
  prix?: Number;
  age?: string;
  reference?: string;
  photo?: Blob;
  photo2?: Blob;
  marque?: string;
  qualite?: string;
  fileName: string;
  fileName2: string;
  genre: string;
  msg : string;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getAll().subscribe(data => {
      console.log(data)
    })
  }

  sauvegarder() {
    const article = new Article();
    article.titre = this.titre;
    article.categorie = this.categorie;
    article.prix = this.prix;
    article.age = this.age;
    article.reference = this.reference;
    article.photo = this.photo;
    article.photo2 = this.photo2;
    article.marque = this.marque;
    article.qualite = this.qualite;
    article.genre = this.genre;

    console.log(this.photo)

    this.articleService.create(article).subscribe(
      success => {
        console.log(success)
        this.msg = "Ajout effectué avec succès"
        this.showSnackBar("green")
      },
      error => {
        this.msg = "Ajout en erreur";
        this.showSnackBar("red")
      }
    )



  }

  showSnackBar(color) {
    let snackbar = document.getElementById('snackbar');
    // Add the "show" class to DIV
    snackbar.className = 'show';
    snackbar.style.backgroundColor = color;
    // After 5 seconds, remove the show class from DIV
    setTimeout(function () {
      snackbar.className = snackbar.className.replace('show', '');
    }, 5000);
  }

}


