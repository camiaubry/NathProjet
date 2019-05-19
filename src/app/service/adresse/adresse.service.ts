import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Adresse} from "../../model/adresse";

@Injectable({
  providedIn: 'root'
})
export class AdresseService {
  
    url = "//localhost:8080/api/adresse";
  
    constructor(private http: HttpClient) { }
  
    update(adresse : Adresse):Observable<any>{
      return this.http.put(this.url,adresse) as Observable<any>;
    }

    getAll():Observable<any>{
      return this.http.get(this.url) as Observable<any>;
    }

    getAdresse(id : Number):Observable<any>{
      return this.http.get(this.url + '/'+ id) as Observable<any>;
    }
  }