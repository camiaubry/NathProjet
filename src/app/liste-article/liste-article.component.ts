import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DetailArticleDialogueComponent } from '../detail-article-dialogue/detail-article-dialogue.component';
import { ArticleService } from "../service/article/article.service";
import { Panier } from '../model/panier';
import { PanierService } from '../service/panier/panier.service';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

  listeArticles = [];


  constructor(public dialog: MatDialog, private articleService: ArticleService, private panierService: PanierService) { }

  openDialog() {
    this.dialog.open(DetailArticleDialogueComponent, {
    });
  }

  ngOnInit() {
    this.articleService.getAll().subscribe(data => {
      this.listeArticles = data
      console.log(data)
    })
    this.panierService.getAll().subscribe(data => {
      console.log(data)
    })
  }
  

  ajoutPanier(article) {
    const id = Math.floor(Date.now()/1000).toString();
    const panier = new Panier(id,article,null);


    this.panierService.create(panier).subscribe(
          success => {
            this.openDialog();
            console.log(panier)
          },
          error => {
            console.log(error)
          }
        )

    // if (localStorage.getItem('langLocale') === null) {
    //   console.log(article)
    //   panier.id = Math.floor(Date.now()/1000).toString()
    //   localStorage.setItem('langLocale', panier.id.toString());
    //   this.panierService.create(panier).subscribe(
    //     success => {
    //       this.openDialog();
    //       console.log(panier)
    //     },
    //     error => {
    //       console.log(error)
    //     }
    //   )
    // }
    // else{
    //   panier.id = localStorage.getItem('langLocale')
    //   this.panierService.getById(localStorage.getItem('langLocale')).subscribe(
    //     success=>{
    //       console.log(article)
    //       this.panierService.update(article).subscribe(success=>{
    //         console.log(success)
    //       })
    //   })
    // }
  }

}
