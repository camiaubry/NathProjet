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

  create(article : Article){
    return this.http.post<Article>(this.url,article) as Observable<any>

  }

}
