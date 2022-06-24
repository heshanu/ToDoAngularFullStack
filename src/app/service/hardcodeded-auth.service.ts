import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HardcodededAuthService {
  constructor(private router: Router) {}

  authenticate(username: any, password: any) {
    //console.log('before'+this.isUserLoggedIn());
    if (username === 'heshan' && password === '123') {
      sessionStorage.setItem('authnicateUser',username);
     this.router.navigate(['/welcome/in28minutes']);
//console.log('after'+this.isUserLoggedIn());
     return true;
    } else {
    // this.router.navigate(['/login']);
    return false;
    }
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authnicateUser');
    return !(user==null)
  }
}
