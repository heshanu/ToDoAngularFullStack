import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  username!: string;
  password!: string;
  errorMessage!: string;
  invalidLogin!: boolean;
  ngOnInit(): void {}

  Login() {
    if (this.username === 'heshan' && this.password === '123') {
      this.invalidLogin=false;
      alert('hi');
    }else{
      this.invalidLogin=true;
      alert('hhh');
    }
  }
}
