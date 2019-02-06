import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { APIUtilsService } from './api.utils.service';
import { Observable ,of} from 'rxjs'; 
import { HttpClient, HttpHeaders,HttpParams,HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ErrorHandler }  from '../handlers/error-handler';
@Injectable()
export class AuthService {

  public firebaseAuthInstance;
  private baseURL = environment.baseURL;
  public commonHeaders: HttpHeaders;
  constructor(
    private storage: StorageService,
    private router: Router,
    private api:APIUtilsService,
    private http: HttpClient,
    private errorHandler:ErrorHandler) {
      this.commonHeaders = new HttpHeaders();
      this.commonHeaders = this.commonHeaders.set('Content-Type', 'application/json; charset=utf-8'); 
  }

 

  loginWithEmailAndPassword(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseURL + 'user/login',{'email' : username, 'password':password}, { headers: this.commonHeaders, observe: 'response' })        
    .pipe(
        map(
            httpResponse => {
                return httpResponse.body;
            }
        ),
        catchError((err, caught) => {
         return this.errorHandler.handleHttpError(err);
         
        })
    );
  }

   // register
   register(userDetail :any ): Observable<any> {
    return this.http.post<any>(this.baseURL + 'user/register', userDetail , { headers: this.commonHeaders, observe: 'response' })        
    .pipe(
        map(
            httpResponse => {
                return httpResponse.body;
            }
        ),
        catchError((err, caught) => {

         return this.errorHandler.handleHttpError(err);
         
        })
    );
  }

   

  logout(): void {
    this.storage.removeSession();
   
  }

}
