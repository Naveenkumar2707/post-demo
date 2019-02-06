import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';


import { MaterialModule } from './material.module';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [    
    
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,  
    MatNativeDateModule,


  ],
  entryComponents: []
})
export class SharedModule {}
