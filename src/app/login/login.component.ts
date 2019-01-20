import { Component, OnInit } from '@angular/core';
import {LoginService} from "../service/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name : string;
  pass : string;

  constructor(public loginService : LoginService) { }

  ngOnInit() {
  }

  connexion(){
    // if(this.checkName() && this.checkPass()){
      this.loginService.getLogin(this.name,this.pass);
    // }
  }

  checkName(){
    return this.name != "" && this.name != undefined
  }

  checkPass(){
    return this.pass != "" && this.pass != undefined
  }
}
