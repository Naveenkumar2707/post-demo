import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs'; 
import { HttpClient, HttpHeaders,HttpParams,HttpErrorResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class ErrorHandler {

    constructor(private router:Router){}

    handleHttpError(err )  : Observable<any> {
        if (err instanceof HttpErrorResponse) {
            if(err.status == 202){
              
                    this.router.navigate(['auth']);
            } else if(err.error.error){
              return of({
                'err': true,
                'err_msg': err.error.error_msg})
            }else{
                return of({
                    'err': true,
                    'err_msg': 'Something Went Wrong'})
            }
           
          }
    }
}