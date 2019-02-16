import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DetailArticleDialogueComponent } from '../detail-article-dialogue/detail-article-dialogue.component';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DetailArticleDialogueComponent, {
    });
  }

  ngOnInit() {
  }

}
