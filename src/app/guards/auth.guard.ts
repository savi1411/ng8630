import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private roteador: Router) {}

  canActivate(): boolean {
    if(localStorage.getItem('TOKEN')){
      return true;
    } else {
      this.roteador.navigate(['']);
      return false;
    }
  }  
}
