
import {  ModuleWithProviders, NgModule } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { AuthService } from './services/auth.service';
import { APIUtilsService } from './services/api.utils.service';
import { StorageService } from './services/storage.service'
import { ErrorHandler } from './handlers/error-handler'
import { GlobalVariables } from './services/GlobalVAriables'


@NgModule()
export class ProvidersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProvidersModule,
      providers: [
        APIUtilsService,
        AuthService,
        StorageService,    
        ErrorHandler,   
        GlobalVariables,         
        { provide: DateAdapter, useClass: NativeDateAdapter}  
      ],
    }
  }
}
