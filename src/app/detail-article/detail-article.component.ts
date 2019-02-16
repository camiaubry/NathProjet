import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DetailArticleDialogueComponent } from '../detail-article-dialogue/detail-article-dialogue.component';
import { GuidetailleDialogueComponent } from '../guidetaille-dialogue/guidetaille-dialogue.component';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DetailArticleDialogueComponent, {
    });
  }

  openDialog2() {
    this.dialog.open(GuidetailleDialogueComponent, {
    });
  }


  ngOnInit() {
  }

}
