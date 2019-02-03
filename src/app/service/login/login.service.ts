// import { Injectable } from '@angular/core';
// import {Observable} from "rxjs";
// import {HttpClient} from "@angular/common/http";
// import {HttpHeaders} from "@angular/common/http";
// import {Headers} from "@angular/http";

// @Injectable({
//   providedIn: 'root'
// })

// @Injectable()
// export class LoginService {

//   private serviceUrl = '/login';

//   constructor(private httpClient: HttpClient) { }


//   getLogin(name:string,pass:string): Observable<any> {

//     var str = btoa(name + ':' + pass);
//     let headers = new HttpHeaders();
//     headers.append('Authorization', btoa(str));

//     return this.httpClient.get(this.serviceUrl, {headers: headers}) as Observable<any>;
//   }

// }
