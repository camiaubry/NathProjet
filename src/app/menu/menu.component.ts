import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../service/article/article.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed : boolean = false;

  title = 'NathProjet';
  recherche = '';

  mobileQuery: MediaQueryList;

  constructor(private articleService : ArticleService) {}

  ngOnInit() {
  }

  toggleSearch(){
    this.isCollapsed = !this.isCollapsed;
  }

  redirectPanier(){
    window.location.href='/#/panier'
  }

  rechercher(param : String){
    this.articleService.getArticleSearch(param).subscribe(data =>
      console.log(data)
      // Faire redirection sur listeArticle + passer en paramètre le data
    )
  }

}
