import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from '../services/storage.service';


@Injectable()
export class RouterGuard implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (!this.storageService.isTokenExpired()) {
     
      return true
    } 
    this.router.navigate(['auth']);
     return false;

  }

  

}