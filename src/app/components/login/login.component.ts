import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import  {HomeComponent} from'../home/home.component'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = {
    username: "admin",
    password: "admin",

  };

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    const data = {
      username: this.model.username,
      password: this.model.password
    };
    if (data.username=="admin"&&data.password=="admin") {

      window.location.href = '/home';

    } else{
      window.location.href = '/404';

    }
  }


}
