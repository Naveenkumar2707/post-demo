import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

import {
  UserSession,
} from '../../shared/models/storage-models';

@Injectable()
export class StorageService {
  
  private authKey = "demo:auth";
  


  constructor() { }

  /**
   * Creates a session in Storage
   * @param persistance 
   * @param session 
   */
  public createSession( session: UserSession): void {
    //Before creating remove if existent    
    this.removeSession();    
    localStorage.setItem(this.authKey, JSON.stringify(session));    
  }

  /**
   * Removes tha Auth object in Storage
   */
  public removeSession(): void {
    localStorage.removeItem(this.authKey);    
  }


  /**
   * Reads Storage to return the token
   */
  public getToken(): any {
    var authObj = localStorage.getItem(this.authKey);    

    if (authObj) {
      return JSON.parse(authObj).token;
    }    
    return null;
  }

   /**
   * Reads Storage to return the token
   */
  public getIdToken(): any {
    var authObj = localStorage.getItem(this.authKey);    

    if (authObj) {
      return JSON.parse(authObj).token;
    }    
    return null;
  }
    
  /**
   * Returns the jwt expiration date
   * @param token 
   */
  public getTokenExpirationDate(token: string): Date {
    var decoded = jwt_decode(token);    
    if (decoded.exp === undefined) return null;
    var date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  /**
   * Returns true if the token has expired
   */
  public isTokenExpired(): boolean {
    var token = this.getIdToken();
    if(!token) return true;

    var date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  /**
   * Returns the user session
   */
  public getUserSession(): UserSession {
    var authObj = localStorage.getItem(this.authKey);
    
    if (authObj) {
      return JSON.parse(authObj);
    }    
    return null;
  }

  /**
   * Updates the user session
   * @param userData 
   */
  public setUserData(userData: UserSession): void {  
    localStorage.setItem(this.authKey, JSON.stringify(userData));
  }
}