import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Client } from '../../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  url = "//localhost:8080/api/client";

  constructor(private http: HttpClient) { }

  update(client : Client):Observable<any>{
    return this.http.put(this.url,client) as Observable<any>;
  }

  getAll():Observable<any>{
    return this.http.get(this.url) as Observable<any>;
  }

  getClient(id : Number):Observable<any>{
    return this.http.get(this.url + '/'+ id) as Observable<any>;
  }
}
