import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { StorageService } from './storage.service';
import { environment } from '../../../environments/environment';

import { ErrorHandler }  from '../handlers/error-handler';

@Injectable()
export class APIUtilsService {

    public commonHeaders: HttpHeaders;
    public commonParams :HttpParams;
    private baseURL = environment.baseURL;

    constructor(private http: HttpClient, private storage: StorageService,private errorHandler:ErrorHandler) {
        this.commonHeaders = new HttpHeaders();
        this.commonParams = new HttpParams()
        this.commonHeaders = this.commonHeaders.set('Content-Type', 'application/json; charset=utf-8');        
    }

    
    /**
     * Performs a get query to the db
     * @param url 
     */
    get(url: string): Observable<any> {
        this.commonHeaders = this.commonHeaders.set('x-access-token', this.storage.getIdToken());
        return this.http.get<any>(this.baseURL + url, { headers: this.commonHeaders, observe: 'response' })        
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

    /**
     * Performs a post query to the db
     * @param url 
     * @param query 
     */
    post(url: string, data: any): Observable<any> {
        this.commonHeaders = this.commonHeaders.set('x-access-token', this.storage.getIdToken());
        
        return this.http.post<any>(this.baseURL + url, data , { headers: this.commonHeaders, observe: 'response' })
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

}