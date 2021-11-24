import { PrimengModule } from './modules/primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    PrimengModule
  ]
})
export class SharedModule { }
