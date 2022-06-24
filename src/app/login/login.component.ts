import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodededAuthService } from '../service/hardcodeded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private hardcodededAuthService: HardcodededAuthService
  ) {}

  username!: string;
  password!: string;
  errorMessage!: string;
  invalidLogin!: boolean;
  ngOnInit(): void {}

  Login() {
    this.invalidLogin = this.hardcodededAuthService.authenticate(
      this.username,
      this.password
    );
    if (this.invalidLogin) {
      return (this.errorMessage = 'successfull');
    } else {
      return (this.errorMessage = 'Faild');
    }
  }
}
