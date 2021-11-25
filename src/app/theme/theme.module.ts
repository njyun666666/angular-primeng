import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainThemeComponent } from './main-theme/main-theme.component';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuModule } from 'primeng/panelmenu';



@NgModule({
  declarations: [
    MainThemeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ToolbarModule,
    PanelMenuModule
  ],
  exports: [
    MainThemeComponent
  ]
})
export class ThemeModule { }
