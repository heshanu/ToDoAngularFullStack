import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router:Router) {}

  username!: string;
  password!: string;
  errorMessage!: string;
  invalidLogin!: boolean;
  ngOnInit(): void {}

  Login() {
    if (this.username === 'heshan' && this.password === '123') {
      this.invalidLogin=false;
      this.router.navigate(['welcome',this.username]);
    }else{
      this.invalidLogin=true;
      alert('hhh');
    }
  }
}
