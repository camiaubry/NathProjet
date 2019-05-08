import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DetailArticleDialogueComponent } from '../detail-article-dialogue/detail-article-dialogue.component';
import { GuidetailleDialogueComponent } from '../guidetaille-dialogue/guidetaille-dialogue.component';
import { ArticleService } from '../service/article/article.service';
import { Panier } from '../model/panier';
import { PanierService } from '../service/panier/panier.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/article';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  id : number;
  article = new Article();

  constructor(public dialog: MatDialog, private articleService: ArticleService, private panierService: PanierService,
  private route: ActivatedRoute) { }

  openDialog() {
    this.dialog.open(DetailArticleDialogueComponent, {
    });
  }

  openDialog2() {
    this.dialog.open(GuidetailleDialogueComponent, {
    });
  }


  ngOnInit() {
    const param = this.route.params.subscribe(params => {
      this.id = +params['id']
    })
    this.articleService.getArticle(this.id).subscribe(data => {
      this.article.titre=data.titre;
      this.article.description=data.description;
      this.article.categorie=data.categorie;
      this.article.prix=data.prix;
      this.article.age=data.age;
      this.article.reference=data.reference;
      this.article.photo=data.photo;
      this.article.photo2=data.photo2;
      this.article.marque=data.marque;
      this.article.qualite=data.qualite;
      console.log(data.titre);
    })
  }


  ajoutPanier(article) {
    const id = Math.floor(Date.now() / 1000).toString();
    const panier = new Panier(id, article, null);


    this.panierService.create(panier).subscribe(
      success => {
        this.openDialog();
        console.log(panier)
      },
      error => {
        console.log(error)
      })
  }
}
