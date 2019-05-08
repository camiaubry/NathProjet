import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort,MatDialog} from '@angular/material';
import { AdminListeArticleDialogueComponent } from '../admin-liste-article-dialogue/admin-liste-article-dialogue.component';
import { Article } from '../model/article';
import { ArticleService } from '../service/article/article.service';

@Component({
  selector: 'app-admin-liste-article',
  templateUrl: './admin-liste-article.component.html',
  styleUrls: ['./admin-liste-article.component.css']
})
export class AdminListeArticleComponent implements OnInit {
  displayedColumns: string[] = ['titre', 'categorie', 'age', 'marque','prix','MAJ'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<Article>();

  constructor(public dialog: MatDialog, public articleService: ArticleService) {}


  openDialog() {
    this.dialog.open(AdminListeArticleDialogueComponent, {
    });
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.articleService.getAll().subscribe(data => {
      this.dataSource.data = data;
      console.log(data)
    })
  }
}

