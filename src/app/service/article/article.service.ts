import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    console.log("PROUTTTTTTTTTTTTTTTTTTTT")
    return this.http.get('//localhost:8080/api/article');
  }
}
