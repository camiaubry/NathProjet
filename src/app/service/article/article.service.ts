import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../../model/article";

@Injectable()
export class ArticleService {

  url = "//localhost:8080/api/article";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url) as Observable<any>;
  }

  create(article : Article): Observable<any> {
    return this.http.post<Article>(this.url,article) as Observable<any>;

  }

  getArticle(id : Number):Observable<any>{
    return this.http.get(this.url + '/'+ id) as Observable<any>;
  }

  getArticleSearch(param : String):Observable<any>{
    return this.http.get(this.url + '/search/'+ param) as Observable<any>;
  }

}
