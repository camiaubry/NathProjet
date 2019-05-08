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

  create(panier : Panier):Observable<any>{
    return this.http.post<Panier>(this.url,panier) as Observable<any>
  }

  update(panier : Panier):Observable<any>{
    return this.http.put<Panier>(this.url,panier) as Observable<any>
  }

  getById(panier):Observable<any>{
    return this.http.get<Panier>(this.url + '/'+ panier) as Observable<any>
  }

  getAll():Observable<any>{
    return this.http.get(this.url) as Observable<any>;
  }

}
