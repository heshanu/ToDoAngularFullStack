import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodededAuthService } from '../hardcodeded-auth.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardGuard implements CanActivate {
  constructor(private router:Router,private hardcodededAuthService: HardcodededAuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.hardcodededAuthService.isUserLoggedIn())
      return true;

    this.router.navigate(['/login'])
    return false;

  }
}
