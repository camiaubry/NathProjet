import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../service/article/article.service";

@Component({
  selector: 'app-admin-add-article',
  templateUrl: './admin-add-article.component.html',
  styleUrls: ['./admin-add-article.component.css']
})
export class AdminAddArticleComponent implements OnInit {

  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.articleService.getAll().subscribe(data =>{
      console.log(data)
    })
  }

}
