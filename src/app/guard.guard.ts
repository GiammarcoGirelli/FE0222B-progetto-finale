import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(){
    if (localStorage.getItem('utentecorrente')) {
    return true;
  }
  return this.router.createUrlTree(['/login']);
}
}
