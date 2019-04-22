import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Panier } from '../../model/panier';
@Injectable({
  providedIn: 'root'
})
export class PanierService {

  url = "//localhost:8080/api/panier";

  constructor(private http: HttpClient) { }

  delete(panier : Panier):Observable<any>{
    return this.http.delete(this.url) as Observable<any>;
  }

  getAll():Observable<any>{
    return this.http.get(this.url) as Observable<any>;
  }
}
